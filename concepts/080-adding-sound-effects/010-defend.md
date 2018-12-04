## The Attack

Here's what a would-be attacker can do:

- Make requests to the server as any ordinary client might. Through a browser, curl, and/or postman if you wish.
- Use the provided logins to "role play" as an ordinary user and/or an admin user.
- That's it. Just that.

For example, to delete a user you could visit Auther in your web browser, open up dev tools, and then make an AJAX request using, say, [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):

```js
fetch('/api/users/1', {
  method: 'DELETE',
  credentials: 'same-origin' // this will send our session cookie with this AJAX request, thus allowing our server to establish the session and current user
});
```

Notice we didn't have to login! And here's another example for good measure, one that involves a request body—here we're updating a story not authored by us (we're not even logged in, we're just some random visitor):

```js
fetch('/api/stories/1', {
  method: 'PUT',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({
    title: 'Uh-oh!'
  }),
  credentials: 'same-origin'
});
```

...so that's not good! But even if we were logged in, it should probably not be possible (for non-admins) to delete any user except for themself. In order to have proper access control, we have to enumerate the possible actions that "guests" (non-logged in users), "users" (ordinary logged-in users), and "admins" (logged-in users who have admin privileges) can take.

<hint title="how to make a request with a logged-in user">
```js
fetch('/api/stories/1', {
  method: 'PUT',
  credentials: 'same-origin', // <- this keeps our cookies (i.e. maintains our client server relationship)
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({
    title: 'Uh-oh!'
  })
});
```
</hint>

The table below details all relevant API actions, and also outlines which types of agents (guest, user, or admin) *should* be able to perform those actions.

|ACTION                 |guest |user |admin |
|-----------------------|------|-----|------|
|get one story          |o     |o    |o     |
|get all stories        |o     |o    |o     |
|get one user           |o     |o    |o     |
|get all users          |x     |o    |o     |
|create own story       |x     |o    |o     |
|update own story       |x     |o    |o     |
|delete own story       |x     |o    |o     |
|change story's author  |x     |x    |o     |
|create other's story   |x     |x    |o     |
|update other's story   |x     |x    |o     |
|delete other's story   |x     |x    |o     |
|create a user          |x     |x    |o     |
|update self            |x     |o    |o     |
|update other           |x     |x    |o     |
|delete self            |x     |o    |o     |
|delete other           |x     |x    |o     |
|set other's privileges |x     |x    |o     |
|set own privileges     |x     |x    |x     |

(Note that currently, an attacker could execute *any* of the above actions. Yikes.)

But—and this is important—for this round, it would **not** be a valid attack to subvert access control via "identity theft". For example, let's say you are logged in as an ordinary user and manage to discover the password of an admin user. While this is absolutely a problem and in the real world (if such a place exists) would absolutely be an access control issue, that's just not what we're concerned with right now. "Data theft" comes later in this workshop, so we're saying it doesn't count here.

## Try to Defend

As defender, your job is to make the above table as true as possible for your application.

When the defense phase comes to an end, gain one point for any `x` that is now truly impossible (as it should be). Lose one point for any `o` that is somehow no longer possible (even though it should be possible).

<guide>
The instructor has said it's time to go onto the next exercise
</guide>