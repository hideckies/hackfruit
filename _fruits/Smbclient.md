---
title: Smbclient
desc: Connects to Samba client.
tags: [Linux, SMB, Windows]
alts: [Smbget, Smbmap]
website:
---

## Basic

```sh
smbclient -L 10.0.0.1

# Specific shares
smbclient //10.0.0.1/somedir
```
