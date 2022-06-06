---
title: GPG
desc: Manages gpg key. It also manages .pgp file.
tags: [Cryptography, Password]
alts: []
website:
render_with_liquid: false
---

## Decryption Flow

### 1. Decrypt GPG (PGP) Private Key (Get the Passphrase)

```sh
# Format
gpg2john private_key.asc > key.txt
gpg2john private_key.sig > key.txt


# Crack the passphrase
john --wordlist=/path/to/wordlist key.txt
```

### 2. Import Private Key

```sh
gpg --import private_key.asc
gpg --import private_key.sig
```

### 3. Decrypt GPG (PGP) and Enter the Passphrase

```sh
gpg -d example.gpg
gpg -d example.pgp
```

<br />

## Encrypt

```sh
gpg -e example.txt
gpg -c example.txt
```