There are a number of ways to have basic [security misconfiguration](https://www.owasp.org/index.php/Top_10_2013-A5-Security_Misconfiguration). In general, these involve accidentally sticking with the defaults of your system, or overlooking some interaction between the various technologies and environments involved in making your app do what it does.

Which is pretty vague. For this particular exercise, we will be focusing on one such misconfiguration: accidental exposure of *application secrets*.

Application secrets are generally global to our app, and can include OAuth client secrets or encryption keys. Application secrets are *not* the same as user secrets. An example of an application secret could be an Amazon S3 secret key used to store files on Amazon's servers. An example of a user secret could be their login password.

While user secrets are of course important, we will be focusing on those in an later exercise, so **don't worry about it yet**.

You might be wondering what the value of an application-level secret would be. Well let's use that example from before—if your app's Amazon S3 secret key was exposed, others could use it to store files on Amazon's servers, essentially *impersonating your application*, which could cost you $$$$.

<guide>
You have read the above
</guide>