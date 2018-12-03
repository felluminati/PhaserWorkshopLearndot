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

Gain one point for each `x` above that you successfully executed as the attacker.