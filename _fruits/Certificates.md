---
title: Certificates
desc: An electronic document used to prove the validity of a public key.
tags: [Cert, Key, OpenSSL, PFX, REM, RSA]
alts: []
render_with_liquid: false
---

## 1. RSA Attack

1. **Retrieve Private Key**

    - **[RsaCtfTool](https://github.com/Ganapati/RsaCtfTool){:target="_blank"}**

        RSA attack tool (mainly for ctf) - retreive private key from weak public key and/or uncipher data.

<br />

## 2. PFX -> REM -> RSA

1. **Extract a Private Key**

    - **For Encrypted Key**

        ```sh
        openssl pkcs12 -in example.pfx -nocerts -out key.pem
        ```

    - **For No Encrypted Key**

        ```sh
        openssl pkcs12 -in example.pfx -nocerts -out key.pem -nodes
        ```

2. **Extract the Certificate**

    ```sh
    openssl pkcs12 -in example.pfx -nokeys -out cert.pem
    ```

3. **Create RSA Key**

    ```sh
    openssl rsa -in key.pem -out rsa.key
    ```

<br />

## 3. RSA Asymmetrick Encrypt/Decrypt

- **Encryption**

    1. **Generate a Private Key**

        ```sh
        openssl genrsa -aes256 -out private.key 8912
        ```

    2. **Generate a Public Key using the Private Key**

        ```sh
        openssl rsa -in private.key -pubout public.key
        ```

    3. **Encrypt using the Public Key**

        ```sh
        openssl rsautl -encrypt -pubin -inkey public.key -in plain.txt -out encrypted.txt
        ```

- **Decryption**

    1. **Decrypt a Private Key**

        ```sh
        openssl rsautl -decrypt -inkey private.key -in encrypted.txt -out plain.txt
        ```
