## Are You Picking Up What I'm Putting Down?

So far we've only used the default collision logic for our game objects. However, we're going to need more than that in this case: we'd like our player to pick up the gun when he touches it.

To apply custom logic to a collision, we're going to create a callback function that handles the collision. We'll need to register the callback with the game engine like so:

In FgScene.js:
```javascript
export default class FgScene extends Phaser.Scene {
  constructor() {
    super('FgScene');

    // Bind callback functions to the object context
    this.collectGun = this.collectGun.bind(this);
  }

  // ... preload() code omitted

  create() {
    // ... Code omitted

    // When the player collides with the gun
    this.physics.add.overlap(
      this.player,
      this.gun,
      this.collectGun,    // Our callback function that will handle the collision logic
      null,               // processCallback. Can specify a function that has custom collision
                          // conditions. We won't be using this so you can ignore it.
      this                // The context of 'this' for our callback. Since we're binding
                          // our callback, it doesn't really matter.
    );
  }

  // Callback fn
  collectGun(player, gun) {
    // << ADD GAME LOGIC HERE >>
  }
}
```

Take a crack at filling in the game logic for collecting the gun. Here's the logic we'll need to implement:

- Make the gun disappear from the ground
- Create a variable to track whether the player is armed
- For the player, display the sprite showing he's holding the laser gun

<hint title="Solution: picking up the gun">
In FgScene.js:
```javascript
  // ... Code omitted

  create() {
    // ...

    // Define the single frame in the tilesheet that represents the player idle and holding a gun
    this.anims.create({
      key: 'idleArmed',
      frames: [{ key: 'josh', frame: 6 }],
      frameRate: 10,
    });
  }

  // Callback fn
  collectGun(player, gun) {
    // Make the gun disappear from the ground.
    gun.disableBody(true, true); // (disableGameObj, hideGameObj)
    // Set the player to 'armed'
    this.player.armed = true;
  }
```

In Player.js:
```javascript
export default class Player extends Phaser.Physics.Arcade.Sprite {
  // ... Code omitted

  updateMovement(cursors) {
    // ...
    if (cursors.left.isDown) {
      // ...
    } else if (cursors.right.isDown) {
      // ...
    } else {
      // ...
      if (!this.armed) {
        this.anims.play('idleUnarmed');
      } else {
        this.anims.play('idleArmed');
      }
    }
    // ...
  }
}
```
</hint>

