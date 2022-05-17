---
title: OpenSSL
desc: Wide range tool around SSL/TLS contains private key, certifications, etc. It is also used to generate the password hash for /etc/passwd in Linux.
tags: [ActiveRecon, Cryptography, FTP, Linux, Password, PrivEsc]
alts: []
website:
render_with_liquid: false
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

<br />

## Get FTP Banner

```sh
nc -vn <target-ip> 21

# ----------------------------------------------

openssl s_client -connect <target-ip>:21 -starttls ftp
```

<br />

## PFX -> PEM -> RSA

```sh
# Extract the private key (encrypted)
openssl pkcs12 -in example.pfx -nocerts -out key.pem
# Extract the private key (no encrypted)
openssl pkcs12 -in example.pfx -nocerts -out key.pem -nodes

# Extract the certificate
openssl pkcs12 -in example.pfx -nokeys -out cert.pem

# Create RSA key
openssl rsa -in key.pem -out rsa.key
```