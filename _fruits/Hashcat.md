---
title: Hashcat
desc: Password recovery.
tags: [Cryptography, Linux, Password]
alts: [CrackStation, ExampleHashes, HashesCom, Hydra, JohnTheRipper, Md5sum]
website:
---

*Hash mode number (option: `-m`) can be referred to [Example Hashes (Hashcat Wiki)](/fruits/ExampleHashes).

## Bruteforce

```sh
# MD5
hashcat -m 0 -a 3 4bc9ae2b9236c2ad02d81491dcb51d5f '?a?a?a?a?a'
# or specify a file contains hash
hashcat -m 0 -a 3 ./hash.txt '?a?a?a?a?a'

# MD4
hashcat -m 900 -a 3 ./hash.txt '?a?a?a?a?a'

# SHA1
hashcat -m 100 -a 3 ./hash.txt '?a?a?a?a?a'
```

<br />

## Wordlist

```sh
# MD5
hashcat -m 0 -a 0 ./hash.txt /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# MD4
hashcat -m 900 -a 0 ./hash.txt /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# SHA1
hashcat -m 100 -a 0 ./hash.txt /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# NTLM
hashcat -m 1000 -a 0 b4b9b02e6f09a9bd760f388b67351e2b /usr/share/wordlists/rockyou.txt
```
