---
title: Proxychains
desc: Force any TCP connection made by any given application to follow through proxy like TOR or any other SOCKS4, SOCKS5 or HTTP(S) proxy.
tags: [Pivoting, PostExploitation]
alts: [FoxyProxy]
website:
render_with_liquid: false
---

## Examples

```sh
proxychains telnet <target-ip>
proxychains nc <target-ip> 23
```

<br />

## Configure

```sh
# Copy the original config file
cp /etc/proxychains.conf .

# If performing nmap for port scan through proxychains, comment out the following. Otherwise it will hang and crash.
proxy_dns
```

<br />

## If You Lost Config File

```sh
wget https://raw.githubusercontent.com/haad/proxychains/master/src/proxychains.conf -O /etc/proxychains.conf
```