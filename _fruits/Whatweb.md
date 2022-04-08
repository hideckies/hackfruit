---
title: Whatweb
desc: Web scanner.
tags: [ActiveRecon, Linux]
alts: [Nikto, Nmap]
website:
---

```sh
# Basic
whatweb 10.0.0.1

# Aggression level (1-4)
whatweb -a 3 10.0.0.1

# Verbose
whatweb -v 10.0.0.1
```