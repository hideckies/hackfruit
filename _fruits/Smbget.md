---
title: Smbget
desc: Downloads files in the SMB shares directory.
tags: [Linux, SMB, Windows]
alts: [Smbclient, Smbmap]
website:
---

## Examples

```sh
smbget -R smb://10.0.0.1/somedir

# ex. shares named 'backup' and specific username is 'admin'
smbget -R smg://10.0.0.1/backup -U admin
```