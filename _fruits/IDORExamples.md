---
title: IDOR Examples
desc: Examples of Insecure Direct Object References.
tags: [AccessControl, IDOR, Web]
alts: [BrokenAccessControlExamples]
website: 
render_with_liquid: false
---

```
https://vulnerable.com/user?id=1
https://vulnerable.com/user?id=2
https://vulnerable.com/static/1.txt
https://vulnerable.com/static/2.txt
```