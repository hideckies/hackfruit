---
title: Archived Files
desc: Archive/extract files and display the information of archived files.
tags: [Linux, Tar, Zip]
alts: []
render_with_liquid: false
---

## 1. Archive Files

```sh
# 7zip
7z a sample.zip sample.txt
# With password
7z a sample.zip sample.txt  -p password

# Bzip2
bzip2 sample.txt

# Gzip
gzip sample.txt

# Tar
tar -cf archive.tar sample.txt
tar -cf archive.tar sample1.txt sample2.txt

# Zip
zip sample sample1.txt sample2.txt
```

<br />

## 2. Extract Files

1. **Basic Extracting**

    ```sh
    # 7zip
    7z e sample.zip
    # With password
    7z e sample.zip -p password

    # Bzip2
    bzip2 -d sample.txt.bz2
    bunzip2 sample.txt.bz2

    # Gzip
    gzip -d sample.txt.gz
    gunzip sample.txt.gz

    # Tar
    tar -xf archive.tar
    tar -xf archive.tar.gz

    # Zip
    unzip sample.zip
    ```

2. **Crack Passwords**

    - **ZIP**

        First of all, you need to format the file to make the John to recognize it.

        ```sh
        zip2john example.zip > hash.txt
        ```

        Crack the hash.

        ```sh
        john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
        ```

<br />

## 3. Display the Contents without Extracting

```sh
# Tar
tar -tf archive.tar
```