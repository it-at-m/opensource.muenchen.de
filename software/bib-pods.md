---
title: Bibliotheks-Pods
developer: LHM
developerlink: https://it-at-m.github.io/bib-pods/
code: https://github.com/it-at-m/bib-pods
codelinktext: github.com/it-at-m bib-pods
licensingmodel: open source
license: MIT
tags:
  - application
  - eigenentwicklung
---

With **Bibliotheks-Pods**, library users get recommendations that suit them, and their data stays with them.

---

Users add their interests to a profile: favourite authors, topics, genres, places and languages, plus a list of saved titles.
The profile stays with them, in a [Solid Pod](https://solidproject.org/) or locally in the browser.
The [Munich City Library](https://www.muenchner-stadtbibliothek.de/) only reads it as long as users allow it, suggests matching titles from its collection and keeps none of the data. Under the hood, the recommendations are served by the vector database [Qdrant](qdrant) via the library backend's recommend endpoint.

The library website runs on [TYPO3](./typo3) and is extended with a plug-in.
Other libraries should be able to reuse the system.
In the long run, other apps and services could use the same profile to personalize what they offer, without storing data about their users.

The project is supported by the [Media & Digital department of the Munich City Library](https://www.muenchner-stadtbibliothek.de/daten-algorithmen) and the [OSPO](../ospo).
The City of Kiel's position paper [Digital sovereignty with Solid](https://positionspapier-solid-in-der-verwaltung-29ff8c.usercontent.opencode.de/) also recommends that states and municipalities try out Solid.


## Open Source Sabbatical

In 2026, we awarded an [Open Source Sabbatical](../sabbatical) to Bibliotheks-Pods.
With this lab project, we are testing [Solid](https://solidproject.org/) on a city service.
The following priorities are addressed:

* Users store their profile in their own Solid Pod or locally in the browser. They can view, change and take it with them at any time.
* Suggestions from the Munich City Library's collection. Users choose which kinds of recommendations they see, such as more by their favourite authors or titles on their topics.
* Integration into the library website as a [TYPO3](./typo3) extension. The same code also builds a demo site for trying it out.
* A shared vocabulary for interests, based on library authority data such as the GND, so other libraries can use it and help develop it.
* An SDK that isn't tied to libraries, so other apps and services can also read and write profiles in a pod.
