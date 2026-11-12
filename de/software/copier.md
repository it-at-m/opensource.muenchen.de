---
title: Copier
developerlink: https://copier.readthedocs.io/
code: https://github.com/copier-org/copier
licensingmodel: open source
license: MIT
logo: /logo/copier_logo.png
tags:
- development
- python
---

__Copier__ ist ein Kommandozeilen-Werkzeug zum Rendern von Projekt-Templates: Neue Projekte werden aus einer [Python](python)-Template-Repository generiert — Dateien und Dateinamen können [Jinja](https://jinja.palletsprojects.com/)-Ausdrücke enthalten, die anhand strukturierter, konfigurierbarer Fragen eingefügt werden.

---

Das Besondere an Copier: jedes erzeugte Projekt speichert die Antworten, mit denen es erzeugt wurde, in einer `.copier-answers.yml`-Datei.
Wenn das Template diese Datei mitbringt und Template wie erzeugtes Projekt in Git versioniert sind, lassen sich Änderungen im Template auch in bereits erzeugte Projekte nachziehen (`copier update`) — kein einmaliges Scaffolding wie bei vergleichbaren Template-Generatoren wie cookiecutter.

Wir setzen Copier mit unseren [python-templates](https://github.com/it-at-m/python-templates) ein: Das Template erzeugt [Python](python)-Services mit [FastAPI](fastapi)/[uv](uv), ein optionales [Vue](vuejs)/Vite-Frontend, einen optionalen Background-Job-Worker, [Container](podman) und gemeinsame Lint-Konfigurationen (z. B. [Ruff](ruff)) — pro Komponente umschaltbar und projektübergreifend per `copier update` aktualisierbar.

---
