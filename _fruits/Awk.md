---
title: Awk
desc: Scan each input file for lines that match any of a set of patterns.
tags: [Linux, Password, Wordlist]
alts: []
website:
---

## Basic Examples

```sh
# -F -> Field separator (ex. ":")
# $1 -> First tex 
awk -F : '{ print $1 }' /etc/passwd
```

<br />

## Generate the Specific Length Wordlist From Original One

```sh
# 6 length only 
awk '{ if (length($0) == 6) print }' /usr/share/wordlists/rockyou.txt

# More than 5 length only
awk '{ if (length($0) >= 5) print }' /usr/share/wordlists/rockyou.txt
```
