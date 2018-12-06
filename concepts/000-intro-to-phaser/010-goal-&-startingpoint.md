The starting point for this workshop can be found [here](https://github.com/felluminati/PhaserWorkshop/tree/starting_point). Fork this repo and then clone it locally.

![fullblast game](https://learndotresources.s3.amazonaws.com/workshop/5c05a8e36ed8580004fb944e/fullBlast.gif)

In this workshop, we will be creating a very simple 2D shooting game called Full Blast Academy. It's meant to get you up and running with Phaser quickly and introduce you to basic game developement concepts such as: moving and animating sprites, handling collisions between objects, and adding sound effects. Hopefully it'll inspire you to create your own unique game!

Take a moment to glance around the project files. They include:

- A public folder where all assets are served from, and where our bundle.js will live
- A src folder where our various script files will be housed
- A mysterious typings folder that uses black magics to use autocomplete with Phaser inside VSC (don't worry, we won't be messing with that!)
- The usual bits and bobs of webpack config and package.json

Once you have it cloned be sure to run `npm install`. Then, try running npm start (the script located in the package.json file). This script will build the webpack bundle for you and spin up a dev server to host our game. You should be able to go to `localhost:8080/public` and check out your game!

<hint title="What do you see?">
Total darkness!
Not very exciting. Yet!
Go ahead and open your dev tools and in the console you should see Phaser has started up it's client!
![phaser client](https://learndotresources.s3.amazonaws.com/workshop/5c05a8e36ed8580004fb944e/phaserConsole.png)
</hint>

<guide>
You've managed to glimpse into the void and have gotten your Phaser client to run on local host
</guide>
