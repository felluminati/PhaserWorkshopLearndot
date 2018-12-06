By now you've probably had enough of darkness. We're creators so lets get to creating!

## The Background

Since we have created a background scene (`BgScene`), let's start there. Dive into our src file and head over to scenes to find the `BgScene.js` file. The basic scaffolding has been set up for you.

## Adding assets

Recall back to the primary methods of the Phaser engine. Here we see two of them ready to be added to. First, we must preload our assets. Just like the `index.js`, we're working inside a Class object, so we refer to the scene with 'this'. See if you can find the structure of a preload for our 'sky' asset and our 'logo' asset.

<hint title="Check out the docs">
Take a peek at the Phaser docs and scroll down to "path :string" for a little help!
[Here](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.LoaderPlugin.html)
</hint>

<hint title="preload solution">
```javascript
// ... Above code omitted

preload() {
    this.load.image('sky', 'assets/backgrounds/sky.png');
    this.load.image('logo', 'assets/backgrounds/fullBlastLogo.png')
  }

// ... Below code omitted
```

Using `this.load` interacts with Phaser's Loader. We then tell it what we're loading and where it lives!

</hint>
