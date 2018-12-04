## Adding a Laser Gun

Now that we have an enemy, let's arm our player with a weapon. We can start the player off with a weapon, but wouldn't it be cooler if our player started unarmed and then could pick up a laser gun from the ground? We could then use the same logic to add more weapons in the future.

- Add the gun (assets/sprites/gun.png) at position (300, 400).
- Add collisions for:
  * the gun and the ground (so it doesn't fall through the floor)
  * gun and player (so the player can pick up the gun. *We'll do this next section)

<hint title="Adding laser gun solution">
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

  // ...
  this.physics.add.collider(this.gun, this.groundGroup);
}

```
</hint>

We should see our shiney new gun on the ground:

![laser gun](https://learndotresources.s3.amazonaws.com/workshop/5c05a8e36ed8580004fb944e/fullblast-gun.png)
