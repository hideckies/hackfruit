---
title: PowerShell
desc: 
tags: [PowerShell, Windows]
alts: [Windows-Privilege-Escalation]
render_with_liquid: false
---

## 1. Start PowerShell

In Linux

```sh
pwsh
```

In Windows

```sh
powershell
```

<br />

## 2. Basic Commands

1. **OS Information**

    ```powershell
    $PSVersionInfo
    ```

2. **Change Directory**

    **'cd'** in Linux.

    ```powershell
    Set-Location -Path c:\Users\Administrator\Desktop
    ```

3. **List Files**

    **'ls'** in Linux.

    ```powershell
    Get-ChildIteme -File -Hidden
    Get-ChildItem -File -Hidden -ErrorAction SilentlyContinue
    Get-ChildItem -Directory -Hidden
    Get-ChildItem -Path .\Desktop
    Get-ChildItem -Recurse
    ```

4. **View the Content of Files**

    **'cat'** in Linux

    ```powershell
    Get-Content -Path example.txt
    # 'cat | wc -l' in Linux
    Get-Content -Path example.txt | Measure-Object -Word
    # 
    (Get-Content -Path example.txt)[318]
    ```

5. **Find Files**

    **'find'** in Linux

    ```powershell
    Select-String -Path 'c:\Users\Administrator\Desktop' -Pattern '*.txt'
    ```

6. **Set Content to a File**

    **'echo hello > example.txt'** in Linux

    ```powershell
    Set-Content -Path .\example.txt -Value hello
    ```

7. **Download Web Content**

    **'wget'** in Linux

    ```powershell
    Invoke-WebRequest -Uri http://10.0.0.1:8000/example.exe -OutFile .\example.exe
    ```

8. **Cryptography**

    **'md5sum'** in Linux

    ```powershell
    Get-FileHash -Algorithm MD5 example.txt
    ```

9. **Print Text Strings**

    **'strings'** in Linux

    ```powershell
    .\Strings.exe -accepteula example.exe
    ```

10. **Add New User**

    **'useradd'** in Linux

    ```powershell
    New-LocalUser -Name "username" -Description "My first account" -NoPassword

    # with password
    $Password = Read-Host -AsSecureString
    New-LocalUser -Name "username" -Password $Password -FullName "New User" -Description "My first account"
    ```

11. **Show the Manual of Command**

    **'man'** or **'--help'** in Linux

    ```powershell
    Get-Help Get-ChildItem
    Get-Help Invoke-WebRequest
    ```

12. **Create New File**

    **'touch'** in Linux

    ```powershell
    New-Item example.txt
    $null > example.txt
    ```

13. **Create New Folder**

    **'mkdir'** in Linux

    ```powershell
    mkdir example_folder
    ```

14. **Remove Files**

    **'rm'** in Linux

    ```powershell
    rm exxample.txt
    rm -r example_folder
    ```

15. **Reboot Computer**

    **'reboot'** in Linux

    ```powershell
    Restart-Computer
    ```

16. **View NTFS Files Streams**

    ```powershell
    Get-Item -Path file.exe -Stream *
    ```

<br />

## 3. About Active Directory

```sh
# Get the machine which participates the Active Directory
Get-ADComputer <PC-NAME> -properties dnshostname,serviceprincipalname
# Remove the current SPN attribute
Set-ADComputer <PC-NAME> -ServicePrincipalName @{}
# Set new DNS hostname to that of the DC
Set-ADComputer <PC-NAME> -DnsHostName VULNDC.vuln.local
```

<br />

## 4. Use PowerView

PowerView is a Powershell’s script to gain network situational awareness on Windows domain.

1. **Start PowerView**

    Assumed you already get in PowerShell.

    ```powershell
    . .\PowerView.ps1
    ```

2. **Enumeration**

    - **Domain Users**

        ```powershell
        Get-NetUser | select cn
        ```

    - **Domain Groups**

        ```powershell
        Get-NetGroup -GroupName *admin*
        ```

3. **Investigation**

    ```powershell
    # Get shared folders
    Invoke-ShareFinder

    # Get operating systems running
    Get-NetComputer -fulldata | select operatingsystem

    # Find files or directories
    Get-ChildItem -r -Filter "*.txt" -Name
    ```