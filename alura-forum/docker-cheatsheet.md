# How is the appearance of a Dockerfile?

```Dockerfile
# The standard image we are using
FROM node:20

# We are going to copy every single file of our project to an "/app" folder
COPY ./ /app

# We are going to make the port 3000 an usable port
EXPOSE 3000

# We are saying what cmd our container will run
CMD ["node", "/app/api/index.js"]
```

# How to initialize a Docker image?

```bash
docker build -t alura-forum .
```

This command is basically building an image naming it as "alura-forum" and we are point to the folder where the Dockerfile file is

# How to run our container

```bash
docker run --rm --name alura-forum -p 8000:3000 -v ~/.gcloud:/config -e GOOGLE_APPLICATION_CREDENTIALS=/config/keyfile.json -e GOOGLE_CLOUD_PROJECT=${GOOGLE_CLOUD_PROJECT} alura-forum
```

This command tells docker:
- To delete the container after executing it with `--rm`
- To name the container with the name "alura-forum" with `--name alura-forum`
- To use port 8000 of our machine and the 3000 of our image with `-p 8000:3000`
- To use the image alura-forum
- To create a generic volume copying the files from the `/.gcloud` directory to the `/config` container's folder
- Setting new envrionment variables with the tag `-e`

# How to publish our API inside the container

## Creating a container tag that will be stored in the GCP

```bash
docker tag alura-forum gcr.io/<projectId>/alura-forum
```

This command tells docker:
- To use the name of our built image "alura-forum"
- To set a tag name in GCP 

## Configuring the auth between gcloud and Docker

> [!IMPORTANT]
> To keep following this part of the tutorial, you need to install the Google Cloud CLI [here](https://cloud.google.com/sdk/docs/install). After following the steps to complete installation, you will be able to link the CLI with your GCP account using the command `gcloud auth login`.

Create some credential helpers to link gcloud with docker

```bash
gcloud auth configure-docker
```

After that, you can push your endpoint with the following command

```bash
docker push gcr.io/<projectId>/alura-forum
```