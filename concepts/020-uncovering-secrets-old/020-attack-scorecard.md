The following are sensitive application secrets:

- session secret
- Google client secret
- GitHub client secret
- Twitter consumer secret
- postgres database URI

Gain one point for each of these that you successfully discovered and jotted down. If you jotted anything down that's not on the list above, lose one point. Even if you jotted down ten extraneous things, still just lose one point. If you are convinced one of these things *is* an application level secret, feel free to argue your point ferociously with an instructor or fellow. If they concede, undo the minus one, and instead gain five points. If you concede, and by the end understand why what you jotted down is *not* an application secret, undo that minus one.

To discover an app secret, an attacker could attempt to:

- Look through the current state of your codebase on GitHub for secrets.
- Look through your GitHub repo *history* for secrets.
- As an HTTP client, make raw `GET` requests for static files. For example, upon a `GET` request for `/server/api/auth/google.js` the server will attempt to send a file called `server/api/auth/google.js` that could exist in the project's root folder. If that file exists and indeed contains secrets, well, that's not ideal. Or it is ideal for the attacker I suppose.

Gain one point for each of these means of attack you discovered. And if you came up with a different means of uncovering an application level secret (and an instructor or fellow confirms this is within the rules outlined by the game), flip a coin. If it comes up heads, lose one point for being so darn smart. If it comes up tails, gain five points for being so darn smart.