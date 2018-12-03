Perhaps the most important aspect for keeping data and authentication secure is transport security. Any traffic passing between the client and server will pass through any number of (potentially malicious) internet nodes.

That means everything we've done so far to protect the integrity of our authentication flow and the security of any sensitive data might as well be pointless. Any malicious "middlemen" could simply intercept our traffic and not have to worry about anything else!

We need encryption. If we encrypt all communication between client and server, then any messages sent between them can remain secret. SSL provides such encryption and if we use SSL for HTTP, then our protocol becomes HTTPS.

<guide>
You have read the above
</guide>