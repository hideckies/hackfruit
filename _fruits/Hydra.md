---
title: Hydra
desc: Cracks username/password.
tags: [Cryptography, Linux, Password]
alts: [CrackStation, Hashcat, JohnTheRipper]
---

```sh
hydra -t 1 -V -f -l username -P /usr/share/seclists/Password/darkc0de.txt 10.10.66.21 ssh
```