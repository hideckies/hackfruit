---
title: 32-bit ARM Assembly
desc: 32-bit Advanced RISC Machine (ARM) processor. 
tags: [32, Assembly, Binary, Bit, Engineering, Reverse]
alts: []
render_with_liquid: false
---

## Registers

- **R0 GPR (General Purpose Register)**
- **R1 GPR (General Purpose Register)**
- **R2 GPR (General Purpose Register)**
- **R3 GPR (General Purpose Register)**
- **R4 GPR (General Purpose Register)**
- **R5 GPR (General Purpose Register)**
- **R6 GPR (General Purpose Register)**
- **R7 GPR (General Purpose Register)**
- **R8 GPR (General Purpose Register)**
- **R9 GPR (General Purpose Register)**
- **R10 GPR (General Purpose Register)**
- **R11 GPR (General Purpose Register)**
- **R12 GPR (General Purpose Register)**
- **R13 Stack Pointer**
- **R14 Link Register**
- **R15 Program Counter** - Is responsible for directing the CPU to what instruction will be executed next.

    ```sh
    # Control the PC directly (not recommended in User mode.)
    mov r15, 0x00000000
    ```

- **CPSR (Current Program Status Register)** - Stores information about the program and the results of a particular operation.

<br />

## Create Assembly Program

```
@ LR Demo - Link Register Demo

	.global __start

__start:
	mov r7, #0x30   @ mov hex 30 into r7
	b no_return     @ branch to no_return function which never returns

no_return:
	mov r7, #1      @ mov decimal 1 into r7
  bl my_function  @ go to my_function which after execution

wrap_up:
	mov r7, #0x12   @ mov hex 12 into r7
	b exit          @ branch to exit

my_function:
	mov r0, #10     @ mov decimal 10 into r0
	mov pc, lr      @ mov the ret address into the program counter

exit:
	mov r7, #1      @ sys_exit
  svc 0
```

To compile it, run the following commands.

```sh
as -o sample.o sample.s
ld -o sample sample.o
```