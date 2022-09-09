---
title: Email Recon
desc: Detect malware from messages, check if they are phishing.
tags: [Email, Mail, Malware, OSINT, Recon]
alts: [OSINT, Recon]
render_with_liquid: false
---

## Analyze Messages

First off, open the message's source code, and copy it.

1. **Use Online Tools**

    - **[Message Header Analyzer](https://mha.azurewebsites.net/){:target="_blank"}**

        Analyses message header of email. It helps to check the phishing emails.

2. **Use Softwares**

    - **[PhishTool](https://www.phishtool.com/){:target="_blank"}**

        Combines threat intelligence, OSINT, email metadata and battle tested auto-analysis pathways into one powerful phishing response platform.

<br />

## Malware Detection in Attached Files

If you got mali in which attached "suspicious" files, you need to investigate them.

1. **View the Message Source**

2. **Copy the Attached File's Base64**

3. **Change Base64 to SHA256**

    Useful tools

    - **[CyberChef](https://gchq.github.io/CyberChef/){:target="_blank"}** is useful to change the cipher.

4. **Investigate the Hash**

    Useful tools

    - **[Talos File Reputation](https://www.talosintelligence.com/talos_file_reputation){:target="_blank"}**

    - **[VirusTotal](https://www.virustotal.com/gui/home/upload){:target="_blank"}**