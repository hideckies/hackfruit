---
title: Phishing Email Investigation
desc: Detect phishing emails.
tags: [Malware, OSINT, SocialEngineering]
alts: [CiscoTalos, CyberChef, MessageHeaderAnalyzer, VirusTotal]
website:
render_with_liquid: false
---

## Detect Malware in Attached File

```
1. Open Email's source.
2. Copy the source.
3. Move to the "Message Header Analyzer" and paste the source.
4. Copy the encoded text of the attached file in the source.
5. For example, if the encoded text is Base64, turn it to SHA256 using CyberChef.
5. Move to the "Talos File Reputation" of the "Cisco Talos", or "VirusTotal". Then paste the encoded text.
6. Check the analyzed results.
```