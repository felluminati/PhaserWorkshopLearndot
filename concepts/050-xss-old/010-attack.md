Using the vulnerable app (provided by your instructor):

1. Re-seed the database
2. Start the server

Here's what you-as-the-attacker can do:

- Make requests to the server as any ordinary client might. Through a browser, curl, and/or postman if you wish. You may use the provided logins for an ordinary user and an admin user.

Attackers must work from the client side only. Gain a point for each route (e.g. `'/stories'` is one route, `'/stories/:id'` is another) that successfully runs code defined by *another* client.

There is an additional point to be gained for generating a clickable link that, upon clicking, will result in an XSS on the defenders' application. Word of advice: use Firefox to open the link. That is important only because Firefox does not protect against a certain kind of XSS, whereas Chrome does.

**Do not continue onto the next step until an instructor, fireman, or celebrity tells you to do so.**