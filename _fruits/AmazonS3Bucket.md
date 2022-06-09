---
title: Amazon S3 Bucket
desc: A public cloud storage resource available in Amazon Web Services (AWS) Simple Storage Service (S3), an object storage offering.
tags: [AWS, OSINT, Web]
alts: []
website:
render_with_liquid: false
---

## S3 Bucket Examples

Accesss to the specific URL in browser. If the S3 bucket is accessible, you may be able to get interesting information.

```sh
https://vulnerable-assets.s3.amazonaws.com
https://vulnerable-www.s3.amazonaws.com
https://vulnerable-public.s3.amazonaws.com
https://vulnerable-private.s3.amazonaws.com
https://vulnerable-bucket-zero.s3.amazonaws.com
https://vulnerable-bucket-one.s3.amazonaws.com
https://vulnerable-bucket-two.s3.amazonaws.com

# ---------------------------------------------------------

# Example of content of XML in page.

...
<Contents>
<Key>creds.txt</Key>
...

Access to https://vulnerable-assets.s3.amazonaws.com/creds.txt
```