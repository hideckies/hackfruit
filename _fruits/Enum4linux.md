---
title: Enum4linux
desc: Enumerates comprehensive information about Windows and Samba system.
tags: [ActiveDirectory, ActiveRecon, Linux, SMB, Windows]
alts: [Smbclient, Smbget, Smbmap]
website:
---

## Examples

```sh
# Basic
enum4linux 10.0.0.1

# Get users
enum4linux -U 10.0.0.1

# Get shares
enum4linux -S 10.0.0.1

# All enumeration
enum4linux -a 10.0.0.1

# Verbose
enum4linux -v 10.0.0.1

# Specify username and password
enum4linux -a -u username -p password 10.0.0.1
```