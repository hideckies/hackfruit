---
title: Nessus
desc: A proprietary vulnerability scanner.
tags: [Scanner]
alts: []
website: https://www.tenable.com/products/nessus
render_with_liquid: false
---

## Installation

```sh
sudo dpkg -i Nessus-8.12.1-debian6_amd64.deb
```

<br />

## Basic Usage

```sh
# Start Nessus
sudo systemctl start nessusd.service

# Stop Nessus
sudo systemctl stop nessusd.service

# Access to Nessus in browser
https://localhost:8834
```