---
title: Macchanger
desc: Makes the maniputation of MAC addresses of network interfaces easier.
tags: [Network, WiFi]
alts: [Aircrack-ng, WiFiHacking]
website:
render_with_liquid: false
---

## Basic Usage

```sh
# Show MAC addresses of the specific interface
macchanger -s eth0

# Set random MAC address
macchanger -r eth0

# Set the new MAC address
macchanger -m XX:XX:XX:XX:XX:XX eth0

# Reset to the original (permanent) MAC address
macchanger -p eth0
```