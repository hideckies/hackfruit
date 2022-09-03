---
title: Cross-Site Tracing (XST)
desc: 
tags: [Burp, Cross, Site, Web, XST]
alts: [Cookie-Hijacking]
render_with_liquid: false
---

## a. Add Cookie Header

```sh
TRACE / HTTP/1.1
...
Cookie: name=value
...
```