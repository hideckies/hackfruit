---
title: Steghide
desc: Steganography tool that hide data into image files, and extract hidden data from files.
tags: [Linux, Steganography]
alts: [Binwalk, Exiftool, Stegseek, Xxd, Zsteg]
website:
render_with_liquid: false
---

## Embed hidden data

```sh
steghide embed -ef sample.jpg
```

<br />

## Extract hidden data

```sh
steghide extract -sf sample.jpg
```

<br />

## Information about file

```sh
steghide info sample.jpg
```
