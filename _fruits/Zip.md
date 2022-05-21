---
title: Zip
desc: Manages .zip files.
tags: [AndroidAPK, Linux, Malware]
alts: [7zip, Bzip2, Gzip, Zip]
website:
render_with_liquid: false
---

## Compress

```sh
# Compress to 'sample' zip file.
zip sample sample1.txt sample2.txt
```

<br />

## Extract

```sh
unzip sample

# Decode Android APK. You can get "classes.dex" too.
unzip example.apk -d ./Example
```