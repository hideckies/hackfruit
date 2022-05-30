---
title: Stegcracker
desc: Crack the steg password and extract the hidden data.
tags: [Steganography]
alts: [Steghide, Stegseek]
website: https://standards-oui.ieee.org/oui/oui.txt
render_with_liquid: false
---

```sh
# Using default passwords
stegcracker example.jpg

# Specify the password list
stegcracker example.jpg /usr/share/wordlists/rockyou.txt
```