---
title: OpenSSL
desc: Wide range tool around SSL/TLS contains private key, certifications, etc. It is also used to generate the password hash for /etc/passwd in Linux.
tags: [ActiveRecon, Cryptography, Linux, Password, PrivEsc]
alts: []
website:
---

## Check if SSL/TLS connection

```sh
openssl s_client --connect example.com:443
```

<br />

## Generate password hash for passwd

```sh
# -6: SHA512
# --salt: 'salt'
# password: 'password'
openssl passwd -6 --salt salt password
```