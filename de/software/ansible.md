---
title: Ansible
developerlink: http://www.ansible.com
licensingmodel: open source
license: Apache
logo: /100px-Ansible_logo.svg.png
tags:
- infrastruktur
---
__Ansible__ ist ein freies Automatisierungswerkzeug zur Orchestrierung und Konfiguration und Administration von Servern.

---

Wir nutzen Ansible für zahlreiche _Infrastructure as code_ Automatisierungen, so wird unser [Openshift](openshift.html) vollautomatisch mit der ansible role [ansible-openshift4-vmware/](https://github.com/it-at-m/ansible-openshift4-vmware/) ausgerollt und geupdatet.

### AWX

Für den zentralen Service Desk betreiben wir einen [AWX](https://github.com/ansible/awx), der sämtliche Standardaufgaben in unseren Rechenzentren mit Ansible playbooks automatisiert ausrollt.
Das umfasst die Bereitstellung virtueller Server, Datenbanken, Storage, Domains oder die Vergabe temporärer Userrechte.
Zusammen mit dem freien [Katello](/software/katello) bildet AWX unser zentrales Systemmanagement.
