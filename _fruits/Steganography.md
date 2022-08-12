---
title: Steganography
desc: 
tags: [Binwalk, Exiftool, Jpeg, JPG, Npiet, OSINT, PDF, PNG, QR, Reverse Engineering, Steganography, Steghide, Zsteg]
alts: []
render_with_liquid: false
---

## 1. Basic Analysis

1. **Check Basic Information**

    ```sh
    open example.jpg
    file example.jpg
    strings example.jpg
    ```

2. **Extract the Data inside the Image File**

    ```sh
    # -e: extract data inside image
    binwalk -e example.jpg

    # PPM
    outguess-extract example.ppm out.ppm
    ```

3. **Read Meta Information**

    ```sh
    exiftool example.jpg
    ```

    If you get the GPS Latitude/Longitude, you can get the location by searching on Google Map
    e.g. GPS Latitude: 54 deg 17' 41.27" N, GPS Longitude: 2 deg 15' 1.33" W
    Input "54 17' 41.27" N 2 15' 1.33" W" in the search form on Google Map.

4. **Get the Hidden Data**

    ```sh
    # JPG only
    steghide info sample.jpg
    steghide extract -sf sample.jpg

    # PNG & BMP only
    zsteg -a sample.png

    # PDF only
    pdfinfo example.pdf

    # QR code scan
    zbarimg QR.png
    ```

    - **Crack Passphrases**

        Use **[Stegseek](https://github.com/RickdeJager/stegseek){:target="_blank"}**.

        ```sh
        # Crack using wordlists
        stegseek --crack sample.jpg /usr/share/wordlists/rockyou.txt

        # Crack by attempting all embedding patterns
        stegseek --seed sample.jpg
        ```

5. **GUI Analysis**

    **[stegsolve](https://github.com/zardus/ctf-tools/blob/master/stegsolve/install){:target="_blank"}** is an image analysis tool on GUI.

    ```
    java -jar stegsolve.jar
    ```

<br />

## 2. Repair Image Headers

1. **PNG**

    - **1. Check the Header**
    
        ```sh
        xxd example.png | head

        00000000: 2333 445f 0d0a 1a0a 0000 000d 4948 4452  #3D_........IHDR
        00000010: 0000 0320 0000 0320 0806 0000 00db 7006  ... ... ......p.
        00000020: 6800 0000 0173 5247 4200 aece 1ce9 0000  h....sRGB.......
        ...
        ```

    - **2. Fix the Header**

        If the top of the header does not show ".PNG", you can fix it.  
        To do so, add '.PNG' to the top of the header.

        ```sh
        # '\x89\x50\x4E\x47' (Hex) means '.PNG'
        printf '\x89\x50\x4E\x47' | dd of=example.png bs=4 conv=notrunc
        ```

    - **3. Confirm the PNG Header Fixed**

        ```sh
        xxd example.png | head

        00000000: 8950 4e47 0d0a 1a0a 0000 000d 4948 4452  .PNG........IHDR
        00000010: 0000 0320 0000 0320 0806 0000 00db 7006  ... ... ......p.
        00000020: 6800 0000 0173 5247 4200 aece 1ce9 0000  h....sRGB.......
        ...
        ```

<br />

## 3. Embed Hidden Data

1. **Use Steghide**

    ```sh
    steghide embed -ef sample.jpg
    ```

2. **Use Outguess**

    **[Outguess](A steganography tool for JPG, PPM and PNM.){:target="_blank"}** is a steganography tool for JPG, PPM and PNM.

    ```sh
    outguess -k "passphrase" -d hidden.txt example.jpg out.jpg
    ```

<br />

## 4. npiet

**[npiet](https://www.bertnase.de/npiet/){:target="_blank"}** is an interpreter for **the piet programming language**.  
It takes as input a portable pixmap (PPM) and PNG, GIF.

1. **Download and Compile**

    First of all, download the npiet and extract it.

    ```sh
    wget https://www.bertnase.de/npiet/npiet-1.3f.tar.gz
    tar -xf npiet-1.3f.tar.gz
    ```

    Then compile the "npiet.c".

    ```sh
    cd npiet-1.3f
    gcc npiet.c -o npiet
    ```

2. **Decode**

    After compiling, decode the image files

    ```sh
    ./npiet example.png
    ./npiet example.ppm
    ./npiet example.gif
    ```

