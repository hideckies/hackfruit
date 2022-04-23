---
title: Recon-ng
desc: OSINT automation tool.
tags: [Linux, OSINT, PassiveRecon]
alts: [Dig, Host, Maltego, Nslookup, ViewDNSinfo, Whois]
website: https://github.com/lanmaster53/recon-ng
render_with_liquid: false
---

```sh
# Start a prompt
recon-ng

# Create new workspace
[recon-ng][default] > workspaces create sample
# Display workspaces
[recon-ng][sample] > workspaces list
# Load workspace
[recon-ng][sample] > workspaces load other_workspace
# Remove workspace
[recon-ng][other_workspace] > workspaces remove sample_workspace

# Display database schema
[recon-ng][sample] > db schema
# Insert 'domains' table in database
[recon-ng][sample] > db insert domains

# Search modules
[recon-ng][sample] > marketplace search domains-
# Display information about a module
[recon-ng][sample] > marketplace info shodan_hostname
# Install a module
[recon-ng][sample] > marketplace install shodan_hostname
# Remove a module
[recon-ng][sample] > marketplace remove shodan_hostname

# Display installed modules
[recon-ng][sample] > modules search
# Load module
[recon-ng][sample] > modules load shodan_hostname

# Display info
[recon-ng][sample][shodan_hostname] > info

# Display options
[recon-ng][sample][shodan_hostname] > options list
# Set options
[recon-ng][sample][shodan_hostname] > options set 
```