---
authors: kanekotic
title: Replace Docker Desktop with Podman in OSX
tags:
  - devops
  - docker
  - softwaredevelopment
description: a how to tutorial migrate from docker desktop to podman in OSX
draft: false
published: 2023-07-07T08:34:37.867Z
cover_image: https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/docker-desktop.png
series: OSX How To...
---
## Why would I do this?

D﻿ocker-desktop is a paid product, their licensing mode is by user, and it provides value not for the software side but for their cloud offering (registry, etc). For this, if the intent of you're a company is to use containers locally to facilitate software development,  the cost tends to be high.

## What is podman?

Podman (short for Pod Manager) is an open-source, Linux-native tool designed to develop, manage, and run containers and container images. It offers a Docker-compatible command-line interface (CLI) that does not rely on a daemon, but directly interacts with the Image registry, container, and image storage, and container process operations.

## Migration Steps

### 1. Clean-up Docker Desktop (Optional)

 ﻿you will need to run the next [bash script](<Docker Toolbox Uninstall Shell Script>)

```shell
#!/bin/bash

# Uninstall Script

if [ "${USER}" != "root" ]; then
	echo "$0 must be run as root!"
	exit 2
fi

while true; do
  read -p "Remove all Docker Machine VMs? (Y/N): " yn
  case $yn in
    [Yy]* ) docker-machine rm -f $(docker-machine ls -q); break;;
    [Nn]* ) break;;
    * ) echo "Please answer yes or no."; exit 1;;
  esac
done

echo "Removing Applications..."
rm -rf /Applications/Docker.app

echo "Removing docker binaries..."
rm -f /usr/local/bin/docker
rm -f /usr/local/bin/docker-machine
rm -r /usr/local/bin/docker-machine-driver*
rm -f /usr/local/bin/docker-compose

echo "Removing boot2docker.iso"
rm -rf /usr/local/share/boot2docker

echo "Forget packages"
pkgutil --forget io.docker.pkg.docker
pkgutil --forget io.docker.pkg.dockercompose
pkgutil --forget io.docker.pkg.dockermachine
pkgutil --forget io.boot2dockeriso.pkg.boot2dockeriso

echo "All Done!"
```

### 2﻿. Install Homebrew

[Homebrew](https://brew.sh/) is the defacto command line package manager for OSX, if you don't have it is very recommendable to have it.

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 3﻿. Install Podman

On Mac, each Podman machine is backed by a [QEMU](https://www.qemu.org/) based virtual machine. Once installed, the podman command can be run directly from the Unix shell in `Terminal`, where it remotely communicates with the podman service running in the Machine VM.

For Mac, Podman is provided through [Homebrew](https://brew.sh/). Once you have set up brew, you can use the `brew install` command to install Podman:

```shell
brew install podman
```

Next, create and start your first Podman machine:

```shell
podman machine init
podman machine start
```

You can then verify the installation information using:

```shell
podman info
```

At this point, podman should have created a proxy file in `/usr/local/bin/docker`, if it does not exist you will have to create it with:

```shell
sudo vim /usr/local/bin/docker
```

a﻿dd in that file the content:

```shell
#!/bin/sh
[ -e /etc/containers/nodocker ] || \
echo "Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg." >&2
exec podman "$@"
```

t﻿he script needs to be made executable by:

```powershell
chmod +x /usr/local/bin/docker
```

y﻿ou should now be able to run a docker as normal

```shell
docker run -it docker.io/hello-world
```

### 4. Use podman-mac-help

Y﻿ou should consider using `podman-mac-help` to migrate transparently to Podman on macOS.

* Continue using familiar Docker commands.
* Take advantage of the benefits of Podman on macOS.
* Your tools, such as [Maven](https://maven.apache.org/) or [Testcontainers](https://www.testcontainers.org/), communicate with Podman without reconfiguration.

The `podman-mac-helper` tool provides a compatibility layer that allows you to use most Docker commands with Podman on macOS. The service redirects `/var/run/docker` to the fixed user-assigned UNIX socket location.

T﻿o enable this, you just need to run:
```shell
sudo podman-mac-helper install
```

### 5. Install Podman Desktop (Optional)

Finally, to have a better compatibility and a UI to work with as with docker desktop, you can install [Podman desktop](https://podman-desktop.io/)b﻿y running: 

```
brew install podman-desktop
```
