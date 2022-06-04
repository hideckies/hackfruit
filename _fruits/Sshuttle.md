---
title: Sshuttle
desc: Transparent proxy server that works as a poor man's VPN. Forwards over ssh.
tags: [Linux, Pivoting, PortForwarding]
alts: [Chisel, Socat, SSH]
website: https://github.com/sshuttle/sshuttle
render_with_liquid: false
---

## Connect

```sh
sshuttle -r username@10.0.0.1 10.0.0.1/24

# Automatically determine subnet
sshuttle -r username@10.0.0.1 -N

# Using private key
sshuttle -r username@10.0.0.1 --ssh-cmd "ssh -i private_key" 10.0.0.1/24

# Exclude the specific ip (-x)
sshuttle -r username@10.0.0.1 10.0.0.1/24 -x 10.0.0.1

# ---------------------------------------------------------

# Then you can access to other networks e.g. 10.0.0.2
```

<br />

## Troubleshooting

```sh
# If you got the error "Failed to flush caches: Unit dbus-org.freedesktop.resolve1.service not found..."
# You need to flush DNS cache.
sudo systemctl enable systemd-resolved.service
sudo resolvectl flush-caches

# Then run sshuttle again.
```