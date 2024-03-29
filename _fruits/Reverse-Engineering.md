---
title: Reverse Engineering
desc: Analyze and get the knowledge of executables.
tags: [Assemble, Assembly, Binary, ELF, Engineering, Exe, Ghidra, GDB, Hex, Malware, Obj, Radare, Reverse, Rizin]
alts: [Android-APK-Pentesting, Buffer-Overflow-Attack, Malware-Analysis, x86-Assembly]
render_with_liquid: false
---

## Investigation

```sh
file ./sample
strings ./sample

# Security properties
checksec --file=./sample

# -B: signature
binwalk -B ./sample

# Dump hex
hexdump ./sample
# -C: canonical hex+ASCII display
# -n: length
hexdump -C -n 64 ./sample

hd ./somefile
# -n: only length bytes of input (ex. display the first 28 bytes)
# -s: skip offset bytes from the beginning (ex. no display the first 568 bytes)
hd -n 28 -s 568 example.so
# only display the first 64 bytes
hd -n 64 example.bin

xxd ./sample
xxd ./sample | head
```

- **Object Files**

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

- **OLE Files**

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

            Download the **[Oletools](https://github.com/decalage2/oletools){:target="_blank"}{:rel="noopener"}**.

            ```sh
            olevba example.docm
            ```

            Copy the above Visual Basic code.  
            And access to **[OneCompiler](https://onecompiler.com/){:target="_blank"}{:rel="noopener"}**.  
            Select the programming language "Visual Basic".  
            Paste the copied code to the editor.  
            Click Run.

<br />

## Debuffer, Decompiler Softwares

- **Ghidra**

    ```sh
    ghidra ./sample
    ```

    - If you find **“??”** instructions in the analyzer of Ghidra, right-click on it and select **“Decompile”**.
    - If you find **“UD2 (Undefined Instruction)”** instruction in the analyzer of Ghidra, replace them with **“NOP”** by right-clicking and selecting **“patch instruction”**.

- **IDA**

- **[ILSpy](https://github.com/icsharpcode/ILSpy){:target="_blank"}{:rel="noopener"}**

    It is used for decompiling **.NET** files.  
    **[AvaloniaILSpy](https://github.com/icsharpcode/AvaloniaILSpy){:target="_blank"}{:rel="noopener"}** is also available for Linux.

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

## Dynamic Analysis with GDB

GDB is a GNU debugger which is used for reverse engineering.  

1. **Start the debugger**

    Before starting, you need to change the permission for the executable so that the program can be executed.

    ```sh
    chmod +x ./executable
    ```

    Now statt gdb.

    ```sh
    gdb ./executable
    ```

2. **Investigation**

    Find the interesting function and get the address.

    ```sh
    gdb> info function
    ```

3. **Set breakpoints**

    When you find the interesting function, such as main, strcmp, etc., set the breakpoint at the address.

    ```sh
    gdb> break *<address-of-the-function>
    # e.g.
    gdb> break *0x0000000000400580
    ```

    By the way, you can delete them if you want.

    ```sh
    gdb> info breakpoints

    # Delete all breakpoints
    gdb> delete

    # Delete the specific breakpoint
    gdb> delete <the-number-of-the-breakpoint>
    # e.g.
    gdb> delete 1
    gdb> delete 2
    ```

4. **Run the program**

    Since you set the breakpoint, the program will stop at the breakpoint.

    ```sh
    gdb> run
    ```

    To observe the information of the current position in the function, run the following command.

    ```sh
    gdb> disassemble

    # for the specific function
    gdb> disassemble <function>
    ``` 

    To proceed step by step.

    ```sh
    gdb> stepi

    # to proceed until the next function
    gdb> step
    ```

    To proceed until the next function.

    ```sh
    gdb> continue
    ```

5. **Examin values of registers**

    First off, check the address of registers.

    ```sh
    gdb> info registers
    ```

    Then examine values of registers.  

    - **String**

        To get the value as string,

        ```sh
        gdb> x/s <address-of-the-register>
        # e.g.
        gdb> x/s 0x7fffffffdeb0
        # or you can specify register names directly
        gdb> x/s $rax
        gdb> x/s $rbx
        gdb> x/s $rcx
        gdb> x/s $rdx
        ```

    - **Decimal**

        To get the value as decimal,

        ```sh
        gdb> x/d <address-of-the-register>
        # e.g.
        gdb> x/d 0x7fffffffdeb0
        # or you can specify register names directly
        gdb> x/d $rax
        gdb> x/d $rbx
        gdb> x/d $rcx
        gdb> x/d $rdx
        ```
    
6. **Quit the debugger**

    ```sh
    gdb> quit
    ```

- **Techniques**

    - **Set addresses to pointers**

        ```sh
        gdb> set $eip = <address>
        # e.g.
        gdb> set $eip = 0x565561a9
        ```

    - **Set values to registers**

        Coming soon.

    - **Jump to the destination address**

        ```sh
        gdb> jump *0x0040096a
        ```
