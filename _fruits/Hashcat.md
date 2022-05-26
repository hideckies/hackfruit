---
title: Hashcat
desc: Password recovery.
tags: [BruteForce, Cryptography, JWT, Linux, Password]
alts: [CrackStation, ExampleHashes, HashesCom, Hydra, JohnTheRipper, Md5sum]
website:
render_with_liquid: false
---

*Hash mode number (option: `-m`) can be referred to [Example Hashes (Hashcat Wiki)](/fruits/ExampleHashes).

## Brute force

```sh
# MD5
hashcat -m 0 -a 3 4bc9ae2b9236c2ad02d81491dcb51d5f '?a?a?a?a?a'
# or specify a file contains hash
hashcat -m 0 -a 3 hash.txt '?a?a?a?a?a'

# MD4
hashcat -m 900 -a 3 hash.txt '?a?a?a?a?a'

# SHA1
hashcat -m 100 -a 3 hash.txt '?a?a?a?a?a'

# sha512crypt
hashcat -m 1800 -a 0 hash.txt '?a?a?a?a'
```

<br />

## Wordlist

```sh
# MD5
hashcat -m 0 -a 0 hash.txt /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# MD4
hashcat -m 900 -a 0 hash.txt /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# SHA1
hashcat -m 100 -a 0 hash.txt /usr/share/seclists/Passwords/Cracked-Hashes/milw0rm-dictionary.txt

# sha512crypt
hashcat -m 1800 -a 3 hash.txt /usr/share/wordlist/rockyou.txt

# NTLM
hashcat -m 1000 -a 0 b4b9b02e6f09a9bd760f388b67351e2b /usr/share/wordlists/rockyou.txt
```

<br />

## Crack JWT Signature

```sh
echo -n '<Base64_Encoded_JWT>' > jwt.txt

hashcat -a 0 -m 16500 jwt.txt passwords.txt
hashcat -a 0 -m 16500 jwt.txt passwords.txt -r rules/best64.rule
hashcat -a 3 -m 16500 jwt.txt ?u?l?l?l?l?l?l?l -i --increment-min=6
```