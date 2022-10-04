---
title: Firewall
desc: 
tags: [Firewall, Linux, Network]
alts: [Networking]
render_with_liquid: false
---

## Status

```sh
ufw status
ufw status verbose
```

<br />

## Enable/Disable the Firewall

```sh
ufw enable

ufw disable
```

<br />

## Set Default Policies

```sh
# Allow all
ufw default ALLOW

# Deny all
ufw default DENY
```

<br />

## Rules

- **Allow**

    ```sh
    ufw allow 22
    ufw allow 22/tcp
    ufw allow 80
    ufw allow 80/tcp

    # Allow the given ip address access to port 22 for all protocols
    ufw allow from <ip> to any port 22
    ```

- **Deny**

    ```sh
    ufw deny 22
    ufw deny 22/tcp
    ufw deny 80
    ufw deny 80/tcp
    ```