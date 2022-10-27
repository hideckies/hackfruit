---
title: RAR Cracking
desc: Roshal Archive (RAR).
tags: [Crypto, Hash, John, Password, RAR]
alts: []
render_with_liquid: false
---

## Decrypt

First of all, you need to format the RAR file to make the John to recognize it.

```sh
rar2john example.rar > hash.txt
```

Crack the password using the formatted text.

```sh
john --wordlist=wordlist.txt hash.txt
```