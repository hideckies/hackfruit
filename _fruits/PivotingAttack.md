---
title: Pivoting Attack
desc: Access obtained over one machine to exploit another machine deeper in the network.
tags: [Linux, Pivoting, PostExploitation, Windows]
alts: []
website:
render_with_liquid: false
---

## Enumerate A Network

```sh
# Check the ARP chache.
arp -a

# ----------------------------------------------------

# Check IP address

# On Linux
cat /etc/hosts
cat /etc/resolv.conf
nmcli dev show

# On Windows
Get-Content c:\Windows\System32\drivers\etc\hosts
ipconfig /all

# ---------------------------------------------------------

# Search other network ranges

# On Linux
nmap 10.0.0.1-255
for i in {1..255}; do (ping -c 1 10.0.0.${i} | grep "bytes from" &); done


# --------------------------------------------------------

# Port scan

# On Linux
nmap 10.0.0.1
for i in {1..65535}; do (echo > /dev/tcp/10.0.0.1/$i) >/dev/null 2>&1 && echo $i is open; done
```