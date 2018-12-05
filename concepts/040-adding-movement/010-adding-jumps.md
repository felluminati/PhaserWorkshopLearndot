
## Jumpman

Gliding around the ground is cool and all, but that pit in the middle there is a little concerning. If only we had a way to jump over it... Time to give Josh some sweet mario powers!

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

```javascript
// ... Above code omitted

 this.createGround(160, 540);
 this.createGround(600, 540);

// ... Below code omitted
```

Sweet there's ground! But our player doesn't seem to notice and falls right through it! Hmm... we need a way to make him... collide with it ;)

</hint>
