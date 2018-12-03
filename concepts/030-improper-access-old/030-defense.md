Here's the same table from the scorecard just before:

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

As defender, your job is to make the above table as true as possible for your application.

When the defense phase comes to an end, gain one point for any `x` that is now truly impossible (as it should be). Lose one point for any `o` that is somehow no longer possible (even though it should be possible).