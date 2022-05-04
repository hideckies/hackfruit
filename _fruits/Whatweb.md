---
title: Whatweb
desc: Web scanner.
tags: [ActiveRecon, Linux, Web]
alts: [Nikto, Nmap]
website:
render_with_liquid: false
---

```sh
# Basic
whatweb 10.0.0.1

# Aggression level (1-4)
whatweb -a 3 10.0.0.1

# Verbose
whatweb -v 10.0.0.1
```