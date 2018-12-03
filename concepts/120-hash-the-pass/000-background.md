If we're going to be storing passwords in our database, we should do it right. After all, if our database itself gets directly exposed, we still want to maintain password security. As a case study, consider that in 2012 LinkedIn was facing a [$5 million lawsuit](http://www.eweek.com/security/linkedin-faces-5-million-lawsuit-after-password-breach) (that eventually seems to have [settled to ~$1 million](https://nakedsecurity.sophos.com/2015/02/25/linkedin-settles-class-action-suit-over-2012-unsalted-password-leak/)) ultimately because they were storing unsalted password hash digests in their database.

Instead of storing plaintext passwords in our database, we'll want to store hashed and salted password digests (digest just means hashing algorithm output). This will mean that even if anybody gets access to our database, they will still have to resort to guessing passwords in order to figure them out. We can make this guessing process maximally slow for such attackers, too.

<guide>
You have read the above
</guide>