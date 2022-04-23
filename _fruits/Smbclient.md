---
title: Smbclient
desc: Connects to Samba client.
tags: [Linux, SMB, Windows]
alts: [Smbget, Smbmap]
website:
render_with_liquid: false
---

## Examples

```sh
# List of shares
smbclient -L 10.0.0.1
smbclient -N -L \\\\10.0.0.1
smbclient -L 10.0.0.1 -U username

# Specify shared directory
smbclient //10.0.0.1/somedir -U username
# nobody, no-pass
smbclient //10.0.0.1/somedir -N -U nobody

# Specify workgroup
smbclient -L 10.0.0.1 -W WORKGROUP -U username
```
