Broadly speaking, an [injection attack](https://www.owasp.org/index.php/Top_10_2013-A1-Injection) involves inadvertent execution of malicious code on the server. Imagine if you will an extreme scenario in which users are allowed to send arbitrary strings of Bash code to the server. In turn, the server evaluates this code without question, running it just like it would any other bash script. It is easy to see how a client could then read, write, or even delete files on the server.

<guide>
You have read the above
</guide>