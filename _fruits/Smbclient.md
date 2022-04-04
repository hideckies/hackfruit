---
title: Smbclient
desc: Connects to Samba client.
tags: [Linux, SMB, Windows]
alts: [Smbget, Smbmap]
website:
---

## Examples

```sh
# Basic
smbclient -L 10.0.0.1

# Specific shares directory
smbclient //10.0.0.1/somedir

# Get list of shares (specific username e.g. 'admin')
smbclient -L 10.0.0.1 -U admin
```
