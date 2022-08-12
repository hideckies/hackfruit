---
title: Memory Forensics
desc: 
tags: [Forensics, Malware]
alts: []
render_with_liquid: false
---

## 1. Use Volatility

**[Volatility](https://github.com/volatilityfoundation/volatility3){:target="_blank"}** extracts digital artifacts from volatile memory (RAM) samples. memory capture file is like .bin, .mem, .raw, .sav, .vmem.

1. **Commands**

    ```sh
    # OS information
    python vol.py -f example.vmem windows.info

    # Process information
    python vol.py -f example.vmem windows.pslist
    python vol.py -f example.vmem windows.psscan
    python vol.py -f example.vmem windows.pstree

    # Network connections
    python vol.py -f example.vmem windows.netscan

    # Hidden processes
    python vol.py -f example.vmem windows.ldrmodules

    # Detect malware
    python vol.py -f example.vmem windows.malfind

    # DLL files
    python vol.py -f example.vmem windows.dlllist
    ```
