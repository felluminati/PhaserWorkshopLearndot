## The Attack

The following terminal command will result in your server `console.log`ing `"whoops there it is"`:

```
curl 127.0.0.1:8080 --request POST --data 'console.log("whoops there it is")' --header 'Content-Type: application/json'
```

Of course, we could do much worse than `console.log`ing—we could delete files, scrape all the info from the database and send it somewhere public, really anything.

Just to be clear, an injection attack does not require any special access to the server, simply the same access any HTTP clients might have.

## Try to Defend

Gain a point if you manage to negate this attack. Or gain a point if you haven't gained any points in a while and you just would like to.

<guide>
The instructor has said it's time to go onto the next exercise
</guide>