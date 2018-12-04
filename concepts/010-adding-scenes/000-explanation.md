## Background
Scenes are a logical abstraction that help you break up your game objects and logic into manageable parts. You can think of a scene as similar to a web page on which you place html elements (analogous to your game objects) and javascript (analagous to your game logic). Some example scenes might include: title screen, game over screen, or a specific level of your game. In Phaser 3, scenes can also be layered upon one another, allowing you do things like: break up a sidescrolling game level into a non-interactable moving background scene and a foreground scene containing game objects that interact with one another. You can always just put everything into one scene, but as you continue to add game objects and logic, you may find your single scene quickly becoming unmanageable.

## Setting Up the Scene Organization
The basic directory structure and files are already set up for you. You will need to do the following:

* In index.js, import all your scenes and add them to the game instance. Then start the MainScene
* In scenes/MainScene.js, start the BgScene and FgScene in parallel

<hint title="index.js solution">
```javascript
// ... Above code omitted
import MainScene from './scenes/MainScene'
import BgScene from './scenes/BgScene';
import FgScene from './scenes/FgScene';
import config from './config/config'

class Game extends Phaser.Game {
  constructor() {
    // Add the config file to the game
    super(config);
    // Add all the scenes
    this.scene.add('BgScene', BgScene)
    this.scene.add('FgScene', FgScene)
    this.scene.add('MainScene', MainScene)
    // Start the game with the mainscene
    this.scene.start('MainScene')
  }
}
// ... Below code omitted
```
</hint>

<hint title="MainScene.js solution">
```javascript
// ... Above code omitted

    // Load scenes in parallel
    this.scene.launch('BgScene');
    this.scene.launch('FgScene');

// ... Below code omitted
```
</hint>

If you run "npm start", you should still see a blank screen and in the console you should see that the Phaser game engine has started. Don't worry, in the next section, we'll be adding sprites to our game so we'll be able to see something more than a blank screen.
