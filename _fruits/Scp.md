---
title: Scp
desc: Transfer files between two machines via SSH.
tags: [Linux, SSH]
alts: []
website:
render_with_liquid: false
---

## Local file -> Remote

```sh
scp example.txt kali@10.0.0.1:/home/kali/example.txt
```

<br />

## Remote file -> Local

```sh
scp kali@10.0.0.1:/home/kali/example.txt example.txt
```