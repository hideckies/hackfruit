---
title: Smbmap
desc: SMB enumeration tool.
tags: [Linux, SMB, Windows]
alts: [Smbclient, Smbget]
website:
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