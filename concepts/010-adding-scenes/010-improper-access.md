## Background
When your site [lacks access control](https://www.owasp.org/index.php/Top_10_2013-A7-Missing_Function_Level_Access_Control), it means that users can take actions that they should not be allowed to take. For example, if on Facebook it were possible for any user to update my status, this would be an example of a missing access control.

## Rules of Engagement
Consider all possible combinations of resources, actions, and user types...
- resources: `User` and `Story`
- actions: `GET`, `POST`, `PUT`, and `DELETE`
- user types: visitors, normal logged-in users, and admins

The frontend of *Auther* currently implies that certain users are able to take certain actions and others are not. Through its UI it further implies what actions *no user may take*. Attackers must work from the client side only, and will gain a point for each implied frontend access control they successfully subvert. Similarly, defenders will gain a point for each successful access control.

Furthermore, the application must remain otherwise operational. Defenders will lose a point for each implied *capability* that attackers are unable to perform. For example, if visitors are unable to view a given story, this would be a point against the defenders.

During the attack phase, keep a record of what actions you are able to peform as what users. You will need this later to tally the score. The hint below contains the scoresheet. **Only look at it after the attack phase has ended.**

<hint title="Scoresheet, read above carefully before opening me...">
The table below details all relevant API actions, and also outlines which types of agents (guest, user, or admin) should be able to perform those actions.

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

The defense gains one point for each `x` that behaves likewise for their app, and loses one point for each `o` that they do not permit—i.e. an action that *should be allowed* for that type of user, but is not.

Attackers gain one point for each `x` they successfully subvert—i.e. an action that *should not be allowed* for that type of user, but is.

Do not count any entry that was not attempted by the attackers.
</hint>