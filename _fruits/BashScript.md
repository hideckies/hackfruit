---
title: Bash Script
desc: A text file contains shell commands.
tags: [Linux]
alts: [Bash]
website:
---

## Wordlist to MD5

### 1. Create `.sh` file.

```sh
#!/bin/bash

# Initialize the output file
> $2

while read w
do echo -n "$w" | md5sum | cut -d ' ' -f 1 >> $2
done < $1
```

### 2. Run

```sh
./wordlist_to_md5.sh wordlist.txt wordlist_md5.txt
```

<br />

## Run as Root privilege

```sh
#!/bin/bash -p (-p: privilege mode. It's used for SUID)

whoami
```