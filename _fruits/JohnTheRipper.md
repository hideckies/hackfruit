---
title: John The Ripper
desc: Hash password cracker.
tags: [Cryptography, Linux, Password]
alts: [Hashcat, Hydra, Unshadow]
website:
---

## Using Rockyou

```sh
john --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt
```

## Using Seclists

```sh
john --wordlist=/usr/share/seclists/Password/Cracekd-Hashes/milw0rm-dictionary.txt ./hash.txt
```


## Hash formats

```sh
# MD5
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt ./hash.txt
```