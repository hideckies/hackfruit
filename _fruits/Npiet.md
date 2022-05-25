---
title: Npiet
desc: An interpreter for piet programs and takes as input a portable pixmap (PPM) and PNG, GIF.
tags: [Steganography]
alts: []
website: https://www.bertnase.de/npiet/
render_with_liquid: false
---

## Download and Compile

```sh
# Download the source code
wget https://www.bertnase.de/npiet/npiet-1.3f.tar.gz

# Extract
tar -xf npiet-1.3f.tar.gz

# Compile
cd npiet-1.3f
gcc npiet.c -o npiet
```

<br />

## Decode

```sh
./npiet example.png
./npiet example.ppm
./npiet example.gif
```