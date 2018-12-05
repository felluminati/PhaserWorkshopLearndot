## Reusing Lasers

You might've noticed that we're creating a new Laser object every time we fire the gun. After time, that becomes a lot of objects! For a fun test, you can open up your browser's inspector and go to the performance tab and starting recording your game's performance. Hold down the spacebar and watch as your game's FPS slowly drops as you create more and more lasers.

One way we can fix this is by creating a fixed pool of lasers and reusing the ones that become inactive.

Steps:
- Modify Laser so that it can be reset with new values
- Modify our group of lasers to have a limit
- Select an inactive laser to be reused for a new shot


<hint title="Solution">
In Laser.js:
```javascript
export default class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey, facingLeft) {
    // ... Code omitted

    // Set how fast the laser travels (pixels/ms)
    this.speed = Phaser.Math.GetSpeed(800, 1); // (distance in pixels, time (ms))

    // Important to not apply gravity to the laser bolt!
    this.body.setAllowGravity(false);

    // Our reset function will take care of initializing the remaining fields
    this.reset(x, y, facingLeft)
  }

  // ... Code omitted

  // Reset this laserbolt to start at a particular location and
  // fire in a particular direction.
  reset(x, y, facingLeft) {
    this.setActive(true);
    this.setVisible(true);
    this.lifespan = 900;
    this.facingLeft = facingLeft
    this.setPosition(x, y)
  }
```

In FgScene.js:
```javascript
export default class FgScene extends Phaser.Scene {
  // ... Code omitted

  create() {
    // ...

    // We're going to create a group for our lasers
    this.lasers = this.physics.add.group({
      classType: Laser,
      runChildUpdate: true,
      allowGravity: false,
      maxSize: 40             // Shouldn't be necessary, but let's add a limit to this group
                              // for good measure
  });

  // Callback fn. We implement it here b/c our scene has references to the lasers group and the player
  fireLaser(x, y, left) {
    // ... Code omitted

    // Get the first available laser object that has been set to inactive
    let laser = this.lasers.getFirstDead();
    // Check if we can reuse an inactive laser in our pool of lasers
    if (!laser) {
      // Create a laser bullet and scale the sprite down
      laser = new Laser(
        this,
        laserX,
        laserY,
        'laserBolt',
        this.player.facingLeft
      ).setScale(0.25);
      this.lasers.add(laser);
    }
    // Reset this laser to be used for the shot
    laser.reset(laserX, laserY, this.player.facingLeft);
  }
}
```
</hint>

Now for the test of truth: let's open up the browser inspector and go to the performance tab and start recording the game's performance. Hold the spacebar and fire away!

<hint title="What happens?">
We can fire lasers until we're blue in the face and the frame rate of our game will remain stable! Hooray
</hint>

Another fun way to verify that our lasers are being reused:

- Go to your game config file and set debug to true
- You should now be able to see the bounding boxes of game objects while playing the game
- Fire a shot at the enemy and note the lingering outline of the laser as it hits the enemy and disappears / becomes inactive
- Fire another shot in the opposite direction and notice that the inactive laser disappears -- it gets reused as our new laser shot!

![debug-reuse-lasers] (https://learndotresources.s3.amazonaws.com/workshop/5c05a8e36ed8580004fb944e/laser-pool-debug.gif)




