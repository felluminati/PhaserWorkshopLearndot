## The Attack

We should assume that an attacker has received direct access to our database and read access to our source code (in GitHub).

If so, they could carry out an "attack" by simply manually inspecting rows in the user table. If passwords are stored as plaintext, well, oops.

If passwords are not stored as plaintext, they may also check whether we're using encryption to store passwords (by looking at the source code), and if so, they can attempt to uncover the decryption key.

If passwords are neither plaintext, nor encrypted, then that leaves hash digests. The easiest possible way forward is to download an existing "rainbow table" of common passwords and common hashing algorithms. If any digests from our database match any entries in the rainbow table...game over. This should work as long as the hashed password digests are unsalted.

If the digests are salted, that leaves really just one avenue for attack: loop through all salted digests, for each loop through all common passwords, then hash and salt the common password to see if it matches the given digest.

## Try to Defend

Incorporate hashing and salting into your password storage (and verification!). Check out node's built-in [crypto](https://nodejs.org/api/crypto.html) library—in particular `.pbkdf2Sync` for hashing and `.randomBytes` for generating a random salt. Don't forget to re-seed!

Gain one point for each of the following:

- Given direct access to the database, it is not possible to deduce any user's password by inspecting or analyzing it.
- Given direct access to the database, it is not possible to deduce whether two users have the same password by simple inspection.
- Given direct access to the database, without pre-computing anything, it is not possible to confirm that Zeke's password is `'123'` using code that clocks less than 3 milliseconds.

Lose one point each if ordinary signup and/or login are no longer possible.

<guide>
The instructor has said it's time to go onto the next exercise
</guide>