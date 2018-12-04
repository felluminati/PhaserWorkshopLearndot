## Adding an Enemy

We now have a player-controlled character that can run and jump. Great! But you know what would be better? What if we added an enemy and a way to defeat that enemy? Let's do just that.

For adding an enemy, we'll need to do a lot of similar steps to how we added our player:

- In FgScene, preload our sprite image: assets/sprites/brandon.png
- Create an Enemy class that extends Phaser.Physics.Arcade.Sprite
  * Apply the physics of the world to the enemy
  * Add itself to the scene
  * Scale the sprite to .25 (since it's too big)

- In FgScene create(), instantiate a new instance of the enemy and place him at the other side of the screen at position (600, 400)
- Add collisions for:
  * enemy and the ground (so he doesn't fall through)
  * player and the enemy

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

    // ...
    this.physics.add.collider(this.enemy, this.groundGroup);
    this.physics.add.collider(this.player, this.enemy);
  }
```
</hint>

Now we should see our enemy appear at the other side of the screen. We can also jump on the enemy's head and also push him off.

<<Add image>>
