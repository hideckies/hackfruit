---
title: ShellBags
desc: A set of registry keys that store details about a viewed folder, such as its size, position, and icon.
tags: [Windows]
alts: []
website:
render_with_liquid: false
---

## File Location

```sh
# If you cannot found AppData folder in Explorer, click "View" tab and check "Hidden Items".
c:\Users\<username>\AppData\Local\Microsoft\Windows\UsrClass.dat
```

<br />

## Access ShellBags

```sh
1. Search "regedit" on search bar and open "Registry Editor".
2. Go to "Computer\HKEY_CLASSES_ROOT\LocalSettings\Software\Microsoft\Windows\Shell\Bags".
```

<br />

## ShellBags Explorer

Extract the ShellBags information.

```sh
1. Open "ShellBags Explorer".
2. Select "File" -> "Load offline hive".
3. Navigate to the UsrClass.dat and open the file.
4. Find suspicious folder and file.
```