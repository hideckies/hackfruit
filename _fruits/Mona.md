---
title: Mona
desc: Make exploiting buffer overflows much easier. It runs on Immunity Debugger.
tags: [BufferOverflow]
alts: [BufferOverflowPayloads, ImmunityDebugger]
website: https://github.com/corelan/mona
render_with_liquid: false
---

## Commands in Immunity Debugger

```sh
# Configure a working ofler
!mona config -set workingfolder c:\mona\%p

# Find the exact offset of the crash (ex: 500 byte)
!mona findmsp -distance 500
```