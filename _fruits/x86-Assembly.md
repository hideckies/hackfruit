---
title: x86 Assembly
desc: 
tags: [32bit, Assemble, Assembly, Binary, Disassemble, Disassembly, Engineering, i386, IA-32, Intel, Register, Reverse, x86]
alts: [Reverse-Engineering]
render_with_liquid: false
---

## Create 32bit Program

To examine 32bit programs or assembly language, you need to prepare a 32bit executable program.  
First off, create a sample program with C.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
	printf("Hello world");
	return 0;
}
```

Then run “gcc” to generate the executable program.

```sh
# If needed
sudo apt install libc6-dev-i386

# -m32: 32bit
# -ggdb: generate the debug information for GDB (GNU debugger)
gcc -m32 -gdb -o sample sample.c
```

You can use this for debugging.

```sh
chmod 700 sample
gdb sample
```

<br />

## Registers

- **General Purpose Registers**

    They are used for temporarily storing data.

    - **EAX** - Accumulator register.
    - **EBX** - Base register.
    - **ECX** - Counter register.
    - **EDX** - A general purpose register.
    
    - **ESI** - Source index register.
    - **EDI** - Destination index register.
    - **EBP** - Base pointer register.
    - **ESP** - Stack pointer register.

- **Segment Registers**

    They are used for referencing memory locations.

    - **CS** - Code segment register.
    - **DS** - Data segment register.
    - **ES** - Extra segment register.
    - **FS** - Extra segment register.
    - **GS** - Extra segment register.
    - **SS** - Stack segment register.

- **Instruction Pointer Register**

    - **EIP** - The most important register in reverse engineering. It keeps track of the next instruction code to execute. EIP points to the next instruction to execute.

- **Control Registers**

    A processor register which changes or controls the general behavior of a CPU or other digital device.

    - **CR0** - Has various control flags that modify the basic operation of the processor.
    - **CR1** - Reserved.
    - **CR2** - Contains a value called Page Fault Linear Address (PFLA).
    - **CR3** - Used when virtual addressing is enabled.
    - **CR4** - Used in protected mode to control operations.

- **Status/Flags Registers**

    - **CF** - Carry flag
    - **PF** - Parity flag
    - **AF** - Adjust flag
    - **ZF** - Zero flag
    - **SF** - Sign flag
    - **OF** - Overflow flag

    - **TF**    - Trap flag
    - **IF**    - Interrupt enable flag
    - **IOPL**  - I/O privilege level flag
    - **NT**    - Nested task flag
    - **RF**    - Resume flag
    - **VM**    - Virtual-8086 mode flag
    - **AC**    - Alignment check flag
    - **VIF**   - Virtual interrupt flag
    - **VIP**   - Virtual interrupt pending flag
    - **ID**    - Identification flag

<br />

## Instructions

- **Basic Instructions**

    - **LEA**       - Load effective address

    - **CALL**      - Call procedure

    - **MOV**       - Copy
    - **MOV DWORD** - Copy (double word)
    - **MOV QWORD** - Copy (quad word)

    - **PUSH**      - Push onto stack
    - **POP**       - Pop stack

- **Arithmetic Instructions**

    - **INC**   - Increment
    - **DEC**   - Decrement
    - **ADD**   - Add
    - **SUB**   - Subtract
    - **DIV**   - Divide (unsigned)
    - **IDIV**  - Divide (signed)
    - **MUL**   - Multiply (unsigned)
    - **IMUL**  - Multiply (signed)

