## Picking up a Laser Gun

So far we've only used default collision logic for our game objects. In this case, we'd like our player to pick up the gun when he touches it, so we need to provide custom logic.

To do that, we're going to create a callback function that handles the collision and register it with the game engine like so:

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
-

<hint title="Picking up the gun">
In FgScene.js:
```javascript
  // ... Code omitted

  // Callback fn
  collectGun(player, gun) {
    // Make the gun disappear from the ground.
    gun.disableBody(true, true); // (disableGameObj, hideGameObj)
    // Set the player to 'armed'
    this.player.armed = true;
  }
```
</hint>

