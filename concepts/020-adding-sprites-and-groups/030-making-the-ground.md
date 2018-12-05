Well, our player exists. Only problem is he falls for eternity. Not ideal, so let's work on that!

## The Ground

Remember your training and create a new entity called Ground. Refer to your Player.js if you forget the structure.

<hint title="solution">
```javascript
import 'phaser';

export default class Ground extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    // Store reference of scene passed to constructor
    this.scene = scene;
    // Add ground to scene and enable physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }
}
```
</hint>

## Adding to FgScene

So far so good. Continue to mimic our previous steps with the Player entity.


<hint title="locked and loaded">
```javascript
// ... Above code omitted
this.load.image('ground', 'assets/sprites/ground.png');
// ... Below code omitted
```

Ah! We're back to load.image! That's because our ground here is static and we don't have a collection of images to deal with. We also don't need to specify the frame size either.
</hint>

## Create()

You're probably getting pretty good at this, but pump the breaks kid, we're taking a detour!
If you glance back at that .gif from our goal you'll recall there are TWO bits of ground there. Our previous method would only make one. The solution? Groups!



<hint title="make a group">
```javascript
// ... Above code omitted

this.groundGroup = this.physics.add.staticGroup({ classType: Ground });

// ... Below code omitted
```

So what's going on here? Well, we give the scene a group called groundGroup and add it as a staticGroup so the Arcade physics from our config file wont have an affect on the group. We then give it the class object we made and imported from our entity folder.

</hint>

If you peeked at your localhost you might have noticed something strange. Josh is still hanging around on the fridge but there's no ground! What gives? Well, all we've done is create an empty group and tell it what object it should use to populate itself. Next we'll need to do the populating. There's a couple ways we can achieve this, but we recommend a helper function here.

<hint title="getting by with a little help from a function">
```javascript
// ... Above code omitted

 createGround(x, y) {
    this.groundGroup.create(x, y, 'ground');
  }

// ... Below code omitted
```

This bad boy has the power to add new instances of the ground into our groundGroup using the create method available to group objects. All we need to do is tell it where to drop one in.

An aside on groups:

Groups are great when you need a lot of something and they all behave the same way. Enemies could be done this way too! Imagine sending waves of enemies that all shot their guns and moved across the screen the same way. They could be made into a group, making them easier to deal with than individual sprites would be.

All that's left is to call our new helper a couple times with some coordinates:

```javascript
// ... Above code omitted

 this.createGround(160, 540);
 this.createGround(600, 540);

// ... Below code omitted
```

Sweet there's ground! Now we just need a way for our player to interact with it. It's time to get physical...

</hint>
