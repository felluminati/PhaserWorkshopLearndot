We finally have blue skies! Next we'll create a character for our player to control.

## The Player

In order to create a player, we'll be moving into the FgScene since our player won't need to interact with the background at all. Take a peek and notice that FgScene is laid out similarly to how BgScene was but with one main difference. Notice it? BgScene didn't have an update() method even though it's one of the key methods Phaser uses! That's because our background is static so it won't need to update ever!

## Entity

Notice the entity folder. There you'll find a file called Player.js. Crack it open to find some basic scaffolding to get us started. Each object (or entity) of our game will have a class that extends from the Phaser superclass.

See how our constructor takes a scene, an x, y, and spriteKey? Those arguements are going to come from our FgScene when it creates our new Player instance. For now, we need to tell this class that it's scene is the scene being given from FgScene. After that we can add to it's exsisting scene... itself! How do???

<hint title="solution">
```javascript
// ... Above code omitted

 // Store reference of scene passed to constructor
    this.scene = scene;
    this.scene.add.existing(this);


// ... Below code omitted
```

Here we add the scene from our arguements to the class object's scene and then we assign the object to it using add.existing(). It's pretty unfamiliar now, but you'll be using those two lines for every entity you make!
</hint>

## Adding to FgScene

Once we have our Player class done we can import it just like we've learned from all our other workshops. Now, there's a few things we need to do before we can see our player object in our game.

## Preload()

Remember good ol' preload? Navigate into our public folder and from there dive into assets and finally spritesheets. You'll see Josh hanging out in there! That's our player! Now that we have his path we can load the spritesheet called 'josh' into our preload().

<hint title="locked and loaded">
```javascript
// ... Above code omitted

 // Store reference of scene passed to constructor
this.load.spritesheet('josh', 'assets/spriteSheets/josh.png', {
      frameWidth: 340,
      frameHeight: 460,
    });
// ... Below code omitted
```

Most of this should look pretty familiar, but with a couple twists. This time we're loading a 'spritesheet' and not just an 'image'. It's an important distinciton!

Spritesheets are .png files that Phaser uses to reference for frames of animation or collections of images. Because it's a special type of image, we have to tell Phaser that it is. Also, because it's a spritesheet we need to let Phaser know how big to make the height and width of the frame. Try messing with those numbers and see what happens!
</hint>

## Create()

Now that he's loaded, Josh needs to be created in our scene. Think back to what you learned about compositional inheritance. Since we created a class object we can create a new instance of it inside our scene. Don't forget about the arguments it takes!

<hint title="creation complete">
```javascript
// ... Above code omitted

 // Josh. The player. Our sprite is a little large, so we'll scale it down
    this.player = new player(this, 20, 400, 'josh').setScale(0.25);

// ... Below code omitted
```

You might have noticed Josh was pretty large there so we scale him down to keep things easy to fit in our game. You might have also noticed he hangs in the air like a magnet on the fridge. We'll need to address that, but first, let's add some ground for him to run around on.

</hint>
