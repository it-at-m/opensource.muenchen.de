---
title: integreat
developer: Tür an Tür - Digitalfabrik gGmbH
developerlink: https://integreat-app.de/ueber-uns/
code: https://github.com/digitalfabrik/integreat-app
licensingmodel: open source
license: MIT
linkapplication: https://integreat.app/muenchen/
logo: /logo/integreat_logo.png
tags:
  - application
  - opencore
  - start2020
  - saas
---

**Integreat** is a local and multilingual integration platform for immigrants that can be used in any municipality without the involvement of the IT department.

---

LHM has been using Integreat as a software-as-a-service since February 2020.
The Integreat Munich platform provides refugees and new immigrants with multilingual initial information to help them arrive in Munich and welcome them - both via the free and offline Integreat app (download via Google Play Store or App Store) and at [integreat.app/muenchen/](https://integreat.app/muenchen/).
The overview of Munich's offerings is also a great help for full-time staff and volunteers.

## Open Source Sabbatical

Integreat has already received the [Munich Innovation Award 2024 for the Digital Welcome Center](https://stadt.muenchen.de/news/innovationspreis-muenchen2024.html#id2).
In addition, we have awarded the first [Open Source Sabbatical](../sabbatical) in the first half of 2025 to the [integreat-chat](https://github.com/digitalfabrik/integreat-chat) project to integrate a chat service into the Integreat app.

The integreat-chat uses a large language model to answer questions based on the content of the Integreat app.
For incoming requests, the system generates suggested answers for the human agents in our [Zammad](zammad).

The chatbot is currently in beta and was specifically enhanced and tested as part of the Munich Integration Assistant (MIA) project. The project evaluated whether an open source chatbot based on state-of-the-art LLMs can provide reliable, multilingual answers while being fully self-hosted to ensure digital sovereignty.

The results are promising: in approximately 50% of cases, the chatbot provides accurate answers, even to more complex inquiries. For questions not covered by existing content, it reliably indicates that no answer is available. The chatbot currently supports 24 languages. Translations are powered by Google Gemma 3, with consistently positive feedback on translation quality.

In May 2025, the integreat-chat was tested with 12 participants in the waiting area of the Integration Counselling Centre IBZ – Language and Career. Translations were rated an average of 4.9 out of 5 points, responses 4 out of 5 stars, and linked content 4.8 out of 5 points.

The chatbot not only supports newcomers seeking information but also eases the workload of staff and complements the existing counselling services — particularly outside of office hours. Integration of the chatbot solution, developed within the MIA project, into the planned Welcome Center of the City of Munich is planned.