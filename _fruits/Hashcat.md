---
title: Hashcat
desc: Password recovery.
tags: [Cryptography, Linux, Password]
alts: [CrackStation, Hydra, JohnTheRipper, Md5sum]
website:
---

## Bruteforce

```sh
# MD4
hashcat -m 0 -a 3 4bc9ae2b9236c2ad02d81491dcb51d5f '?a?a?a?a?a'

# MD5
hashcat -m 900 -a 3 4bc9ae2b9236c2ad02d81491dcb51d5f '?a?a?a?a?a'

# SHA1
hashcat -m 100 -a 3 4bc9ae2b9236c2ad02d81491dcb51d5f '?a?a?a?a?a'
```

## Wordlist

```sh
# MD4
hashcat -m 0 -a 0 4bc9ae2b9236c2ad02d81491dcb51d5f /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# MD5
hashcat -m 900 -a 0 4bc9ae2b9236c2ad02d81491dcb51d5f /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# SHA1
hashcat -m 100 -a 0 4bc9ae2b9236c2ad02d81491dcb51d5f /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt
```
