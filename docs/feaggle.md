---
sidebar_position: 100
---

# Feaggle

[You can download the latest image from DockerHub!](https://cloud.docker.com/repository/docker/kmruiz/feaggle-server)

*feaggle-server* is a dynamic server that allows setting up
feature toggles for the `feaggle` library.

## Development

### How to Run feaggle-server locally

**You will need to install docker and docker-compose in your machine.**

Start a postgresql instance in your local machine, the easiest way is using the provided
docker-compose.yml that is in the root of the project:

`docker-compose up postgres`

It will take several minutes if there is no cached image of postgresql, after that, just
run the [main function](src/main/kotlin/io/feaggle/server/Main.kt) with your favourite IDE.

## [Github Repo](https://github.com/feaggle)
