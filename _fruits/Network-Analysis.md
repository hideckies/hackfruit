---
title: Network Analysis
desc:
tags: [Brim, Network, Packet, Traffic, Wireshark]
alts: []
render_with_liquid: false
---

## Packet Analysis

- **Wireshark**

    ```sh
    wireshark sample.pcap
    ```

- **Tcpdump**

    ```sh
    sudo tcpdump -i eth0 icmp

    # For Wireshark
    sudo tcpdump -i eth0 icmp -w /tmp/tcpdump.pcap
    ```

- **Brim**

    [Brim](https://www.brimdata.io/){:target="_blank"}{:rel="noopener"} is an application to search and analyze super-structured data.

    ```sh
    brim sample.pcap
    ```