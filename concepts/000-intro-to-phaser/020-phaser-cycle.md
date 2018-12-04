 A quick note about Phaser's game loop:

Phaser's game engine runs using three key methods:

## Method 1: Preload()

In order to populate your game with players, weapons, or even backgrounds you first need to Preload the assets into your game!

## Method 2: Create()

Preloading just makes the assets available to the game! You still need to "Create" them by assgining them into variables that the game can then use to refer back to.

## Method 3: Update()

The first two methods are static, however. Update will run every frame and do whatever updating needs to be done! This method will hold onto all the functions we want to run every frame.

An aside on frames:

Frames are an animation term used to describe a single complete picture in a series of images. Swaping frames sequencially gives the illusion of movement called animation. The speed at which this is done is refered to as Frame Rate. It's also worth noting that the human eye (on average) can only really notice 45 frames per second. Some can notice more than 200 though!

<guide>
You've gotten aquainted with the three core methods of Phaser's game engin
</guide>
