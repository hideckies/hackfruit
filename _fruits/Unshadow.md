---
title: Unshadow
desc: Combines passwd and shadow in linux. It is used when cracking user's password in Linux with John The Ripper.
tags: [Cryptography, Linux, PrivEsc]
alts: [JohnTheRipper]
website:
render_with_liquid: false
---

## Crack user passwords

```sh
cp /etc/passwd passwd.txt
cp /etc/shadow shadow.txt

unshadow passwd.txt shadow.txt > passwords.txt

john --wordlist=/usr/share/wordlists/rockyou.txt passwords.txt
```