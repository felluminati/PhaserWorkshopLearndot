## The Attack

The following are sensitive application secrets in Auther:

- session secret
- Google client secret
- GitHub client secret
- Twitter consumer secret
- postgres database URI

To discover any of these, an attacker could attempt to:

- Look through the current state of your codebase on GitHub for secrets.
- Look through your GitHub repo *history* for secrets.
- As an HTTP client, make raw `GET` requests for static files. For example, upon a `GET` request for `/server/api/auth/google.js` the server will attempt to send a file called `server/api/auth/google.js` that could exist in the project's root folder. If that file exists and indeed contains secrets, well, that's not ideal. Or it is ideal for the attacker I suppose.

Notice that the various attack means above only require: 1) ordinary HTTP access to your webapp and/or 2) read access to your GitHub repo. So when attempting to cover your application secrets, you should assume a would-be attacker has such access.

## Try to Defend

During this phase, defend your own application. Your goal is to make sure that the application secrets described above cannot be accessed by an attacker via the means described above.

At the end, gain a point for every secret you are sure could not be accessed by a would-be attacker.

Of course, your application must also still function. Gain no points if your app has lost any features or capabilities (e.g. if users are no longer able to sign in via google). Or if you simply failed to make any changes whatsoever to your codebase, lose one point (unless you're feeling really bummed about losing a point, in which case *go talk to an instructor or fellow—why are you bothering with this meaningless point system anyways*).

<guide>
The instructor has said it's time to go onto the next exercise
</guide>