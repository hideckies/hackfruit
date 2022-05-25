---
title: Outguess
desc: A steganography tool for JPG, PPM and PNM.
tags: [Steganography]
alts: [Steghide]
website:
render_with_liquid: false
---

```sh
# Create
outguess -k "passphrase" -d hidden.txt example.jpg out.jpg

# Extract
outguess-extract example.ppm out.ppm
```