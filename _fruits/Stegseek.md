---
title: Stegseek
desc: Cracks steganography passphrase using bruteforce.
tags: [Linux, Steganography]
alts: [Binwalk, Exiftool, Steghide, Zsteg]
website: https://github.com/RickdeJager/stegseek
---

```sh
# Crack using wordlists
stegseek --crack sample.jpg /usr/share/wordlists/rockyou.txt

# Crack by attempting all embedding patterns
stegseek --seed sample.jpg
```