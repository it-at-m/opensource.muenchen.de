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

__Copier__ is a command-line tool for rendering project templates: New projects are generated from a [Python](python) template repository — files and file names can contain [Jinja](https://jinja.palletsprojects.com/)-expressions that are filled in based on structured configuration questions.

---

The special feature of Copier: every generated project stores the answers it was generated with in a `.copier-answers.yml` file. If the template provides this file and both template and generated project are kept in Git, template changes can be propagated into existing projects via `copier update` — not just one-off scaffolding like with comparable template generators such as cookiecutter.

We use Copier with our [python-templates](https://github.com/it-at-m/python-templates): the template generates [Python](python) services with [FastAPI](fastapi)/[uv](uv), an optional [Vue](vuejs)/Vite frontend, an optional background job worker, [containers](podman) and shared lint configs (e.g. [Ruff](ruff)) — switchable per component and across projects updateable with `copier update`.

---
