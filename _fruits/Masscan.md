---
title: Masscan
desc: Port scanner.
tags: [ActiveRecon, Linux]
alts: [Nmap]
website:
render_with_liquid: false
---

```sh
# Basic
masscan 10.0.0.1/16 -p 80,443

# Port range
masscan 10.0.0.1/16 -p 22-80

# All ports
masscan 10.0.0.1/16 -p 0-65535

# Top ports
masscan 10.0.0.1/16 --top-ports 100
```