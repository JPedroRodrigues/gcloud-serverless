# Using Kubernetes within Google Cloud Platform

## How could we use Kubernetes with CMD?

- Lists our google cloud clusters

```bash
gcloud container clusters list
```

- To get the cluster configuration for our pc and use the kubernetes cli

```bash
gcloud container clusters get-credentials alura --region=us-central1-c
```

- Lists cluster nodes

```bash
kubectl get nodes
```

- Configure a deploy

```bash
kubectl create deploy forum-alura --image=gcr.io/<project_id>/alura-forum --dry-run=client -o yaml
```

This tells kubernetes that we want the result of this command to be generated on the cliente side (ter)

- Create a deploy

```bash
kubectl apply -f deploy.yml
```

- List all deploys or pods made

```bash
kubectl get deploy
```

```bash
kubectl get pods
```

- Get logs from our app

```bash
kubectl logs <project_id>
```

- Expose API to get its IP address and access it

```bash
kubectl expose deployment forum-alura --port=80 --target-port=3000 --type=LoadBalancer
```

- List all services running 

```bash
kubectl get services
```

- Create a secret to complete auth

```bash
kubectl create secret generic alura-secret --from-literal=USER=alura-forum --from-literal=PASSWORD=mysecretpassword123
```

- List all secrets

```bash
kubectl get secrets
```