---
title: sudo
developerlink: https://www.sudo.ws/
licensingmodel: open source
logo: /logo/250px-Sudo_logo.png
tags:
  - infrastruktur
  - security
---

sudo is a command in Unix and Unix-like operating systems such as Linux or macOS that is used to start processes with the rights of another user.

---

Sudo is a central part of our security concept on [Linux servers](linux).
It allows employees to perform precisely defined administrative tasks, but nothing more, which minimises damage in the event of an error or security breach.

In addition to a general authorisation concept for middleware, we have over 300 different profiles for databases, special roles (e.g. on-call duty) or requirements of individual applications.
These authorisation concepts are managed with [Puppet](puppet).
