---
title: Podman
developerlink: https://podman.io/
licensingmodel: open source
logo: /logo/330px-Podman-logo-orig.png
tags:
- development
- devstack
sortingPriority: 101
---
__Podman__ is a container management tool for managing containers, images, volumes and pods.

---

Since Podman is [rootless](https://www.linuxjournal.com/content/containers-2025-docker-vs-podman-modern-developers) and [daemonless](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too#heading-daemonless), it is safer to run and easier to configure.
We use Podman on our local development workstations and thus use the same container runtime as in our private cloud [Openshift](openshift).
