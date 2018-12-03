We should assume the attacker has access to some internet node that is involved in passing HTTP messages between our client and server.

The only proper defense is to encrypt all HTTP messages by using HTTPS instead of plain old HTTP.

In development, our client and server are hosted on the same machine, and although they communicate via HTTP, there are no middlemen that even *could* intercept traffic.

That means we only have reason to be concerned when our app is deployed—i.e. online and being used. So to implement a "proper defense" here, we need only make sure our deployed environment uses HTTPS. It turns out there's a web server hosting service called [Heroku](https://www.heroku.com/) that will enable our server with HTTPS by default.

Separately, you may want people to have access to your local environment server. For example, if you're working live and remote with a designer. They may want to look at the current "in-development" to suggest changes and see your attempts *right now*. If so, needing to re-deploy to Heroku would be a pain. Instead, you could use something like [ngrok](https://ngrok.com/) to open a web-accessible "tunnel" (i.e. a url) that points to your local machine. Happily, ngrok also has an option for HTTPS by default.

Just for the sake of completeness, we can also setup HTTPS for local development more manually. We would first generate an SSL key and self-signed certificate, like so:

<terminal>
$ openssl genrsa -out key.pem 2048
$ openssl req -x509 -new -nodes -key key.pem -days 1024 -out cert.pem
</terminal>

...and then we would use node's [https](https://nodejs.org/api/https.html) library to create an HTTPS server and start it listening (instead of just doing `app.listen(...)`), like so:

```js
https.createServer({
  key: fs.readFileSync('/path/to/key.pem'),
  cert: fs.readFileSync('/path/to/cert.pem')
}, app).listen(...);
```

<guide>
The instructor has said it's time to go onto the next exercise
</guide>