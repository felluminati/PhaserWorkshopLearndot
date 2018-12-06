They say silence is golden. But you know what? Quiet is boring. Let's add some juicy sounds to our game.

Fortunately, we already have some sound assets ready for us. We're going to be adding sounds for:

- Jumping
- Firing lasers
- Enemy death


The steps to add a sound effect are:

- `preload` the sound asset
- `create` it in the game
- Play the sound

We can see how this works by adding a sound effect for our Player's jump:

In `FgScene`:
```js
// ... Code omitted

  preload() {
    // ...

    // Sounds
    this.load.audio('jump', 'assets/audio/jump.wav');
  }

  create() {
    // ...

    // Create sounds
    this.jumpSound = this.sound.add('jump');
  }

  update(time, delta) {
    this.player.update(this.cursors, this.jumpSound); // Add a parameter for the jumpSound

    // ...
  }
// ... Code omitted
```

In `Player`:
```js
// ... Code omitted

  // Check which controller button is being pushed and execute movement & animation
  update(cursors, jumpSound) {
    // ...
    this.updateJump(cursors, jumpSound)
    // ...
  }

  // ...

  updateJump(cursors, jumpSound) {
    if (cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-800);
      jumpSound.play();           // Play our jump sound here
    }
  }

// ... Code omitted
```

You should now hear a springy **_boing!_** sound every time you jump.

Try your hand and adding sounds for the remaining two actions:

- Firing lasers (`assets/audio/laser.wav`)
- Enemy death (`assets/audio/scream.wav`)

<hint title="Solution for laser">
In FgScene.js:
```js
// ... Code omitted

  preload() {
    // ...
    this.load.audio('laser', 'assets/audio/laser.wav');
  }

  create() {
    // ...
    this.laserSound = this.sound.add('laser');
    // The laser sound is a bit too loud so we're going to turn it down
    this.laserSound.volume = 0.5;
  }

  update(time, delta) {
    // ...
    this.gun.update(
      time,
      this.player,
      this.cursors,
      this.fireLaser,
      this.laserSound
    );
    // ...
  }
// ... Code omitted
```

In Gun.js:
```js
// ... Code omitted

  // Check if the shoot button is pushed and how long its been since last fired
  update(time, player, cursors, fireLaserFn, laserSound) {
    if (cursors.space.isDown && time > this.lastFired) {
      if (player.armed) {
        laserSound.play();
        fireLaserFn()
        this.lastFired = time + this.fireDelay;
      }
    }
  }
// ... Code omitted
```
</hint>

<hint title="Solution for enemy death">
In FgScene.js:
```js
// ... Code omitted

  preload() {
    // ...
    this.load.audio('scream', 'assets/audio/scream.wav');
  }

  create() {
    // ...
    this.screamSound = this.sound.add('scream');
  }

  update(time, delta) {
    // ...
    this.enemy.update(this.screamSound);
  }
// ... Code omitted
```

In Enemy.js:
```js
// ... Code omitted

  constructor(scene, x, y, spriteKey) {
    // ...
    this.playedSound = false;
  }

  update(screamSound) {
    if (this.y > 600 && !this.playedSound) {
      this.playedSound = true;
      screamSound.play();
    }
  }
// ... Code omitted
```
</hint>

<guide>
Move on when your game is pleasing to the ears
</guide>
