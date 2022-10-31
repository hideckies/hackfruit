---
title: PGP Cracking
desc: Pretty Good Privacy (PGP).
tags: [Crypto, Hash, John, Password, PGP]
alts: []
render_with_liquid: false
---

## Decrypt

First off, you need to format the private key to make the John to recognize it.

```sh
gpg2john private.key > hash.txt
```

Crack the passphrase using John the Ripper.

```sh
john --wordlist=wordlist.txt hash.txt
```