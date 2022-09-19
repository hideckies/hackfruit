---
title: x86 Assembly
desc: 
tags: [Assemble, Assembly, Binary, Disassemble, Disassembly, Engineering, IA-32, Intel, Register, Reverse, x86]
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

