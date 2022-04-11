---
title: PowerShell
desc: CUI from Microsoft.
tags: [ActiveDirectory, PostExploitation, Windows]
alts: [PowerView]
website:
---

```powershell
# Start and bypass the PowerShell execution policy (enable to run scripts)
C:\Users\Administrator> powershell -ep bypass

# Show hidden files and folders 
PS C:\Users\Administrator> dir -Force

# Display the content of the file
PS C:\Users\Administrator> Get-Content sample.txt

# Bloodhound data collection
PS C:\Users\Administrator> Invoke-BloodHound -CollectionMethod All -Domain sample.domain -ZipFileName sample.zip
```