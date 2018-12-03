## Background
This one's a doozy. A [cross-site request forgery (XSRF)](https://www.owasp.org/index.php/Top_10_2013-A8-Cross-Site_Request_Forgery_%28CSRF%29) exploits an existing authentication for one website to falsely make requests on behalf of that user from a *different* website. Imagine you are already logged in to Bank of America™ and then open a tab to **Bob's Totally Legit Website**. If that website can manage to issue off a valid request to Bank of America (e.g. `https://bankofamerica.com/transferMyFunds?to=Bob&amount=all-of-it`) then it's possible—based on how the web browser and Bank of America negotiate a user's persistent login—that the request would successfully go through.

## Rules of Engagement
Attackers must work from the client side only and defenders must provide them with valid login credentials. A successful attack can *only* include one or both of the following actions:

- Logging the given user into the defenders' app via the defenders' website
- Interacting with the home page of an app constructed by the attackers—this includes (but is not limited to) clicking buttons and/or links

Attackers will gain a point if they successfully trigger an action on the defenders' server that only a valid user could perform. Attackers will gain an additional point if they manage to do so by the simple act of loading the home page of their malicious app.