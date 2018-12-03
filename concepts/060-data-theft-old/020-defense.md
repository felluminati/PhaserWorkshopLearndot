It is possible to login with just an email. For example, you could run this in the browser console to log in as Zeke (after submitting, refresh the page):

```js
fetch('/api/auth/me', {
  method: 'PUT',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({
    email: 'zeke@zeke.zeke'
  }),
  credentials: 'same-origin'
});
```

Similarly you can set your privilege level as "admin" when signup up by doing something like:

```js
fetch('/api/auth/me', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({
    email: 'voldemort@hogwarts.edu',
    isAdmin: true
  }),
  credentials: 'same-origin'
});
```

But the hypothetical attacks-to-defend-against are actually expanded from the previous phase. Gain one point for each of the following:

- Your client <=> server communication is encrypted.
- It is not possible to log in as any user simply by knowing their email.
- It is not possible create a new admin user whose email and password are now known to whomever just created them.
- It is not possible to discover the password of a user when logged in as a different (non-admin) user.
- It is not possible to discover any user's OAuth token when logged in as a different (non-admin) user.
- It is not possible to discover even an obfuscated password of a user when logged in as a different (non-admin) user.
- Given direct access to the database, it is not possible to deduce any user's password by inspecting or analyzing it.
- Given direct access to the database, it is not possible to deduce whether two users have the same password by simple inspection.
- Given direct access to the database, without pre-computing anything, it is not possible to confirm that Zeke's password is `'123'` using code that clocks less than 3 milliseconds.

### Some advice

You might find node's built-in [https](https://nodejs.org/api/https.html) and/or [crypto](https://nodejs.org/api/crypto.html) libraries helpful here. For https, you'll need a private key and certificate. You can use openssl to generate both like so:

<terminal>
$ openssl genrsa -out key.pem 2048
$ openssl req -x509 -new -nodes -key key.pem -days 1024 -out cert.pem
</terminal>

*Note: we are self-signing this SSL certificate, which is only OK because we are in development!*

For crypto, make sure to check out the `.randomBytes` and `.pbkdf2Sync` methods.