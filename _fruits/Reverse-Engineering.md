---
title: Reverse Engineering
desc: Analyze and get the knowledge of executables.
tags: [Assemble, Assembly, Binary, ELF, Exe, Ghidra, GDB, Hex, Malware, Obj, Radare, Reverse Engineering, Rizin]
alts: [Android-APK-Pentesting, Buffer-Overflow-Attack, Malware-Analysis, x86-Assembly]
render_with_liquid: false
---

## Investigation

1. **Basic Information**

    Assume that the target file named "sample".

    1. **Common**

        ```sh
        file ./sample
        strings ./sample

        # Security properties
        checksec --file=./sample

        # -B: signature
        binwalk -B ./sample

        hd ./somefile
        # -n: only length bytes of input (ex. display the first 28 bytes)
        # -s: skip offset bytes from the beginning (ex. no display the first 568 bytes)
        hd -n 28 -s 568 example.so
        # only display the first 64 bytes
        hd -n 64 example.bin

        xxd ./sample
        xxd ./sample | head
        ```

    2. **Object Files**

        - **ELF**

            ```sh
            # Get information
            readelf -a ./sample

            # Change MSB <=> LSB by editing binary number.
            hexedit ./sample
            (MSB) 7F 45 4C 46  02 02 01 ... <=> (LSB) 7F 45 4C 46  02 01 01 ...
            ```

        - **Objdump**

            ```sh
            # -d: disassemble
            objdump -d example.obj

            # -M: option
            objdump -M intel -d example.obj
            ```

    3. **OLE Files**

        **OLE** is a mechanism that allows users to create and edit documents containing items or "objects" created by multiple applications.

        1. **Dump the Information of the OLE Files**

            - **Use Oledump**

                ```sh
                oledump.py example.doc

                # -s: stream number to analyze
                # -d: dump
                oledump.py -s 8 -d example.doc
                oledump.py -s 9 -d example.doc
                ```

                Then decrypt the output using online tools like CyberChef.

            - **Use Olevba**

                Download the **[Oletools](https://github.com/decalage2/oletools){:target="_blank"}**.

                ```sh
                olevba example.docm
                ```

                Copy the above Visual Basic code.  
                And access to **[OneCompiler](https://onecompiler.com/){:target="_blank"}**.  
                Select the programming language "Visual Basic".  
                Paste the copied code to the editor.  
                Click Run.

<br />

## Code Examination

```sh
ghidra ./sample
```

<br />

## Run Program

```sh
chmod 700 sample
./sample
```

If the program allow you to input some text, you can try first.

1. **Format String Attack**

    **"printf"**, a function in the C language, is vulnerable to display the internal values from inputs.

    ```sh
    # the value of the pointer
    > %p
    # the value of the 10th pointer
    > %10$p
    ```

<br />

## Dynamic Analysis

- **GDB**

    A GNU debugger.  
    It's recommended to setup **[Pwndbg](https://github.com/pwndbg/pwndbg){:target="_blank"}** or **[GEF](https://github.com/hugsy/gef){:target="_blank"}** for enhanced features if you want to use it more efficiency.

    First off, change permission of the target file to be executable.

    ```sh
    chmod 700 ./sample
    ```

    After that, start debugger.

    ```sh
    gdb ./sample
    ```

    - **Information**

        ```sh
        # List all functions
        gdb> info function

        # Information of registers
        gdb> info registers
        ```

    - **Breakpoint**

        ```sh
        # Set a breakpoint at function name
        gdb> break <function-name>
        gdb> break main
        gdb> break vuln

        # Set a breakpoint at address (if you want to know where the desired address, use "disassemble <function-name>" command.)
        gdb> break *0x0804901e

        # Delete all breakpoints
        gdb> delete
        # Delete given breakpoint
        gdb> delete <breakpoint-number>
        gdb> delete 1
        gdb> delete 2
        # Delete multiple breakpoints
        gdb> delete 1 2

        # List breakpoints
        gdb> info breakpoints
        ```

    - **Run**

        Run to the next breakpoint or end.

        ```sh
        gdb> run

        # Input data
        gdb> run < pattern.txt
        ```

    - **Step**

        ```sh
        # Step program until it reaches a different source line (e.g. the next function)
        gdb> step

        # Step into the next one instruction.
        gdb> stepi

        # Execute until next breakpoint
        gdb> continue
        ```

    - **Disassemble**

        ```sh
        # Disassembly the current function or given location
        gdb> disassemble
        gdb> disassemble main
        ```

    - **Print**

        ```sh
        # Print the value of functions
        gdb> print <function-name>
        gdb> print main

        # Print the value of memory (variable) with casting
        gdb> print (int)<variable-name>
        gdb> print {int}(<address-of-variable>)
        gdb> print {int}(0x01234567)

        # print the non-register data
        # /x: hex
        gdb> print /x buffer

        # Print the value of registers
        gdb> print $eip
        gdb> print $eax
        gdb> print $ebx

        # Print array of variable
        gdb> print (int[8]) <variable-name>
        gdb> print (int[14]) *0x804a010

        # Print the string of variable
        gdb> print (char[12]) <variable-name>
        gdb> print (char[20]) *0x804a000 
        ```

    - **Examine Memory (Address)**

        ```sh
        # Value
        gdb> x/1 &<variable-name>
        gdb> x/1 &constant

        gdb> x/1 <address>
        gdb> x/1 0x804a039

        # print 6 values of the variable
        gdb> x/6 &constants

        # Decimal
        gdb> x/1d $eip
        gdb> x/6d &<variable-name>
        # Byte
        gdb> x/1xb $eip
        # Half-word (2 bytes)
        gdb> x/1xh $eip
        # Word (4 bytes)
        gdb> x/1xw $eip
        # Giant-word (8 bytes)
        gdb> x/1xg $eip
        ```

    - **Set Address to Registers**

        You can insert the unexpected function to the next instruction by setting the EIP to the address of the function.

        ```sh
        # Set target address to EIP while running the program so you can hijack it.
        gdb> set $eip = <address>
        gdb> set $eip = 0x565561a9
        ```

    - **Set Value to Memory (Variable)**

        When you set the value into variables, note that you need to cast the variable has unknown type.

        ```sh
        # examine the current value
        gdb> print (int)<variable-name>

        # check the address of the variable
        gdb> info address <variale-name>

        # set new value
        gdb> set {int}(<address-of-variable>) = 666

        # confirm that the value of the variable changed
        gdb> print (int)<variable-name>
        # or
        gdb> print {int}(<address-of-variable>)
        ```

    - **Jump**

        Jump to destination address.

        ```sh
        gdb> jump *0x0040096a
        ```

    - **Quit**

        ```sh
        gdb> quit
        ```

- **Rizin**

    **[Rizin](https://github.com/rizinorg/rizin){:target="_blank"}** is a fork of **Radare2**.

    ```sh
    # Start
    rizin example.exe

    # --------------------------------------

    # Seek
    > s
    # Help
    > s?

    # Print
    > p
    # Print in hexadecimal
    > px
    # Print in disassembling
    > pd
    # Help
    > p?

    # Write string
    > w hello world
    # Write hexpairs
    > wx 90 90 90 90
    # Write assembly opcodes
    > wa jmp 0x8048140
    # Write contents of file
    > wf inline.bin
    # Help
    > w?

    # Help
    > ?
    ```