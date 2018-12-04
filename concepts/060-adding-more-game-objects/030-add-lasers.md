## Adding the Lasers

Now we'll do the preliminary set up for the lasers that will be fired from our laser gun. We won't add them to our scene yet, but in the next section, we'll make it so that they dynamically spawn from our gun and fly in the direction that our player is facing.


- Add the laser (assets/sprites/laserBolt.png)

<hint title="Adding laser solution">
entity/Gun.js:
```javascript
import 'phaser';

export default class Gun extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    // Store reference of scene passed to constructor
    this.scene = scene;
    // Add gun to scene and enable physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }
}

```

FgScene.js:
```javascript
// ... Code omitted

preload() {
  // ...
  this.load.image('gun', 'assets/sprites/gun.png');
}

create() {
  // ...
  // Gun. Our sprite is a little large, so we'll scale it down
  this.gun = new gun(this, 300, 400, 'gun').setScale(0.25);
  this.physics.add.collider(this.gun, this.groundGroup);
}

```
</hint>

We should see our shiney new gun on the ground:

![laser gun](https://learndotresources.s3.amazonaws.com/workshop/5c05a8e36ed8580004fb944e/fullblast-gun.png)


- Add the laser bullet (assets/sprites/laserBolt.png)

- In FgScene create(), instantiate a new instance of the enemy and place him at the other side of the screen at position (600, 400)
- Add collider for the enemy and the ground (so he doesn't fall through)

<hint title="Enemy.js solution">
```javascript
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy');
    // Store reference of scene passed to constructor
    this.scene = scene;
    // Add enemy to scene and enable physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    // Scale sprite
    this.setScale(0.25);
  }
}
```
</hint>

<hint title="FgScene.js solution">
```javascript
import enemy from '../entity/Enemy'

export default class FgScene extends Phaser.Scene {
  // ... Code omitted

  preload() {
    // ...
    this.load.image('enemy', 'assets/sprites/brandon.png')
  }

  create() {
    // ...
    this.enemy = new enemy(this, 600, 400)
  }
```
</hint>

Now we should see our enemy appear at the other side of the screen.

<<Add image>>
