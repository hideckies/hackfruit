---
title: XST Attacks
desc: Attack examples of Cross Site Tracing (XST).
tags: [Web, XST]
alts: []
website:
render_with_liquid: false
---

## Add Cookie Header

```sh
TRACE / HTTP/1.1
...
Cookie: name=value
...
```