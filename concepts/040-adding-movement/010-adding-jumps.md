
## Jumpman

Gliding around the ground is cool and all, but that pit in the middle there is a little concerning. If only we had a way to jump over it... Time to give Josh some sweet mario powers!

Take similar steps as you did with left and right to check for the up arrow to be pressed and add your logic.

<hint title="jump function">
```javascript
// ... Above code omitted

// Check which controller button is being pushed and execute movement & animation
  update(cursors) {
    this.updateMovement(cursors)
    this.updateJump(cursors)
  }

/// ... code omitted for brevity

  updateJump(cursors) {
    if (cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-800);
    }
  }

// ... Below code omitted
```

Now we're cooking. We create a jump helper and add it to our player's update function so each time our Scene updates it will also check to see if the player is jumping. Watch out, though, if you missed including the check to see if the player is on the ground you may find his jumps to be TOO powerful!

</hint>

Now that we can finally move around our world, it'd be nice if it wasn't so... creepy just floating around. It's time to animate Josh and make him come to life!
