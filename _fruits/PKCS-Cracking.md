---
title: PKCS Cracking
desc: Public-Key Cryptography Standards (PKCS).
tags: [Crypto, Hash, HMAC, John, Password, PBKDF, PKCS]
alts: []
render_with_liquid: false
---

## Decrypt

- **PKCS#12**

    First of all, you need to format the PKCS file to make the John to recognize it.

    ```sh
    pfx2john example.pfx > hash.txt
    ```

    Crack the password using the formatted text.

    ```sh
    john --wordlist=wordlist.txt hash.txt
    ```

- **PBKDF2-HMAC-SHA256**

    PBKDF2 is part of PKCS#5 v2.0. The format is as follows:

    ```
    sha256:<iteration>:<base64-salt>:<base64-password-hash>

    # ex.
    sha256:10000:ayZoqdmIewDpUB:Ud6aAhvpw9RqZPt/0Rd0U9uPDKLOWKnYHAS+Lm07oqDWwDLw/U74P0jXQ0nsGW9O/jc=
    ```

    To create the hash based on this, run the following commands.

    ```sh
    echo 'sha256:10000:'$(echo '<salt-string>' | base64 | cut -c 1-14)':'$(echo 'password-string' | base64) > hash.txt
    ```

    Now crack the hash using Hashcat.

    ```sh
    hashcat -m 10900 wordlist.txt hash.txt
    ```