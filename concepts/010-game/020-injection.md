## Background
Broadly speaking, an [injection attack](https://www.owasp.org/index.php/Top_10_2013-A1-Injection) involves inadvertant execution of malicious code on the server. Imagine if you will an extreme scenario in which users are allowed to send arbitrary strings of Bash code to the server. In turn, the server evaluates this code without question, running it just like it would any other bash script. It is easy to see how a client could then read, write, or even delete files on the server.

## Rules of Engagement
Before the attack phase, the defender must push their current code to GitHub, re-seed their database, and serve up their app. It must be fully operational.

You must also share two things with the opposing team: a link to your GitHub repo, and your internal IP (if you are using a mac you should be able to find your IP by using option-click on the network icon in your menu bar). Neither team may start attacking until both teams have received these.

Attackers must work from the client side only (though what *type* of client is up to you). With only this capability, attackers will gain a point for executing arbitrary JavaScript on the defenders' server, e.g. `console.log('gotcha')`.

Teams may want to switch computers for this round, so that when attempting an attack you can easily see if the defending app's server logs something or not.