---
title: Bzip2
desc: Manages .bz2 files.
tags: [Linux, Malware]
alts: [7zip, Gzip, Tar, Zip]
website:
render_with_liquid: false
---

## Compress

```sh
bzip2 sample.txt
```

<br />

## Decompress

```sh
# Option 1. bzip2
bzip2 -d sample.txt.bz2

# Option 2. bunzip2
bunzip2 sample.txt.bz2
```
