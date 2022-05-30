---
title: Stegseek
desc: Cracks steganography passphrase using bruteforce.
tags: [Steganography]
alts: [Stegcracker, Steghide]
website: https://github.com/RickdeJager/stegseek
render_with_liquid: false
---

```sh
# Crack using wordlists
stegseek --crack sample.jpg /usr/share/wordlists/rockyou.txt

# Crack by attempting all embedding patterns
stegseek --seed sample.jpg
```