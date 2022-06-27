---
title: Xxd
desc: Retrive a hexdump to get hidden data.
tags: [ReverseEngineering, Steganography]
alts: [Binwalk, Exiftool, Steghide, Stegseek, Zsteg]
website: 
render_with_liquid: false
---

## Basic Usage

```sh
xxd sample.jpg

# Show header
xxd example.jpg | head
```

<br />

## Repair PNG Header

```sh
# Check PNG header
xxd example.png | head

00000000: 2333 445f 0d0a 1a0a 0000 000d 4948 4452  #3D_........IHDR
00000010: 0000 0320 0000 0320 0806 0000 00db 7006  ... ... ......p.
00000020: 6800 0000 0173 5247 4200 aece 1ce9 0000  h....sRGB.......
...

# If the top of header does not display '.PNG', you can fix it.

# Fix by adding '.PNG' to the top of header
# '\x89\x50\x4E\x47' (Hex) means '.PNG'
printf '\x89\x50\x4E\x47' | dd of=example.png bs=4 conv=notrunc

# Check if PNG header fixed
xxd example.png | head

00000000: 8950 4e47 0d0a 1a0a 0000 000d 4948 4452  .PNG........IHDR
00000010: 0000 0320 0000 0320 0806 0000 00db 7006  ... ... ......p.
00000020: 6800 0000 0173 5247 4200 aece 1ce9 0000  h....sRGB.......
...
```