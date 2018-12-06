## Adding the Lasers

Our gun is impressive but it's not yet fully operational. All that's left is to have it fire lasers when you press the Spacebar. We'll need to do the following:

- Create a `Laser` entity to represent a single laser.
  * It will take: `startingX`, `startingY`, `direction`, `speed`
  * It will be responsible for moving the laser sprite in the specified direction
  * Each laser will have a timeout, so that we don't run out of memory from creating an infinite number of them
- Preload the laser asset (`assets/sprites/laserBolt.png`)
- Put in logic that checks whether the Spacebar is being pressed
  * Dynamically create lasers as long as the Spacebar is held down
- Add collision between the lasers and the enemy
- Create a pool of laser bolts that can be reused instead of creating a new one each time -- for better performance (*We'll do this in the next section)

Let's first start by creating our `Laser` entity and loading the asset:

<hint title="Solution">
In `entity/Laser.js`
```javascript
import 'phaser';

export default class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey, facingLeft) {
    super(scene, x, y, spriteKey);
    // Store reference of scene passed to constructor
    this.scene = scene;
    // Add laser to scene and enable physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    // true or false
    this.facingLeft = facingLeft;
    // Set how fast the laser travels (pixels/ms). Hard coded it here for simplicity
    this.speed = Phaser.Math.GetSpeed(800, 1); // (distance in pixels, time (ms))
    // How long the laser will live (ms). Hard coded here for simplicity
    this.lifespan = 900;
    // Important to not apply gravity to the laser bolt!
    this.body.setAllowGravity(false);
  }

  // Check which direction the player is facing and move the laserbolt in that direction as long as it lives
  update(time, delta) {
    this.lifespan -= delta;
    const moveDistance = this.speed * delta
    if (this.facingLeft) {
      this.x -= moveDistance
    } else {
      this.x += moveDistance
    }
    // If this laser has run out of lifespan, we "kill it" by deactivating it.
    // We can then reuse this laser object
    if (this.lifespan <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
```

In `FgScene.js`:
```javascript
// ...

preload() {
  // ...

  this.load.image('laserBolt', 'assets/sprites/laserBolt.png');
}

// We're not going to add it to the scene just yet. Preloading the asset is fine for now

```
</hint>

Now let's check if the Spacebar is pressed. If so, we'll create a new laser. There's multiple options for where we can put this logic. Good arguments could be made for putting it in either `Player`, `Gun`, `Laser`, or `FgScene`. Let's just put it in our `Gun` since it makes intuitive sense that lasers are emitted from a gun.

<hint title="Solution">
In `Gun.js`:
```javascript
export default class Gun extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    // ... Code omitted

    // Set the firing delay (ms)
    this.fireDelay = 100;
    // Keep track of when the gun was last fired
    this.lastFired = 0;
  }

  // Check if the shoot button is pressed and how long its been since we last fired
  update(time, player, cursors, fireLaserFn) {
    if (cursors.space.isDown && time > this.lastFired) {
      if (player.armed) {
        fireLaserFn();    // We'll implement this function in FgScene
        this.lastFired = time + this.fireDelay;
      }
    }
  }
}
```

In `FgScene.js`:
```javascript
export default class FgScene extends Phaser.Scene {
  constructor() {
    super('FgScene');

    // ...
    this.fireLaser = this.fireLaser.bind(this);
  }

  create() {
    // ...

    // We're going to create a group for our lasers
    this.lasers = this.physics.add.group({
      classType: Laser,
      runChildUpdate: true,
      allowGravity: false   // Important! When an obj is added to a group, it will inherit
                          // the group's attributes. So if this group's gravity is enabled,
                          // the individual lasers will also have gravity enabled when they're
                          // added to this group
    });
  }

  // time: total time elapsed (ms)
  // delta: time elapsed (ms) since last update() call. 16.666 ms @ 60fps
  update(time, delta) {
    // ...

    this.gun.update(
      time,
      this.player,
      this.cursors,
      this.fireLaser  // Callback fn for creating lasers
    );
  }

  // Callback fn. We implement it here b/c our scene has references to the lasers group and the player
  fireLaser(x, y, left) {
    // These are the offsets from the player's position that make it look like
    // the laser starts from the gun in the player's hand
    const offsetX = 56;
    const offsetY = 14;
    const laserX =
      this.player.x + (this.player.facingLeft ? -offsetX : offsetX);
    const laserY = this.player.y + offsetY;

    // Create a laser bullet and scale the sprite down
    const laser = new Laser(
      this,
      laserX,
      laserY,
      'laserBolt',
      this.player.facingLeft
    ).setScale(0.25);
    // Add our newly created to the group
    this.lasers.add(laser);
  }
}
```
</hint>

Now our gun should be able to fire lasers!

![fire-laser](https://learndotresources.s3.amazonaws.com/workshop/5c05a8e36ed8580004fb944e/fullblast-fire-laser.gif)




