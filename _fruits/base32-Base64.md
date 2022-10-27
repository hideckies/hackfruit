---
title: Base32, Base64
desc: 
tags: [32, 64, Base, Cipher, Crypto, Hash, Password]
alts: []
render_with_liquid: false
---

## Decode

- **Base16**

    ```sh
    base16 -d encoded.txt
    echo -n '68656c6c6f0a' | base16 -d
    ```

- **Base32**

    ```sh
    base32 -d encoded.txt
    echo -n 'NBSWY3DP' | base32 -d
    ```

- **Base64**

    ```sh
    base64 -d encoded.txt
    echo -n 'aGVsbG8=' | base64 -d
    ```

<br />

## Encode

- **Base16**

    ```sh
    base16 example.txt
    echo -n 'hello' | base16
    ```

- **Base32**

    ```sh
    base32 example.txt
    echo -n 'hello' | base32
    ```

- **Base64**

    ```sh
    base64 example.txt
    echo -n 'hello' | base64
    ```

<br />

## Generate Random Passwords

- **Base64**

    ```sh
    openssl rand -base64 3
    ```