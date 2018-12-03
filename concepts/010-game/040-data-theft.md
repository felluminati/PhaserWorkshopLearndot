## Background
It is easy to [mismanage authentication and/or credential storage](https://www.owasp.org/index.php/Top_10_2013-A2-Broken_Authentication_and_Session_Management). Properly verifying a user, as well as securely transmitting and storing their credentials, is no easy task.

## Defense
You might find node's built-in [https](https://nodejs.org/api/https.html) and/or [crypto](https://nodejs.org/api/crypto.html) libraries helpful here. For https, you'll need a private key and certificate. You can use openssl to generate both like so:

<terminal>
$ openssl genrsa -out key.pem 2048
$ openssl req -x509 -new -nodes -key key.pem -days 1024 -out cert.pem
</terminal>

*Note: we are self-signing this SSL certificate, which is only OK because we are in development!*

For crypto, make sure to check out the `.randomBytes` and `.pbkdf2Sync` methods.

## Rules of Engagement
During the attack phase, teams should swap computers. Attackers may view any server files, logs, or database documents but may not edit any of them. Attackers may freely run the seed file, though "discovering" passwords by looking in the seed file does not count for squat. Each of the following is worth one point to attackers (or conversely, one point to defenders if the attackers are unsuccessful):

- The defenders' client and server communications are unencrypted, or you claim some other vulnerability in their communications (confirm with a fellow or instructor).
- From the client side, log in as any user simply by knowing their email.
- From the client side, create a new admin user whose email and password are known to you.
- From the client side only, discover the password of a user when logged in as a different (non-admin) user.
- From the client side only, discover any user's OAuth token when logged in as a different (non-admin) user.
- From the client side only, discover even an obfuscated password of a user when logged in as a different (non-admin) user.
- Deduce any user's password by inspecting or analyzing the database.
- Deduce which two users have the same password by inspecting the database.
- Without pre-computing anything, confirm that Zeke's password is `'123'`. The code you run must take less than 3 milliseconds.