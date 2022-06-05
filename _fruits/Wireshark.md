---
title: Wireshark
desc: Network protocol analyzer. It uses the pcapng file format.
tags: [DataExfiltration, PassiveRecon]
alts: []
website:
render_with_liquid: false
---

## Find Sensitive Information

```
1. In Wireshark, open example.pcapng.
2. Right click -> Follow -> TCP Stream
3. Open another window.
4. Find the sensitive information by clicking the arrow on the right of "Stream *".
```

<br />

## Filters

Enter the following text in a filtering form.

```
dns
ftp
http
icmp
smb
```

<br />

## Data Exfiltration via DNS

```
1. Enter "dns" in a filter form
2. If you found a domain such as follow, you may be able to retrieve threats.

93616e64792043...2038343931.vulnerable.com

3. For example, decode "936...".
```

<br />

## Data Exfiltration via HTTP

```
1. Open "File" -> "Export Objects" -> "HTTP...".
2. Click "Save all".
3. Analyze steganographic files using tools like steghide.
```