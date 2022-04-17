---
title: Rpcclient
desc: Executes MS-RPC functions in Samba.
tags: [SMB, Windows]
alts: [Sqlmap]
website:
---

## Basic

```sh
# Basic
rpcclient 10.0.0.1

# Specify username (-W: workgroup, -N: no pass)
rpcclient -U username 10.0.0.1
rpcclient -W WORKGROUP -U username 10.0.0.1
rpcclient -U username -N 10.0.0.1

# Kerberos
rpcclient -k 10.0.0.1
```