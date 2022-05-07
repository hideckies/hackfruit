---
title: Smbmap
desc: SMB enumeration tool.
tags: [Linux, SMB, Windows]
alts: [CrackMapExec, Smbclient, Smbget]
website:
render_with_liquid: false
---

```sh
# Basic
smbmap -H 10.0.0.1

# Recursive
smbmap -H 10.0.0.1 -R

# Username and password
smbmap -u username -p password -H 10.0.0.1

# Execute a command
smbmap -u username -p password -H 10.0.0.1 -x 'ipconfig'
```