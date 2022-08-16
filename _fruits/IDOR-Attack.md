---
title: Insecure Direct Object References (IDOR) Attack
desc: 
tags: [Burp, Ffuf, Hydra, IDOR, Web, Wfuzz]
alts: [API-Pentesting]
render_with_liquid: false
---

## 1. Find the Vulnerabilities from HTML Source Code

1. **Check the Names and Values of Input Form**

    ```html
    <input name="user_id" value="8" >
    ```

2. **Try What Happens When You Change the Cookie Value**

    ```
    Cookie: user_id=12
    ```

<br />

## 2. Change URL Parameters

1. **Manual Changing**

    ```sh
    /user?id=1
    /user?id=2

    /admin/posts/1
    /john/posts/1

    /static/1.txt
    /static/2.txt
    ```

2. **Fuzzing with Tools**

    ```sh
    ffuf -s -w numbers.txt -u http://vulnerable.com/user?id=FUZZ
    # -fs: Filter HTTP response size
    ffuf -s -w numbers.txt -u http://vulnerable.com/user?id=FUZZ -fs 439

    wfuzz -z file,./numbers.txt http://vulnerable.com/user?id=FUZZ
    ```
