---
title: John The Ripper
desc: Hash password cracker. ssh2john is also used to transform a SSH private key for cracking password.
tags: [Cryptography, Linux, Password]
alts: [Hashcat, Hydra, Unshadow]
website:
---

## Basic

```sh
john --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt

# MD5
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt

# NTLM
john --format=nt --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt
```

<br />

## Crack password of SSH private key using ssh2john

```sh
# Transforms private key to hash
ssh2john private_key.txt > hash.txt

# Cracking
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```