---
title: Burp Suite
desc: Security testing tool for web applications.
tags: [ActiveRecon, BrokenAccessControl, BruteForce, OAuth, Password, SQLi, SSRF, XSS]
alts: [OwaspZap]
website: https://portswigger.net/burp
---

## Json injection (HTTP POST request)

```json
{ "username": "\"; pwd \"" }
```
