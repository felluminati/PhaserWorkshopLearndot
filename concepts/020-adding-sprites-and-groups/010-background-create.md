## The Creation

Preloading is all well and good, but if you snuck a peek at your localhost you probably still saw a black square! As satisfying as black squares are, we'd much prefer to see a blue sky and sweet logo!
Well, let's create them!

## Create()

The create method is ready to be filled out! See if you can add those images to the scene! Hint: You'll need to tell it an x and y coordinate as well as what you're creating!

<hint title="Check out the docs... again!">
[Here](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html)

Woah, that is a LOT of functions... Take special note of .setScale()!
</hint>

<hint title="create solution">
```javascript
// ... Above code omitted

 create() {
    // Background
    this.add.image(-160, 0, 'sky').setOrigin(0).setScale(.5);
    this.add.image(380,80,'logo').setScale(5)
  }

// ... Below code omitted
```

If you just add the image and checked out local host you may have finally seen something! Though it was a little off. Setting scale and origin will ensure it fits better in our game's preset size (from our config file)

</hint>
