---
title: Gzip
desc: Manages .gz files.
tags: [Linux, Malware]
alts: [7zip, Bzip2, Tar, Zip]
website:
render_with_liquid: false
---

## Compress

```sh
gzip sample.txt
```

## Decompress

```sh
# Option1. gzip
gzip -d sample.txt.gz

# Option2. gunzip
gunzip sample.txt.gz
```