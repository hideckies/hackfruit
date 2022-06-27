---
title: Radare2
desc: UNIX-like reverse engineering framework and command-line toolset.
tags: [Malware, ReverseEngineering]
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

# Print disassembly function
> pdf
> pdf @main

# Add breakpoints
> db 0x55ae... (hex address of the instruction)
# Remove breakpoints
> db -0x55ae...

# Execute the program and stop at the breakpoints
> dc

# Seek/move onto the next instruction
> ds

# Print the value of memory in hex
> px @rbp-0xc
> px @rbp-0x8

# See the value of registers
> dr

# Reload the program
> ood

# Help
> ?
```

<br />

## Instructions

```sh
# Call procedure
call

#
cdqe

# Compare two operands
cmp dl, al

# Decrement
dec

# Divide (unsigned)
div
# Divide (signed)
idiv

# Jump if above
ja

# Jump if above or equal
jae

# Jump if below
jb

# Jump if below or equal
jbe

# Jump if equal
je

# Jump if less
jl

# Jump
jmp

# Jump if not equal
jne

# Load effective address
lea

# Increment
inc

# Move data between immediate values, general purpose registers, segment registers, and memory.
mov
# Copy double word
mov dword
# Copy quad word
mov qword

# Move immediate value to register
movabs

# Multiply (unsigned)
mul
# Multiply (signed)
imul

# Negate
neg

# Pop stack
pop

# Push onto stack
push

# Return
ret

# Subtract
sub
```