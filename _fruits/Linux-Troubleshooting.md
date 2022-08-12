---
title: Linux Troubleshooting
desc: 
tags: [Dmesg, Journalctl, Linux, Troubleshooting]
alts: []
render_with_liquid: false
---

## 1. Check Error Logs

1. **Print the Message Buffer of Kernel**

    ```sh
    dmesg
    dmesg | less
    dmesg | grep bug

    dmesg -l err
    ```

2. **Show the Record of Journal Logs**

    ```sh
    # Show all logs
    journalctl

    # Show current boot
    journalctl -b

    # Show kernel message from boot
    journalctl -k

    # Show recenct logs (x: details)
    journalctl -e
    journalctl -ex

    # Shog logs from specified unit
    journalctl -u httpd
    journalctl -u sshd
    ```