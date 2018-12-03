Same as before setup the vulnerable app (provided by your instructor):

1. Re-seed the database
2. Start the server

Here's what you-as-the-attacker can do:

- Make requests to the server as any ordinary client might. Through a browser, curl, and/or postman if you wish. You may use the provided logins to "role play" as an ordinary user and/or an admin user.
- That's it. Just that.

What you may not do:
- Subvert access control via "identity theft". For example, let's say you are logged in as an ordinary user and manage to discover the password of an admin user. While this is absolutely a problem and in the real world (if such a place exists) would absolutely be an access control issue, that's just too bad. "Data theft" comes later in this workshop, so we're saying it doesn't count here.

One word of advice: consider all possible combinations of resources, actions, and user types...
- resources: `User` and `Story`
- actions: `GET`, `POST`, `PUT`, and `DELETE`
- user types: visitors, normal logged-in users, and admins

During this attack phase, you must work from the client side only, and will gain a point for each implied frontend access control you successfully subvert. Keep a record of what actions you are able to perform as what users. You will need this later to tally the score. The next action details the score card. **Only look at it after the attack phase has ended.**