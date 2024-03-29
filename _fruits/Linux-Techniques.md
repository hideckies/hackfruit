---
title: Linux Techniques
desc: Useful techniques in Linux.
tags: [Awk, Base64, Bash, Linux, PrivEsc, Privilege, Wget]
alts: [Linux-Privilege-Escalation]
render_with_liquid: false
---

## System Control

```sh
# Check status the service (ex. ssh)
systemctl status ssh

# Start servide
systemctl start ssh

# Stop servide
systemctl stop ssh

# Start during system boot
systemctl enable ssh

# Not start during system boot
systemctl disable ssh
```

<br />

## Download Files Recursively from Web

```sh
# -r: recursive
# -np: no parent
# Don't forget "/" after the directory name
wget -r -np http://example.com/somedir/
```

<br />

## Text Formatt

1. **Use Awk**

    For example, display existing usernames in /etc/passwd.

    ```sh
    # -F -> Field separator (ex. ":")
    # $1 -> First text
    awk -F : '{ print $1 }' /etc/passwd
    ```

    Generating the specific length wordlist from the original one.

    ```sh
    # 6 length only 
    awk '{ if (length($0) == 6) print }' original-wordlist.txt

    # More than 5 length only
    awk '{ if (length($0) >= 5) print }' original-wordlist.txt
    ```

<br />

## File Transfer

1. **Use Base64**

    1. **Encode a File with Base64 in Local Machine**

        ```sh
        # -w 0: disabe line wrapping
        base64 exploit.sh -w 0
        ```

    2. **Decode Base64 of the File in Remote Machine**

        ```sh
        echo <base64-string-of-file> | base64 -d > exploit.sh
        ```

<br />

## Shell Script

1. **For Loop**

    loop.sh

    ```sh
    #!/bin/bash
    for i in {1..5}
    do
        echo "Hello $i"
    done
    ```

    loop-4digits.sh

    ```sh
    #!/bin/bash
    for i in {0000..9999}
    do
        echo $i
    done
    ```

2. **Read Text Line by Line**

    read-text.sh

    ```sh
    #!/bin/bash
    while read line
    do
        echo $line
    done < example.txt
    ```

3. **Retrieve Arguments**

    **Getopts** is useful.  
    Create "my_opt.sh".

    ```sh
    #!/bin/bash

    getopts c cmd
    echo $cmd
    ```

    Run. This output is the current username.

    ```sh
    ./my_opt.sh -cwhoami
    ```

    - **While Loop and Retrieving Arguments**

        ```sh
        Create “my_while_opt.sh”.

        ```sh
        while getopts ab: flag
        do
            case "${flag}" in
                a) command1=${OPTARG};;
                b) command2=${OPTARG};;
            esac
        done

        cmd1=$($command1)
        echo $cmd1
        cmd2=$($command2)
        echo $cmd2
        ```

        Run. This output is the current username and current time.

        ```sh
        ./my_while_opt.sh -awhoami -btime
        # kali
        # real  1111.11s ...
        ```

<br />

## Display Data

1. **Line Numbers**

    ```sh
    cat -n wordlist.txt
    ```

2. **Cut Out Text**

    ```sh
    # Print 'Hello'
    echo 'Hello World' | cut -d ' ' -f 1

    # Print 'my name is Adam'
    echo 'Hi, my name is Adam' | cut -d ',' -f 2
    ```

3. **Search Lines Contained the Specific Text**

    ```sh
    less -p SomeWord example.txt
    ```

4. **Count the Numbers of Files in the Directories**

    ```sh
    ls ./ | wc -l
    ```

5. **Display Specific Position in File**

    ```sh
    # Print second line from file
    sed -n 2p sample.txt

    # Display line numbers from 14 to 18
    sed -n 14,18p example.txt
    ```

<br />

## Symbolic Link

For example, "/usr/bin/python3 -> /tmp/python3".

1. **Link**

    ```sh
    ln -s /usr/bin/python3 /tmp/python3
    ```

2. **Unlink**

    ```sh
    unlink /tmp/python3
    ```

<br />

## Passwords

1. **Creat New Passwords**

    **SHA512** encrypted password.

    ```sh
    mkpasswd -m sha-512 password
    ```