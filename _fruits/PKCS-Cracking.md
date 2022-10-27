---
title: PKCS, PKCS#12 Cracking
desc: Public-Key Cryptography Standards (PKCS).
tags: [Crypto, Hash, John, Password, PKCS]
alts: []
render_with_liquid: false
---

## Decrypt

- **PKCS#12 (.pfx, .p12)**

    First of all, you need to format the PKCS file to make the John to recognize it.

    ```sh
    pfx2john example.pfx > hash.txt
    ```

    Crack the password using the formatted text.

    ```sh
    john --wordlist=wordlist.txt hash.txt
    ```