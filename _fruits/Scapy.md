---
title: Scapy
desc: Interactive packet manipulation program & library.
tags: [ActiveRecon, Network, Web]
alts: [Ping]
website:
render_with_liquid: false
---

## Send Packet (IP Spoofing)

```sh
sudo ./run_scapy

>>> spoof_example = IP(src='172.1.1.20', dst='172.1.1.40')
>>> send(spoof_example)
```

<br />

## Send Packet (MAC and IP Spoofing)

```sh
sudo ./run_scapy

>>> spoofed_MAC_and_IP = Ether(src='00:0c:29:1a:2b:3c', dst='00:0c:29:bd:da:cf', type=0x0800)/IP(src='172.1.1.24', dst='172.1.1.40')
```