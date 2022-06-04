---
title: Scp
desc: It securely copy files and directories between two locations.
tags: [Linux, SSH]
alts: []
website:
render_with_liquid: false
---

## Local File -> Remote

```sh
scp example.txt kali@10.0.0.1:/home/kali/example.txt

# Using private key
scp -i private_key example.txt username@<remote-ip>:/tmp/example.txt
```

<br />

## Remote File -> Local

```sh
scp kali@10.0.0.1:/home/kali/example.txt example.txt
```