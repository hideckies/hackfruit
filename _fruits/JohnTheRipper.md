---
title: John The Ripper
desc: Hash password cracker. ssh2john is also used to transform a SSH private key for cracking password.
tags: [Cryptography, Linux, Password, SSH]
alts: [Hashcat, HashesCom, Hydra, Unshadow]
website:
---

## Basic

```sh
john --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt

# MD5
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt

# SHA256
john --format=raw-sha256 --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt

# NTLM
john --format=nt --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt
```

<br />

## Formats

```sh
# List formats
john --list=formats
```

<br />

## Crack password of SSH private key using ssh2john

```sh
# Transforms private key to hash
ssh2john private_key.txt > hash.txt

# Cracking
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Crack PGP passphrase

```sh
# Transform
gpg2john sample.gpg > hash.txt

# Crack
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Salted hashes

```sh
# SHA512
PASS='39a57a8f090d4a56a238af02e47d44ee5489de34810ef6240280857ec69712a3e5e370b8a41899d0196ade16c0d54327c5654019292cbfe0b5e98ad1fec71bed'
SALT='72b5bc59adf3f9045bc2fe05f2002a05'
echo -n $PASS > hash_and_salt.txt
echo -n '$' >> hash_and_salt.txt
echo -n $SALT >> hash_and_salt.txt
john --format=dynamic='sha512($p.$s)' --wordlist=/usr/share/wordlists/rockyou.txt hash_and_salt.txt
```
