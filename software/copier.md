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

__Copier__ is a command-line tool for rendering project templates: New projects are generated from a [Python](python) template repository — files and file names can contain [Jinja](https://jinja.palletsprojects.com/)-expressions that are filled in based on structured configuratio questions.

---

The special feature of Copier: generated projects store their answers in a `.copier-answers.yml` file. Template changes can therefore also be propagated into existing generated projects via `copier update` — not just one-off scaffolding like with comparable template generators such as cookiecutter.

We use Copier with our [python-templates](https://github.com/it-at-m/python-templates): the template generates [Python](python) services with [FastAPI](fastapi)/[uv](uv), an optional [Vue](vuejs)/Vite frontend, an optional background job worker, [containers](podman) and shared lint configs (e.g. [Ruff](ruff)) — switchable per component and across projects updateable with `copier update`.

---
