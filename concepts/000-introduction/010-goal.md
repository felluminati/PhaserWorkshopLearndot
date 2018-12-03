The starting point for this workshop can be found [here](https://github.com/FullstackAcademy/auther-dada). Fork this repo and then clone it locally.

Take as much time as you need to review the codebase to make sure you understand it well enough to work with it.

Make sure to configure your own [Google](https://console.developers.google.com/) (don't forget to enable the google plus API), [Twitter](https://apps.twitter.com/), and [GitHub](https://developer.github.com/guides/basics-of-authentication/#registering-your-app) OAuth applications. In each case, the callback URL should be `http://127.0.0.1:8080/api/auth/:providerName/verify`, replacing `:providerName` with the actual name. If you had already done this for the previous **Auther** workshop, you can use the same client keys/ids/secrets if you wish.

Don't forget to update your code! Replace all ids/secrets in the various OAuth configuration files (e.g. in `/server/auth/google.js`).