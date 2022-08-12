---
title: Wireshark
desc: Network protocol analyzer. It uses the pcapng file format.
tags: [Data Exfiltration, Network, Packet, Traffic, Wireshark]
alts: [Recon]
render_with_liquid: false
---

## 1. Find Sensitive Information

```
1. In Wireshark, open example.pcapng.
2. Right click -> Follow -> TCP Stream
3. Open another window.
4. Find the sensitive information by clicking the arrow on the right of "Stream *".
```

<br />

## 2. Filters

Enter the following text in a filtering form.

```
dns
ftp
ftp-data
http
http.request.method == GET
http.request.method == POST
icmp
ip.addr == 10.0.0.1
ip.addr != 10.0.0.2
ip.addr == 10.0.0.1 && ip.addr == 10.0.0.2
ip.src == 10.0.0.1
ip.dst == 10.0.0.2
smb
tcp.port == 22
tcp.port == 80 || udp.port == 67
udp.port == 67
```

<br />

## 3. Data Exfiltration via DNS

```
1. Enter "dns" in a filter form
2. If you found a domain such as follow, you may be able to retrieve threats.

93616e64792043...2038343931.vulnerable.com

3. For example, decode "936...".
```

<br />

## 4. Data Exfiltration via HTTP

```
1. Open "File" -> "Export Objects" -> "HTTP...".
2. Click "Save all".
3. Analyze steganographic files using tools like steghide.
```

<br />

## 5. Read the Capture File Comments

```
Click "Statictics" -> "Capture File Properties.
```

<br />

## 6. Read the Expert Information

```
Click "Analyze" -> "Expert Information"
```