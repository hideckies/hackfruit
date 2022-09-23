---
title: x86 Assembly
desc: 
tags: [32bit, Assemble, Assembly, Binary, Disassemble, Disassembly, Engineering, GDB, i386, IA-32, Intel, Register, Reverse, x86]
alts: [Reverse-Engineering]
render_with_liquid: false
---

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

    - **MOV**       - Move

        ```sh
        # AT&T syntax
        movl %esp, %ebp [move esp into ebp]

        # Intel syntax
        mov esp, ebp [move ebp into esp]
        ```

    - **MOV DWORD** - Copy (double word)
    - **MOV QWORD** - Copy (quad word)

    - **NOP**       - No operation

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

<br />

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

Then run “gcc” to compile it to the executable file.

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

If you want to convert the C program to assembly, run this command.

```sh
# -S: AT&T syntax
# -O0: No optimization
gcc -m32 -S -O0 sample.c
```

The above command generates "sample.s".  
Then compile it to binary object.

Finally you need to use a linker to create the actual binary executable file.

```sh
gcc -m32 sample.o -o sample
```

<br />

## Examine Executable File

```sh
objdump -d <executable-file>
objdump -d sample
```

<br />

## Create Assembly Program

Every assembly language program is divided into three sections.

- **Data section** - used for declaring initialized data or constants.
- **BSS section** - used for declaring uninitialized data or variables.
- **Text section** - used for the actual code sections as it begins with a global __start which tells  the kernel where execution begins.

1. **AT&T**

    First, create "sample.s"

    ```
    .section .data
        constant:
            .int 10

    .section .bss
        .lcomm buffer 1

    .section .text
        .globl _start

    _start:
        nop                                       # used for debugging purposes

    mov_data_to_registers:
        movl $100, %eax                           # mov 100 into the EAX register
        movl $0x50, buffer                        # mov 0x50 into buffer memory location

    mov_data_between_memory_and_registers:
        movl constant, %ecx

    exit:
        movl $1, %eax                             # sys_exit system call
        movl $0, %ebx                             # exit code 0 successful execution
        int $0x80                                 # call sys_exit
    ```

    To compile it, run the following two commands.

    ```sh
    # assembler
    as -32 -o sample.o sample.s
    # linker
    ld -m elf_i386 -o sample sample.o
    ```

2. **Intel**

    Create "sample.asm".

    ```
    section .data

    section .bss
        buffer resb 1

    section .text
        global _start

    _start:
        nop                                    ;used for debugging purposes

    mov_immediate_data_to_register:
        mov eax, 100                           ;mov 100 into EAX register
        mov byte[buffer], 0x50                 ;mov 0x50 into buffer memory location

    exit:
        mov eax, 1                             ;sys_exit system call
        mov ebx, 0                             ;exit code 0 successful execution
        int 0x80                               ;call sys_exit
    ```

    To compile it, run the following two commands.

    ```sh
    # Netwide assembler
    nasm -f elf32 sample.asm
    # linker
    ld -m elf_i386 -o sample sample.o
    ```