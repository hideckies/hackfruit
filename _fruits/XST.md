---
title: Cross-Site Tracing (XST)
desc: 
tags: [Burp Suite, Cross, Site, Web, XST]
alts: [Cookie-Hijacking]
render_with_liquid: true
---

## a. Add Cookie Header

```sh
TRACE / HTTP/1.1
...
Cookie: name=value
...
```