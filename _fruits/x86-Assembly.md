---
title: x86 Assembly
desc: 
tags: [32, Assemble, Assembly, Binary, Bit, Disassemble, Disassembly, Engineering, GDB, i386, IA-32, Intel, Register, Reverse, x86]
alts: [Reverse-Engineering]
render_with_liquid: false
---

## Registers

- **General Purpose Registers**

    They are used for temporarily storing data.

    - **EAX/RAX** - Accumulator register.
    - **EBX/RBX** - Base register.
    - **ECX/RCX** - Counter register.
    - **EDX/RDX** - A general purpose register.
    
    - **ESI/RSI** - Source index register.
    - **EDI/RDI** - Destination index register.
    - **EBP/RBP** - Base pointer register.
    - **ESP/RSP** - Stack pointer register which is also called as the frame pointer.

    - **EIP/RIP** - The most important register in reverse engineering. It keeps track of the next instruction code to execute. EIP points to the next instruction to execute.

- **Segment Registers**

    They are used for referencing memory locations.

    - **CS** - Code segment register. It contains all the instructions to be executed.
    - **DS** - Data segment register. It contains data, constants and work areas.
    - **ES** - Extra segment register.
    - **FS** - Extra segment register.
    - **GS** - Extra segment register.
    - **SS** - Stack segment register. It contains data and return addresses of procedures or subroutines.
    
- **Control Registers**

    A processor register which changes or controls the general behavior of a CPU or other digital device.

    - **CR0** - Has various control flags that modify the basic operation of the processor.
    - **CR1** - Reserved.
    - **CR2** - Contains a value called Page Fault Linear Address (PFLA).
    - **CR3** - Used when virtual addressing is enabled.
    - **CR4** - Used in protected mode to control operations.

- **Status/Flags Registers**

    - **AF**    - Adjust flag. It is also called as the Auxiliary flag and the Auxiliary Carry flag. The AF is set when a 1-bytes arithmetic operation causes a carry from bit 3 into bit 4.
    - **AC**    - Alignment check flag
    - **CF**    - Carry flag. It contains the carry of 0 and 1 from a high-order bit (leftmost) after an arithmetic operation. It also stores the contents of last bit of a shift  or rotate operation.
    - **DF**    - Direction flag. When the DF is 0, the string operation takes left-to-right direction and when the DF is 1, the string operation takes right-to-left direction.
    - **ID**    - Identification flag
    - **IF**    - Interrupt enable flag. When the IF is 0, it disables the external interrupt and when the IF is 1, it enables the interrupt.
    - **IOPL**  - I/O privilege level flag
    - **NT**    - Nested task flag
    - **OF**    - Overflow flag. It indicates the overflow of a high-order bit (leftmost bit) of data after a signed arithmetic operation.
    - **PF**    - Parity flag. It indicates the total number of 1-bits in the result obtained from an arithmetic operation. An even number of 1-bits clears the parity flag to 0 and an odd number of 1-bits clears the parity flag to 1.
    - **RF**    - Resume flag
    - **SF**    - Sign flag. It shows the sign of the result of an arithmetic operation. A positive result clears the value of  SF to 0 and negative result sets it to 1.
    - **TF**    - Trap flag. It allows setting the operation of  the processor in the single-step mode.
    - **VM**    - Virtual-8086 mode flag
    - **VIF**   - Virtual interrupt flag
    - **VIP**   - Virtual interrupt pending flag
    - **ZF**    - Zero flag. It indicates the result of an arithmetic or comparison operation. A nonzero result clears the zero flag to 0, and a zero result sets it to 1.

<br />

## Instructions

