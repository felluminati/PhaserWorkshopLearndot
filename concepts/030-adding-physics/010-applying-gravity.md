## Applying Gravity

We're going to want to apply gravity to only our player. The background, ground, and logo should remain stationary. We're going to need to modify our Player class to extend Phaser.Physics.Arcade.Sprite. And that's it!

But wait, now we have a new problem: our player falls through the ground to his doom as soon as we load the game. Let's fix that.

In FgScene:

```javascript
// ... Code above omitted

  create() {
    // ... Omitted

    this.physics.add.collider(this.player, this.groundGroup)
  }

// ... Code below omitted
```

What did we just do? With a single call to collider() we have now enabled our player to physically collide with the ground, preventing him from falling through. We can customize what happens when two game objects collide, but for now, the default behavior is fine.
