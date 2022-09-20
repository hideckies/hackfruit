---
title: Cross-Site Tracing (XST)
desc: 
tags: [Burp, Cross, Site, TRACE, Web, XST]
alts: [Cookie-Hijacking]
render_with_liquid: false
---

## Add Cookie Header

```sh
TRACE / HTTP/1.1
...
Cookie: name=value
...
```