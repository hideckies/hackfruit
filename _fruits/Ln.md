---
title: Ln
desc: Create a hard link or symbolic link to an existing file or directory.
tags: [Linux, PrivEsc]
alts: []
website:
---

## Examples

```sh
# Symbolic link (ex: /etc/passwd -> /path/to/destiny)
ln -s /etc/passwd /path/to/destiny

# Unlink
unlink /path/to/destiny
```