---
title: 7zip
desc: Manages .zip files.
tags: [Linux, Malware]
alts: [Bzip2, Gzip, Tar, Zip]
website:
render_with_liquid: false
---

## Archive

```sh
# Archive
7z a sample.zip sample.txt

# Archive with password (ex. 'mypass')
7z a sample.zip -pmypass sample.txt 
```

<br />

## Extract

```sh
# Extract
7z e sample.zip

# Extrace with password (ex. 'mypass')
7z e sample.zip -pmypass
```
