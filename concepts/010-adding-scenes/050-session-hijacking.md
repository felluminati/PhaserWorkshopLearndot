## Background
A [session hijacker](https://www.owasp.org/index.php/Session_hijacking_attack) has obtained some other client's valid session ID. This allows the attacker to impersonate a user, gaining access to any resources or actions entitled to that user.

## Rules of Engagement
Using *Charles Proxy* ([download free trial here](http://www.charlesproxy.com/download/)), an attacker must sniff out a session ID and must demonstrate its validity by using it to make a successful request only that user could make.