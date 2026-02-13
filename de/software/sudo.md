---
title: sudo
developerlink: https://www.sudo.ws/
licensingmodel: open source
logo: /logo/250px-Sudo_logo.png
tags:
  - infrastruktur
  - security
---

sudo ist ein Befehl unter Unix und unixartigen Betriebssystemen wie Linux oder macOS, der dazu benutzt wird, Prozesse mit den Rechten eines anderen Benutzers zu starten.

---

Sudo ist ein zentraler Teil unseres Sicherheitskonzepts auf [Linuxserver](linux).
Mitarbeitende können damit genaus definierte adminstrative notwendige Tätigkeiten ausführen, aber nicht mehr, was den Schaden im Fehler oder Sicherheitsfall minimiert.

Neben einem generellen Berechtigungskonzept für Middleware haben wir über 300 unterschiedliche Profile für Datenbanken, spezielle Rollen (z.B. Rufbereitschaft) oder Anforderungen einzelner Applikationen.
Diese Berechtigungskonzepte werden mit [Puppet](puppet) verwaltet.
