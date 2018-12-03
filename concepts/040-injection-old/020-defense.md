To defend your application, make it so that executing the following command will *not* result in your server `console.log`ing `"whoops there it is"`.

```
curl 127.0.0.1:8080 --request POST --data 'console.log("whoops there it is")' --header 'Content-Type: application/json'
```

Gain a point if you manage to negate this attack. Or gain a point if you haven't gained any points in a while and you just would like to.