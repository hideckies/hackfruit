---
title: Aircrack-ng
desc: A complete suite of tools to assess WiFi network security.
tags: [WiFi]
alts: [Macchanger, WiFiHacking]
website: https://github.com/aircrack-ng/aircrack-ng
render_with_liquid: false
---

## Basic Usage

```sh
# Show available interfaces
airmon-ng

# Put wireless interface into monitor mode
airmon-ng start wlan0
airmon-ng start eth0

# Choose the access point (monitor mode)
airodump-ng wlan0mon
```

<br />

## Get Client's MAC Address

```sh
# Choose the access point (monitor mode)
airodump-ng wlan0mon

# Retrieve client's MAC address from the chosen access point
# -c 9: channel 9
# --bssid: target router MAC address
# -w psk: the dump file prefix
# eth0: interface name
airodump-ng -c 6 --bssid XX:XX:XX:XX:XX:XX -i wlan0mon
airodump-ng -c 9 --bssid 00:14:6C:7E:40:80 -w psk eth0
```