---
title: ARP Spoofing
desc: Address Resolution Protocol (ARP) is used to find another computer’s MAC address based on its IP address.
tags: [ARP, Network]
alts: []
render_with_liquid: false
---

## 1. Basic Flow

1. **Check Interface and Gateway IP Address**

    ```sh
    # Interfaces
    ip addr

    # Default gateway
    ip route list
    ```

2. **Scan the Network to Find Target IP**

    ```sh
    nmap -sP <gateway-ip>/24
    nmap -sP <gateway-ip>/16
    ```

3. **Enable IP Forwarding**

    ```sh
    # Allow all forwading in the LAN
    # -A: append rules
    # -i: interface
    # -j: jump
    iptables -A FORWARD -i eth0 -j ACCEPT
    ```