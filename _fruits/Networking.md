---
title: Networking
desc:
tags: [Firewall, Linux, Network, Packet, Ping, Traffic, Wireshark]
alts: [Privilege-Escalation-Linux]
render_with_liquid: false
---

## 1. Connection

1. **Status**

    ```sh
    netstat

    # -t: tcp, -u: udp, -l: listen, -p: programs, -n: don't resolve names
    netstat -lnptu
    # -r: route
    netstat -rn
    ```

2. **Connectivity of Hosts**

    ```sh
    ping <target-ip>

    # Stop after 5 times
    ping -c 5 <target-ip>

    # No DNS resolution
    ping -n 3 <target-ip>
    ```

3. **Trace Route Path Between Two Nodes**

    ```sh
    traceroute <target-ip>
    ```

4. **Investigate Packets/Traffic**

    - **ICMP**

        Check the status of network connections between nodes.

        1. **Start Tcpdump**

            To start analyzing, start tcpdump.  Here we use eth0 interface.

            ```sh
            sudo tcpdump -i eth0 icmp

            # For Wireshark
            sudo tcpdump -i eth0 icmp -w /tmp/tcpdump.pcap
            ```

        2. **Send Packets to Target**

            For example, send 5 packets to target.

            ```sh
            sudo ping -c 5 <target-ip>
            ```

        3. **Check Results of Tcpdump**

            To check the details, use Wireshark.

            ```sh
            wireshark /tmp/tcpdump.pcap
            ```

## 2. Firewall

1. **Use UFW**

    **Uncomplicated Firewall (UFW)** is a program for managing a netfilter firewall designed to be easy to use.

    1. **Status**

        ```sh
        ufw show
        ```

    2. **Enable/Disable Firewall**

        ```sh
        # Enable
        ufw enable

        # Disable
        ufw disable
        ```

    3. **Default Policies**

        Allow all in default

        ```sh
        ufw default ALLOW
        ```

        Deny all in default

        ```sh
        ufw default DENY
        ```

    4. **Add Rules**

        Allow rules

        ```sh
        ufw allow 22
        ufw allow 22/tcp
        ufw allow 80
        ufw allow 80/tcp
        ```

        Deny rules

        ```sh
        ufw deny 22
        ufw deny 22/tcp
        ufw deny 80
        ufw deny 80/tcp
        ```

2. **Use firewalld**

    1. **Open Firewall Port**

        ```sh
        firewall-cmd --zone=public --add-port 15000/tcp
        ```

<br />

## 3. Send Packet with MAC/IP Spoofing

1. **IP Spoofing**

    ```sh
    sudo ./run_scapy

    >>> spoof_example = IP(src='172.1.1.20', dst='172.1.1.40')
    >>> send(spoof_example)
    ```

2. **MAC and IP Spoofing**

    ```sh
    sudo ./run_scapy

    >>> spoofed_MAC_and_IP = Ether(src='00:0c:29:1a:2b:3c', dst='00:0c:29:bd:da:cf', type=0x0800)/IP(src='172.1.1.24', dst='172.1.1.40')
    ```