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
# List of main functions
> afl | grep main
# Print disassembly function
> pdf @main
# Execute the program until you hit the breakpoint
> dc
# Print
> pdf
# Print the value of memory in hex
> px @ rbp-0xc
> px @ rbp-0x8
# See the value of registers
> dr

# Help
> ?
```