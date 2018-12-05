Finally, a happy landing! We've successfully created a player and some ground for him to stand on, not to mention giving him the ability to actually come into contact with that ground! A game where you just stand there and stare isn't exactly the most exciting thing, however, so let's tackle giving the player the ability to move around.

## Move your body

Before we can create our player's movements, we need to set up the player's controls. There's a couple ways to approach this:

* We could manually assign the keys we want Phaser to listen to
* We can use a special, ready-made object in Phaser called the "cursors"
( hint: 2 is WAY easier ;) )
Let's go ahead and create the cursors that our FgScene will need.

<hint title="cursors">
```javascript
// ... Above code omitted

create() {
// ...
    // Assign the cursors
    this.cursors = this.input.keyboard.createCursorKeys();
// ... Below code omitted
}
```
</hint>

## Back to Player.js

Alright we have our cursors. Some buttons included in the cursors object are up, down, left, right directional keys and the space bar. We can create a function in our Player that will take the cursors object and check to see if it's various keys are being pressed. Then we can add logic affecting the player's velocity on the X axis since we want him to move left and right across the level.


<hint title="movin' out">
```javascript
// ... Above code omitted
updateMovement(cursors) {
    // Move left
    if (cursors.left.isDown) {
      this.setVelocityX(-360);
    }
    // Move right
    else if (cursors.right.isDown) {
      this.setVelocityX(360);
    }
    // Neutral (no movement)
    else {
      this.setVelocityX(0);
    }
  }
// ... Below code omitted
```

So if we sense that the left key is down we will change the player's velocity to a negative number to move him left, and a positive number to go right. You'll notice at this point nothing happens when we try to move, however.  Let's go ahead and call our updateMovement function inside the player's update function and pass it the cursors.

```javascript
// ... Above code omitted
update(cursors) {
    this.updateMovement(cursors)
  }
// ... Below code omitted
```

Still nothing? Hmm... what's missing...?

</hint>

## Fg is key

By now you may have figured it out, but consider this: the Scene's update function is the only one that's getting called every frame by the game. Our logic is in the Player's update function, not the scene's. To ensure our scene's update function can use the player's we just have to call it inside.



<hint title="updating with update">
```javascript
// ... Above code omitted

// time: total time elapsed (ms)
  // delta: time elapsed (ms) since last update() call. 16.666 ms @ 60fps
  update(time, delta) {
    this.player.update(this.cursors);
  }
// ... Below code omitted
```

Since the scene has a player (this.player) it has all the methods available to that object (think compositional inheritance!). All we have to do is pass the player's update function the cursors on the scene and voila: we can move!

</hint>
