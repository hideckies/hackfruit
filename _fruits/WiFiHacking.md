---
title: WiFi Hacking
desc: Examples of hacking WiFi.
tags: [Network, WiFi, Windows]
alts: [Aircrack-ng, Macchanger]
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

<br />

## MAC Address Spoofing

```sh
# Get MAC addresses which are used for spoofing to target interface

# Put the interface into monitor mode
airmon-ng start wlan0
# or
iwconfig wlan0 mode monitor

# Choose the access point (monitor mode)
airodump-ng wlan0mon

# Retrieve client's MAC address from the chosen access point
airodump-ng -c 6 --bssid XX:XX:XX:XX:XX:XX -i wlan0mon

# ----------------------------------------------------------------

# Spoof MAC address of which you retrieve by airodump

# Take down the network
ip link set wlan0 down

# Set MAC address which you got by airodump-ng in the previous section
macchanger -m XX:XX:XX:XX:XX:XX wlan0

# Bring up the network
ip link set wlan0 up

# ---------------------------------------------------------------

# Check and reset

# Check the current MAC address
macchanger -s wlan0

# Reset to the original (permanent) MAC address
macchanger -p wlan0
```