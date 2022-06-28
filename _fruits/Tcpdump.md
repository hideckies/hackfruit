---
title: Tcpdump
desc: Prints out a description of the contents of packets on a network interface.
tags: [Linux, Network, Windows]
alts: []
website:
render_with_liquid: false
---

## Basic Commands

```sh
# -i: interface
tcpdump -i eth1
# -A: verbose
tcpdump -A -i eth1
# -w: output to file
tcpdump -A -i eth1 -w ./output.pcap


# ICMP
tcpdump -i tun0 icmp
# LDAP
tcpdump -i tun0 port 389
```

<br />

## Investigate Captured Traffic

```sh
# On target machine

# Save captured packets
tcpdump -A -i eth1 -w /tmp/tcpdump.pcap

# -----------------------------------------------

# On attack machine

# Transfer the file to attack machine
scp victim-user@<target-ip>:/tmp/tcpdump.pcap .

# Open wireshark
wireshark tcpdump.pcap
```