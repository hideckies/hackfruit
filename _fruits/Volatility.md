---
title: Volatility
desc: Extract digital artifacts from volatile memory (RAM) samples. memory capture file is like .bin, .mem, .raw, .sav, .vmem,
tags: [Malware, MemoryForensics]
alts: [VirusTotal]
website: https://github.com/volatilityfoundation/volatility3
render_with_liquid: false
---

## Examples

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

<br />

## Dump (-o: output, --dump)

```sh
python vol.py -f example.vmem -o path/to/output windows.dlllist --dump
```