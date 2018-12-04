## The Config file

A special note here about the config file. Think of this like the settings of your game. There's a whole lot you can stick in here to affect how Phaser will opperate while running your game. For our project we're only using a few options.

Phaser.AUTO will tell the engine what to use to render the images. In this case, we let the engine decide on whats best.

Width and Height dictate the size of the game. These numbers will matter with where things are placed on the canvas.

Physics tells the engine which physics to use. Since we're building a simple game, Arcade works well for us, but Phaser supports a few different physics engines. Here we can also set physic values like gravity. That will act just like gravity does in real life, pulling your objects toward the bottome of the screen with however much power you set!

The Render setting will tell the engine we're using pixel art and will make small visual adjustments to sharpen things up.

