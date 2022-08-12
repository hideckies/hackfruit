---
title: Assembly
desc: Assembly language commonly abbreviated as ASM.
tags: [ASM, Reverse Engineering]
alts: [Reverse-Engineering]
render_with_liquid: false
---

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

<br />

## Registers

```sh
# Accumulator register
%rax, %eax, %ax
# Base register
%rbx, %ebx, %bx
# Counter register
%rcx, %ecx, %cs
# Data register
%rdx, %edx, %dx

# Stack pointer register
%rsp, %esp, %sp
# Base pointer register
%rbp, %ebp, %bp
# Program counter register
%rip, %eip, %ip

# Source register
%rsi, %esi, %si
# Destination register
%rdi, %edi, %di
```