---
title: Rpcinfo
desc: Checks the status of RPC server.
tags: [Linux, Windows]
alts: []
website:
render_with_liquid: false
---

```sh
# Basic
rpcinfo -p

# NFS
rpcinfo -p | grep nfs
```