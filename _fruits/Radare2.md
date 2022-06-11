---
title: Radare2
desc: UNIX-like reverse engineering framework and command-line toolset.
tags: [ReverseEngineering]
alts: []
website: https://github.com/radareorg/radare2
render_with_liquid: false
---

## Basic Usage

```sh
r2 ./somefile
# Debugging mode
r2 -d ./somefile
```

<br />

## Basic Flow for Analyzing

```sh

# Run as debugging mode
r2 -d ./somefile

# ------------------------------------

# Analyze the program
> aa
> aaa
> aaaa

# List of main functions
> afl
> afl | grep main

# Print
> pdf
# Print disassembly function
> pdf @main

# Add breakpoints
> db 0x55ae... (hex address of the instruction)
# Remove breakpoints
> db -0x55ae...

# Execute the program and stop at the breakpoints
> dc

# Print the value of memory in hex
> px @rbp-0xc
> px @rbp-0x8

# Seek/move onto the next instruction
> ds

# See the value of registers
> dr

# Help
> ?
```