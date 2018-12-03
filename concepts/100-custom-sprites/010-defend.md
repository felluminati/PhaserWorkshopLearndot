As with previous vulnerabilities, a would-be attacker doesn't need any special privileges—just ordinary access as an HTTP client. Here's one possible stored XSS attack:

1. Open the web browser and login as any user really.
2. Open dev tools and submit an AJAX request that might look like the code below (after this list).
3. Logout as that user and then go visit that new story's detail page as a guest (or as a different logged in user).

```js
fetch('/api/stories', {
  method: 'POST',
  headers: new window.Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({
    title: 'Frobaz',
    paragraphs: [`<style onload="alert('oh no')"></style>`],
    author_id: 'FILL_ME_IN_WITH_THE_CURRENT_USERS_ID'
  }),
  credentials: 'same-origin'
});
```

Gain one point if you can keep this attack from working. Gain another point if your first name ends in a vowel (half a point for "y").

For a reflected XSS attack, here's one possible URL:

```
http://127.0.0.1:8080/notavliadroute?x=%3Cscript%3Ealert%28%27dang,%20this%20is%20not%20good%27%29;%3C/script%3E
```

Gain one point if you stop that URL from producing an XSS attack (when opening the link in Firefox).

<guide>
The instructor has said it's time to go onto the next exercise
</guide>