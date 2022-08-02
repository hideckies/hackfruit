---
title: WiFi Hacking
desc: Examples of hacking WiFi.
tags: [WiFi, Windows]
alts: [Aircrack-ng]
website: 
render_with_liquid: false
---

## Router Default Credentials

```
admin:Admin
admin:admin
admin:password
admin:Michelangelo
root:admin
root:alpine
sitecom:Admin
telco:telco
```

<br />

## Recover WiFi Password (Secret Key)

```sh
# Windows

# In Command Prompt as Administrator

# Show all network names you've accessed and saved
netsh wlan show profile
# Show the details of the specific network including password
netsh wlan show profile name="network-name" key=clear
```