---
title: Whatweb
desc: Web scanner.
tags: [ActiveRecon, Web]
alts: [Nikto, Nmap]
website: https://github.com/urbanadventurer/WhatWeb
render_with_liquid: false
---

## Basic

```sh
# Basic
whatweb 10.0.0.1

# Aggression level (1-4)
whatweb -a 3 10.0.0.1

# Verbose
whatweb -v 10.0.0.1
```

<br />

## Plugins

```sh
# List all plugins
whatweb -l

# Search plugins
whatweb -I apache
whatweb -I phpBB
whatweb -I phpmyadmin
whatweb -I windows

# Use plugin
whatweb -p phpBB 10.0.0.1
```