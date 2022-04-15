---
title: Smbget
desc: Downloads files in the SMB shares directory.
tags: [Linux, SMB, Windows]
alts: [Smbclient, Smbmap]
website:
---

## Examples

```sh
smbget -R smb://10.0.0.1/somedir -U username

# Specify workgroup
smbget -R smb://10.0.0.1/somedir -w WORKGROUP -U username
```