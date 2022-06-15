---
title: IDOR Examples
desc: Examples of Insecure Direct Object References.
tags: [AccessControl, IDOR, Web]
alts: [BrokenAccessControlExamples]
website: 
render_with_liquid: false
---

## Examples

```
https://vulnerable.com/user?id=1
https://vulnerable.com/user?id=2
https://vulnerable.com/static/1.txt
https://vulnerable.com/static/2.txt
```

## Find IDOR Vulnerabilities

```html
<!-- Check input name -->
<input name="user_id" value="8" >

<!-- Check cookie values -->
Cookie: user_id=12
```