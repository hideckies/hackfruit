---
title: Cryptography
desc: 
tags: [Cipher, Crack, Crypto, CyberChef, Hash, John, OpenSSL, Password, Python, XOR]
alts: []
render_with_liquid: false
---

## Magic in CyberChef

**[CyberChef](https://gchq.github.io/CyberChef/){:target="_blank"}{:rel="noopener"}** is a swiss army knife for cryptography.  
Especially, **"Magic"** tool can process the given hashes automatically.  
So it's recommended to use the "Magic" at first.

<br />

## Identify the Type of Cipher

- **Manual Identification**

    The following cryptos mean "hello".

    ```sh
    # Base32
    NBSWY3DPEB3W64TMMQ======
    # Base58
    StV1DL6CwTryKyV
    # Base64
    aGVsbG8gd29ybGQ=

    # Binary
    01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100

    # Decimal
    104 101 108 108 111 32 119 111 114 108 100

    # Hex
    68 65 6c 6c 6f 20 77 6f 72 6c 64
    68656c6c6f20776f726c64

    # Morse Code
    .... . .-.. .-.. ---
    .-- --- .-. .-.. -..

    # MD4
    aa010fbc1d14c795d86ef98c95479d17
    # MD5
    5eb63bbbe01eeed093cb22bb8f5acdc3

    # ROT13
    uryyb jbeyq
    # ROT47
    96==@ H@C=5

    # SHA1
    2aae6c35c94fcfb415dbe95f408b9ce91ee846ed
    # SHA256
    2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
    # SHA512
    9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043
    ```

- **Online Tools**

    - **[Cipher Identifier](https://www.boxentriq.com/code-breaking/cipher-identifier){:target="_blank"}{:rel="noopener"}**

    - **[Example Hashes](https://hashcat.net/wiki/doku.php?id=example_hashes){:target="_blank"}{:rel="noopener"}**

    - **[Hash Analyzer](https://www.tunnelsup.com/hash-analyzer/){:target="_blank"}{:rel="noopener"}**

<br />

## Binary Data Manual Operations

Using **Python**.

1. **Change Hex to Base**

    ```python
    import codecs

    hex = "49276d206b6e6f"

    b64 = codecs.encode(codecs.decode(hex, 'hex'), 'base64').decode()
    print(b64)
    ```

2. **XOR**

    - **Basic XOR**

        ```python
        hex1 = "1c0111001f010100061a024b53535009181c"
        hex2 = "686974207468652062756c6c277320657965"

        xored_hex = hex(int(hex1, 16) ^ int(hex2, 16))
        # Display without prefix '0x' by slicing [2:]
        print(xored_hex[2:])
        ```

    - **Single-Byte XOR**

        ```python
        # Basic function
        def single_byte_xor(text: bytes, key: int) -> bytes:
            return bytes([b ^ key for b in text])

        # ---------------------------------------------------------------
            
        # Enctyption
        ciphertext = single_byte_xor(b"hello", 69)
        print(ciphertext)

        # Decryption
        ciphertext = single_byte_xor(b"- ))*", 69)
        print(ciphertext)
        ```

    - **Crack Single-Byte XOR**

        ```python
        import random
        import string
        from collections import Counter
        from typing import Tuple

        def single_byte_xor(text: bytes, key: int) -> str:
            return bytes([b ^ key for b in text])

        def fitting_quotient(text: bytes) -> float:
            counter = Counter(text)
            dist_text = [
                (counter.get(ord(ch), 0) * 100) / len(text)
                for ch in occurence_english
            ]
                
            return sum([abs(a - b) for a, b in zip(dist_english, dist_text)]) / len(dist_text)
            
        def decipher(text: bytes) -> Tuple[bytes, int]:
            original_text, encryption_key, min_fq = None, None, None
            for k in range(256):
                # Generate the plaintext using encryption key 'k'
                _text = single_byte_xor(text, k)
                # Compute the fitting quotient for this decrypted plaintext
                fq = fitting_quotient(_text)
                # If the fitting quotient of this generated plaintext is less than the minimum seen till now 'min_fq' we update.
                if min_fq is None or fq < min_fq:
                    encryption_key, original_text, min_fq = k, _text, fq
                    
            # Return the text and key that has the minimum fitting quotient
            return original_text, encryption_key
            
            
        plaintext = b"Hello world"
        plaintext = plaintext.lower()

        key = 82

        ciphertext = single_byte_xor(plaintext, key)

        occurence_english = {
            'a': 8.2389258, 'b': 1.5051398, 'c': 2.8065007, 'd': 4.2904556,
            'e': 12.813865, 'f': 2.2476217, 'g': 2.0327458, 'h': 6.1476691,
            'i': 6.1476691, 'j': 0.1543474, 'k': 0.7787989, 'l': 4.0604477,
            'm': 2.4271893, 'n': 6.8084376, 'o': 7.5731132, 'p': 1.9459884,
            'q': 0.0958366, 'r': 6.0397268, 's': 6.3827211, 't': 9.1357551,
            'u': 2.7822893, 'v': 0.9866131, 'w': 2.3807842, 'x': 0.1513210,
            'y': 1.9913847, 'z': 0.0746517
        }

        dist_english = list(occurence_english.values())

        sentences = [
            b'His mind was blown that there was nothing in space except space itself.',
            b'I love bacon, beer, birds, and baboons.',
            b'With a single flip of the coin, his life changed forever.',
            b'The three-year-old girl ran down the beach as the kite flew behind her.',
        ]

        for sentence in sentences:
            sentence = sentence.lower()
            encryption_key = random.randint(10, 220)
            assert decipher(single_byte_xor(sentence, encryption_key)) == (sentence, encryption_key,)
            
            (_plaintext, _key) = decipher(single_byte_xor(sentence, encryption_key))
            print(_plaintext)
            print(_key)
            print("\n")
        ```

<br />

## Vigenere Cipher

- **[Vigenere Cipher](https://www.dcode.fr/vigenere-cipher){:target="_blank"}{:rel="noopener"}**

<br />

## Crack Hashes

1. **Online Tools**

    - **[CrackStation](https://crackstation.net/){:target="_blank"}{:rel="noopener"}**
    - **[Hashes.com](https://hashes.com/en/decrypt/hash){:target="_blank"}{:rel="noopener"}**

2. **Cracking Tools**

    First of all, you need to put the hash into the file like the following.

    ```sh
    echo -n '4bc9ae2b9236c2ad02d81491dcb51d5f' > hash.txt
    ```

    If you don't know which hash type it is, **[Example Hashes](https://hashcat.net/wiki/doku.php?id=example_hashes){:target="_blank"}{:rel="noopener"}** may help you.  

    For brute forcing without wordlists in Hashcat, use the following command.

    ```sh
    hashcat -m <hash-mode> -a 3 '?a?a?a?a?a'
    ```

<br />

## John the Ripper Techniques

1. **Search Hash Formats**

    ```sh
    john --list=formats
    john --list=formats | grep -e sha -e SHA
    john --list=formats | grep -e md5 -e MD5
    ```

2. **Filter the Word Length of Wordlists**

    ```sh
    # Up to 5 characters (-max-len:5)
    john --wordlist=/usr/share/wordlists/rockyou.txt -max-len:5 hash.txt

    # 4 characters only (-min-len:4 -max-len:4)
    john --wordlist=/usr/share/wordlists/rockyou.txt -min-len:4 -max-len:4 hash.txt
    ```

3. **Generate the Custom Wordlist from The Original Wordlist**

    Add custom rules to "/etc/john/john.conf"

    ```sh
    [List.Rules:Custom]
    Az"[0-9][0-9][!?#$%&/()=]"                                                                      "
    ```

    Generate

    ```sh
    john --wordlist=./original-wordlist.txt --rules:Custom --stdout > new-wordlist.txt
    ```

    <br />

4. **Force to Crack Again**

    Remove the "john.pot"

    ```sh
    rm ~/.john/john.pot
    ```

<br />

## Encrypt Files

```sh
openssl enc -in /etc/passwd -out /tmp/passwd
openssl enc -in /tmp/passwd -out /etc/passwd
```

<br />

## Useful Commands

- **Generate Random Strings**

    ```sh
    # Hex encoded password
    openssl rand -hex 4
    ```
