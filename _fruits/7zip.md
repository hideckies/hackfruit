---
title: 7zip
desc: Manage .zip files.
tags: [Linux, Malware]
alts: [Bzip2, Gzip, Tar, Zip]
website:
render_with_liquid: false
---

## Archive

```sh
7z a sample.zip sample.txt

# With password
7z a sample.zip sample.txt  -p password
```

<br />

## Extract

```sh
7z e sample.zip

# With password
7z e sample.zip -p password
```
