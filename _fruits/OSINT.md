---
title: OSINT
desc: Open-soruce intelligence is the collection and analysis of data gathered from open sources to produce actionable intelligence.
tags: [Address, IOC, MAC, Malware, MITRE, Network, OSINT, Recon, Shodan, URL, Web, Whois]
alts: [Recon]
render_with_liquid: false
---

## Frameworks

- **[OSINT Framework](https://osintframework.com/){:target="_blank"}{:rel="noopener"}**

<br />

## Investigation

1. **Comprehensive Tools**

    - **[DeHashed](https://www.dehashed.com){:target="_blank"}{:rel="noopener"}**

    - **[Have I Been Pwned](https://haveibeenpwned.com/){:target="_blank"}{:rel="noopener"}**

    - **[MetaDefender Cloud](https://metadefender.opswat.com/){:target="_blank"}{:rel="noopener"}**

        An advanced threat detection and prevention platform.**

    - **[Shodan](https://www.shodan.io/){:target="_blank"}{:rel="noopener"}**

        A search engine that lets users search for various types of servers connected to the internet using a variety of filters.

    - **[Threat Intelligence Platform](https://threatintelligenceplatform.com/){:target="_blank"}{:rel="noopener"}**

        Find detailed information about a host and its underlying infrastructure in seconds through the Threat Intelligence Platform web interface.

    - **[ViewDNS.info](https://viewdns.info/){:target="_blank"}{:rel="noopener"}**

        It provides Reverse IP Lookup, finds WHOIS records, so on. Checks other domains on the same IP.

2. **By Purpose**

    1. **Website**

        - **[Cisco Talos](https://talosintelligence.com/){:target="_blank"}{:rel="noopener"}**

            One of the largest commercial threat intelligence teams in the world.

        - **[Security Headers](https://securityheaders.com/){:target="_blank"}{:rel="noopener"}**

            Scan websites.

        - **[urlscan.io](https://urlscan.io/){:target="_blank"}{:rel="noopener"}**

            URL and website scanner.

        - **[URLhaus](https://urlhaus.abuse.ch/){:target="_blank"}{:rel="noopener"}**

            A project from abuse.ch with the goal of sharing malicious URLs that are being used for malware distribution.

        - **[Wappalyzer](https://www.wappalyzer.com/){:target="_blank"}{:rel="noopener"}**

            It identifies technologies on websites.

        - **[Wayback Machine](https://archive.org/web/){:target="_blank"}{:rel="noopener"}**

            It provides archived web pages.

            - **Research Old Information**

                1. robots.txt, sitemap.xml, and other interesting files.

                2. Directories

                3. URL parameters

                4. API keys

            - **Useful Tools**

                - **[Waybackurls](https://github.com/tomnomnom/waybackurls){:target="_blank"}{:rel="noopener"}**

                    Fetch all URLs that the Wayback Machine knows about for a domain.

    2. **IP Address**

        - **[AbuseIPDB](https://www.abuseipdb.com/){:target="_blank"}{:rel="noopener"}**

            A project dedicated to helping combat the spread of hackers, spammers, and abusive activity on the internet.

        - **[Censys Search](https://search.censys.io/){:target="_blank"}{:rel="noopener"}**

            It provides information of specific IP addresses and domains.

        - **[Cloudflare Radar](https://radar.cloudflare.com/){:target="_blank"}{:rel="noopener"}**

            Up to date Internet trends and insight.

    3. **MAC Address**

        - **[MAC Address Lookup](https://dnschecker.org/mac-lookup.php){:target="_blank"}{:rel="noopener"}**

            It provides you information about any MAC Address of a networking card installed into your computer or any other device.

    3. **Malware**

        - **[MalShare](https://malshare.com/){:target="_blank"}{:rel="noopener"}**

            A community driven public malware repository that works to provide free access to malware samples and tooling to the infomation.

        - **[MalwareBazaar](https://bazaar.abuse.ch/){:target="_blank"}{:rel="noopener"}**
            
            A project from abuse.ch with the goal of sharing malware samples with the infosec community, AV vendors and threat intelligence providers.

    4. **Indicators of Compromise (IOCs)**

        - **[ThreatFox](https://threatfox.abuse.ch/){:target="_blank"}{:rel="noopener"}**

            A platform from abuse.ch with the goal of sharing indicators of compromise (IOCs) associated with malware with the infosec community, AV vendors and threat intelligence providers.

    5. **Botnet**

        - **[Feodo Tracker](https://feodotracker.abuse.ch/){:target="_blank"}{:rel="noopener"}**
            
            A project of abuse.ch with the goal of sharing botnet C&C servers associated with Dridex, Emotet (aka Heodo), TrickBot, QakBot (aka QuakBot / Qbot) and BazarLoader (aka BazarBackdoor). 

    6. **SSL**

        - **[Qualys](https://www.ssllabs.com/ssltest/){:target="_blank"}{:rel="noopener"}**

            This free online service performs a deep analysis of the configuration of any SSL web server on the public Internet.

        - **[SSLBL](https://sslbl.abuse.ch/){:target="_blank"}{:rel="noopener"}**

            A project of abuse.ch with the goal of detecting malicious SSL connections, by identifying and blacklisting SSL certificates used by botnet C&C servers. In addition, SSLBL identifies JA3 fingerprints that helps you to detect & block malware botnet C&C communication on the TCP layer.

    7. **Image**

        It's also known as Reverse Image Search.

        - **[Google Images](https://www.google.com/imghp){:target="_blank"}{:rel="noopener"}**

            Upload images to get the information of them.

<br />

## Adversary Tactics

1. **MITRE**

    1. **[MITRE ATT&CK](https://attack.mitre.org/){:target="_blank"}{:rel="noopener"}**

        A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.

    1. **[MITRE Cyber Analytics Repository](https://car.mitre.org/){:target="_blank"}{:rel="noopener"}**

    1. **[MITRE Engage](https://engage.mitre.org/#){:target="_blank"}{:rel="noopener"}**
