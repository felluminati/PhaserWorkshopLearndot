## The Config file

A special note here about the config file. Think of this like the settings of your game. There's a whole lot you can stick in here to affect how Phaser will operate while running your game. For our project we're only using a few options.

```js
export default {
  type: Phaser.AUTO,  // Specify the underlying browser rendering engine (AUTO, CANVAS, WEBGL)
                      // AUTO will attempt to use WEBGL, but if not available it'll default to CANVAS
  width: 800,   // Game width in pixels
  height: 600,  // Game height in pixels
  // physics: { ... },   // Will be explained in more detail later
  // This option is to turn off the default behavior of images being automatically sharpened.
  // Since we'll be using pixel art, we want every beautiful pixel untouched!
  render: {
    pixelArt: true,
  },
  physics: {
    default: 'arcade'
  }
}
```

**_Phaser.AUTO_** will tell the engine what to use to render the images. In this case, we let the engine decide on what's best.

**_width_** and **_height_** dictate the size of the game (in pixels). These numbers will matter with where things are placed on the canvas.

**_physics_** says which physics engine to use. Since we're building a simple game, **Arcade** works well for us, but Phaser supports a few different physics engines. Here we can also set physics values like gravity. That will act just like gravity does in real life, pulling your objects toward the bottom of the screen with however much power you set!

The **_render_** setting will tell the engine we're using pixel art and will make small visual adjustments to sharpen things up.

