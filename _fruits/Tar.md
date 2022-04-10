---
title: Tar
desc: Archives files and directories, or extracts them.
tags: [Linux, SMB, Windows]
alts: [7zip, Bzip2, Gzip, Zip]
website:
---

## Create archives

```sh
tar -cf archive.tar sample.txt
tar -cf archive.tar sample1.txt sample2.txt
```

<br />

## Extract

```sh
tar -xf archive.tar
```

<br />

## View the content

```sh
tar -tf archive.tar
```