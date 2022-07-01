---
title: Tr
desc: Utility for translating or deleting characters.
tags: [Cryptography, Linux]
alts: []
website:
render_with_liquid: false
---

## ROT13 Encode/Decode

```sh
# Same commands for encoding and decoding.
echo hello | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```