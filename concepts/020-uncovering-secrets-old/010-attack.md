Using the vulnerable app (provided by your instructor):

1. Re-seed the database
2. Start the server

Here's what you-as-the-attacker can do:

- Make requests to the server as any ordinary client might. Through a browser, curl, and/or postman if you wish. You may use the provided logins for an ordinary user and/or an "admin" user.
- Look at the code for the vulnerable app **as it appears on GitHub**.

With *only* these capabilities, attempt to uncover *application*-level secrets. For this round, uncovering a user's secrets (e.g. password or any other private info) will count for nothing. For anything you uncover that you believe is an application secret, jot it down.

You will gain one point for correctly identifying an application-level secret, and you will lose a maximum of one point (total) for jotting down anything that is *not* an application secret. The score card will come on the next step, **so don't continue onwards until you are told to do so (unless you want to cheat and risk being *tsked* at)**.

You will also gain one point for discovering different *means* of carrying out a successful attack. So if you find the application secrets one way, ask yourself: "If the defender protected against *this in particular* what else could I try?"