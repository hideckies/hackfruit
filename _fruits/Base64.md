---
title: Base64
desc: Encodes text using base64, or decodes base64 to text strings.
tags: [Cryptography, Linux, Password, PrivEsc]
alts: [Base16, Base32]
website:
render_with_liquid: false
---

## Basic Commands

```sh
# Encode
base64 sample.txt

# Decode
base64 -d sample.txt
```

<br />

## Transfer File to Remote Host

```sh
# On attack machine

# Encode the file of payload
# -w 0: disable line wrapping
base64 exploit.sh -w 0

# Copy the output string

# -----------------------------------------------

# On target machine

# Decode the base64 string
echo <output-base64-string> | base64 -d > exploit.sh
```