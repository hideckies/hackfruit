---
title: Ufw
desc: Manages Firewall configuration.
tags: [Linux, Network]
alts: [Firewalld, SSH]
website:
render_with_liquid: false
---

## Basic Commands

```sh
# Show status
ufw show

# Enable the firewall
ufw enable
# Disable the firewall
ufw disable

# Add allow rule
ufw allow 22
ufw allow 22/tcp
ufw allow 80
ufw allow 80/tcp
# Add deny rule
ufw deny 22
ufw deny 22/tcp
ufw allow 80
ufw allow 80/tcp

# Set default policy - allow all
ufw default ALLOW
# Set default policy - deny all
ufw default DENY
```