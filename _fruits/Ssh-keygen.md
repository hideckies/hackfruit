---
title: Ssh-keygen
desc: Creates new SSH public and private keys.
tags: [Linux, PrivEsc, SSH]
alts: [SSH]
website:
render_with_liquid: false
---

## Generate Key

```sh

ssh-keygen
# Specify the output file
ssh-keygen -f key

# Specify Ed25519
ssy-keygen -t ed25519
```

<br />

## Install SSH Key

```sh
# On target machine

ssh-copy-id username@10.0.0.1
```