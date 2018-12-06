## Background

**Newton's Zeroth Law of Motion:** _Physics must be present._

In order for our game objects to move and collide with one another, we need to add physics to our game. Luckily, Phaser comes with a few physics engines already baked in. We're going to be using the **_'Arcade Physics'_** game engine, which is a simple but fast physics engine.

First we're going to need to modify the `config`. Add the following option:

```javascript
export default {
  // ...
  physics: {    // Specify physics engine and configuration
    default: 'arcade',  // A simple and performant physics engine
    arcade: {
      gravity: { y: 1500 },  // Game objects will be pulled down along the y-axis
                        // The number 1500 is arbitrary. The higher, the stronger the pull.
                        // A negative value will pull game objects up along the y-axis
      debug: false,     // Whether physics engine should run in debug mode
    }
  }
  // ...
}
```
<hint title="After you've applied physics and gravity">
Nothing is moving! Why not? We'll need to change our player into a physics object so that our gravity configuration can be applied to it. We'll do that in the next section.
</hint>

