---
title: Reverse Engineering
desc: Analyze and get the knowledge of executables.
tags: [ELF, Exe, Ghidra, GDB, Hex, Malware, Obj, Radare, Reverse Engineering, Rizin]
alts: [Android-APK-Pentesting, Assembly, Malware-Analysis, Steganography]
render_with_liquid: false
---

## 1. Investigation

1. **Basic Information**

    1. **Common**

        ```sh
        file ./somefile
        strings ./somefile

        # -B: signature
        binwalk -B ./somefile

        hd ./somefile
        # -n: only length bytes of input (ex. display the first 28 bytes)
        # -s: skip offset bytes from the beginning (ex. no display the first 568 bytes)
        hd -n 28 -s 568 example.so
        # only display the first 64 bytes
        hd -n 64 example.bin

        xxd ./somefile
        xxd ./somefile | head
        ```

    2. **Object Files**

        - **ELF**

            ```sh
            # Get information
            readelf -a ./somefile

            # Change MSB <=> LSB by editing binary number.
            hexedit ./somefile
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

## 2. Analysis

1. **Use Softwares**

    - **[REMnux](https://remnux.org/){:target="_blank"}**

        A Linux toolkit for reverse-engineering and analyzing malicious software.

    - **Ghidra**

        Open the Ghidra GUI.

        ```sh
        ghidra
        ```

2. **Use Programs**

    - **[GDB](https://www.sourceware.org/gdb/){:target="_blank"}**

        GDB is a GNU debugger.  
        It's recommended to setup **[Pwndbg](https://github.com/pwndbg/pwndbg){:target="_blank"}** or **[GEF](https://github.com/hugsy/gef){:target="_blank"}** for enhanced features before using it.

        1. **Change Permission of File**

            First off, change permission of the target file to be executable.

            ```sh
            chmod 700 example.obj
            ```

        2. **Start GDB Debugger**

            ```sh
            gdb
            ```

        3. **Analysis in Debugger**

            ```sh
            # Find the protections
            checksec

            # Create pattern
            # e.g. 50 bytes
            pattern create 50

            # Examine memory
            x/xg $rsp
            # e.g. output -> 0x7fffffffdf48:	0x6161616161616166

            # Search a sequenct of unique substrings of length N
            pattern search 0x6161616161616166
            # or
            pattern offset 0x6161616161616166

            # Set breakpoint at specific point
            break main

            # Start debugged program
            run
            # Buffer overflow
            run <<< `python3 -c 'print("A"*32+"B"*8+"C"*8)'`
            (python3 -c 'print("A"*32+"BBBBBBBB"+"\x86\x06\x40\x00\x00\x00\x00\x00")'; cat) | ./Dear

            # List of integer registers and their contents
            info registers
            ```

        4. **Quit Debugger**

            ```sh
            quit
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

    - **Radare2**

        **[Radare2](https://github.com/radareorg/radare2){:target="_blank"}** is a reverse engineering framework and command-line toolset.

        ```sh
        # Start
        r2 ./somefile
        r2 -d ./somefile

        >aaa
        >pdf @main

        # List of functions
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