- **Basic Instructions**

    - **LEA**       - Load effective address

        ```sh
        # AT&T syntax - store [esp+0x18] in eax
        lea 0x18(%esp), %eax

        # Intel syntax - store [esp+0x18] in eax
        lea eax, [esp+0x18]
        ```

    - **CALL**      - Call procedure

    - **MOV**       - Move

        ```sh
        # AT&T syntax - move esp into ebp
        movl %esp, %ebp

        # Intel syntax - move ebp into esp
        mov esp, ebp
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

- **Conditional Instructions**

    - **CMOVA**     - Move if above (CF=0 and ZF=0)
    - **CMOVAE**    - Move if above or equal (CF=0)
    - **CMOVB**     - Move if below (CF=1)
    - **CMOVBE**    - Move if below or equal (CF=1)
    - **CMOVC**     - Move if carry (CF=1)
    - **CMOVE**     - Move if equal (ZF=1)
    - **CMOVG**     - Move if greater (ZF=0 and SF=OF)
    - **CMOVGE**    - Move if greater or equal (SF=OF)
    - **CMOVL**     - Move if less (SF≠OF)
    - **CMOVLE**    - Move if less or equal (ZF=1 or SF≠OF)
    - **CMOVO**     - Move if overflow (OF=1)
    - **CMOVP**     - Move if parity (PF=1)
    - **CMOVPE**    - Move if parity even (PF=1)
    - **CMOVPO**    - Move if parity odd (PF=0)
    - **CMOVS**     - Move if sign (SF=1)
    - **CMOVZ**     - Move if zero (ZF=0)

    - **CMOVNA**    - Move if not above (CF=1 or ZF=1)
    - **CMOVNAE**   - Move if not above or equal (CF=1)
    - **CMOVNB**    - Move if not below (CF=0)
    - **CMOVNBE**   - Move if not below or equal (CF=0 and ZF=0)
    - **CMOVNC**    - Move if not carry (CF=0)
    - **CMOVNE**    - Move if not equal (ZF=0)
    - **CMOVNG**    - Move if not greater (ZF=1 or SF≠OF)
    - **CMOVNGE**   - Move if not greater or equal (SF≠OF)
    - **CMOVNL**    - Move if not less (SF=OF)
    - **CMOVNLE**   - Move if not less or equal (ZF=0 and SF=OF)

    - **JMP**       - Jump
    - **JA**        - Jump if above (CF = 0 and ZF = 0)
    - **JAE**       - Jump if above or equal
    - **JB**        - Jump if below
    - **JBE**       - Jump if below or equal
    - **JC**        - Jump if carry
    - **JE**        - Jump if equal
    - **JG**        - Jump if greater
    - **JGE**       - Jump if greater or equal
    - **JL**        - Jump if less
    - **JLE**       - Jump if less or equal
    - **JO**        - Jump if overflow
    - **JP**        - Jump if parity
    - **JPE**       - Jump if parity even
    - **JPO**       - Jump if parity odd
    - **JS**        - Jump if sign
    - **JZ**        - Jump if zero

    - **JNC**       - Jump if not carry
    - **JNE**       - Jump if not equal
    - **JNO**       - Jump if not overflow
    - **JNP**       - Jump if not parity
    - **JNS**       - Jump if not sign

    - **TEST**      - Set ZF (Zero Flag) to 1 if a bitwise AND is 0.

        ```
        test %eax,%eax ; set ZF to 1 if eax == 0
        je 0xf7eb0f70  ; jump if ZF == 1
        ```

- **Other Instructions**

    - **UD2**       - Undefined instruction (invalid opcode). It is same as **NOP** instruction.

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

## Information of Executable File

```sh
objdump -d <executable-file>
objdump -d sample

# -M: specific disassemble option
objdump -d -M att sample
objdump -d -M intel sample
```

<br />

## Create Assembly Program

Every assembly language program is divided into three sections.

- **Data section** - used for declaring initialized data or constants. The data does not change at runtime.
- **BSS section** - the block starting symbol. used for declaring uninitialized data or variables.
- **Text section** - used for the actual code sections as it begins with a global _start which tells the kernel where execution begins.

- **Intel**

    Create "hello_world.asm".

    ```
    section .data
        msg db 'Hello, World!', 0xa ;string to be printed. db means the Define Byte.
        len equ $ - msg  ;length of the string. equ means 'equate'. '$' means the current address.

    section .text
        global _start  ;linker (ld)

    _start:
        mov edx,len  ;message length
        mov ecx,msg  ;message to write
        mov ebx,1    ;file descriptor (stdout)
        mov eax,4    ;system call number (sys_write)
        int 0x80     ;call kernel

        mov eax,1    ;system call number (sys_exit)
        int 0x80     ;call kernel
    ```

    To assemble the program, run the following command. Then the object file will be created.

    ```sh

    # -f: format (ELF32)
    nasm -f elf32 hello_world.asm
    ```

    To link the object file,

    ```sh
    ld -m elf_i386 -o hello_world hello_world.o
    ```

- **AT&T**

    First, create "sample.s"

    ```
    .section .data
        result:
            .asciz "The smallest value is "
        lr:
            .ascii ".\n"
        constant:
            .int 10
        constants:
            .int  5, 8, 17, 44, 50, 52, 60, 65, 70, 77, 80      # array

    .section .bss
        .comm answer, 1
        .lcomm buffer 1

    .section .text
        .globl _start

    _start:
        nop                                         # used for debugging purposes

    mov_data_to_registers:
        movl $100, %eax                             # mov 100 into the EAX register
        movl $0x50, buffer                          # mov 0x50 into buffer memory location

    mov_data_between_memory_and_registers:
        movl constant, %ecx

    indirect_addressing:
        movl constants, %eax                        # mov constants value into eax
        movl constants, %edi                        # mov memory address into edi
        movl $25, 4(%edi)                           # mov immediate val 4b after edi ptr
        movl $1, %edi                               # load 2nd index constants label
        movl constants(, %edi, 4), %ebx

    find_smallest_value:
        movl constants(, %edi, 4), %eax
        cmp %ebx, %eax
        cmovb %eax, %ebx
        inc %edi
        cmp $8, %edi
        jne find_smallest_value
        addl $0x30, %ebx
        movl %ebx, answer

        movl $4, %eax
        movl $1, %ebx
        movl $result, %ecx
        movl $23, %edx
        int $0x80

        movl $4, %eax
        movl $1, %ebx
        movl $answer, %ecx
        movl $1, %edx
        int $0x80                                   # call sys_write

        movl $4, %eax
        movl $1, %ebx
        movl $lr, %ecx
        movl $2, %edx
        int $0x80                                   # call sys_write

    exit:
        movl $1, %eax                               # sys_exit system call
        movl $0, %ebx                               # exit code 0 successful execution
        int $0x80                                   # call sys_exit
    ```

    To compile it, run the following two commands.

    ```sh
    # assembler
    as -32 -o sample.o sample.s
    # linker
    ld -m elf_i386 -o sample sample.o
    ```

