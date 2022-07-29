---
title: OpenSSL
desc: Wide range tool around SSL/TLS contains private key, certifications, etc. It is also used to generate the password hash for /etc/passwd in Linux.
tags: [ActiveRecon, Cryptography, FTP, Linux, Password, PrivEsc, SMTP, SSH]
alts: []
website:
render_with_liquid: false
---

## Check if SSL/TLS Connection

```sh
openssl s_client --connect example.com:443
```

<br />

## Generate Random Strings

```sh
# Base64 encode output
openssl rand -base64 3

# Hex encode output
openssl rand -hex 4
```

<br />

## Encrypt Files

```sh
openssl enc -in /etc/passwd -out /tmp/passwd
openssl enc -in /tmp/passwd -out /etc/passwd
```

<br />

## Generate Password Hash for /etc/shadow

```sh
# -6: SHA512
# --salt: 'salt'
# password: 'password'
openssl passwd -6 -salt salt password
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

<br />

## RSA Asymmetric Encrypt/Decrypt

```sh
# Generate private key
openssl genrsa -aes256 -out private.key 8912
# Generate publick key using private key
openssl rsa -in private.key -pubout public.key

# Encrypt using public key
openssl rsautl -encrypt -pubin -inkey public.key -in plain.txt -out encrypted.txt

# -------------------------------------------------------------

# Decrypt using private key
openssl rsautl -decrypt -inkey private.key -in encrypted.txt -out plain.txt
```

<br />

## SMTPS Connection

```sh
# Port 465
openssl s_client -crlf -connect vulnerable.com:465
# Port 587
openssl s_client -starttls smtp -crlf -connect vulnerable.com:587
```