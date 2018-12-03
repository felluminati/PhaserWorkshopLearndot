## Background
There are a number of ways to have basic [security misconfiguration](https://www.owasp.org/index.php/Top_10_2013-A5-Security_Misconfiguration). In general, these involve accidentally sticking with the defaults of your system, or ignoring the need to treat secrets with the proper secrecy.

## Rules of Engagement
Before the attack phase, the defender must push their current code to GitHub, re-seed their database, and serve up their app. It must be fully operational.

You must also share two things with the opposing team: a link to your GitHub repo, and your internal IP address. Neither team may start attacking until both teams have received these.

With *only* this information, the attacker will attempt to uncover *application*-level secrets. For this round, uncovering a user's secrets (e.g. password or any other private info) will count for nothing. For each application secret uncovered, the attacker will gain 1 point. For each application secret hidden, the defender will gain 1 point.

<hint title="Scorecard: only open after defense AND attack phase (unless you're really lost and need to)">
The following are app secrets that *should* be inaccessible to attackers:
- database URI
- session secret
- Google client secret
- Github client secret
- Twitter consumer secret
</hint>