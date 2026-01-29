---
title: Zammad
developerlink: https://zammad.org
licensingmodel: open source
logo: /logo/320px-Logo-zammad.svg.png
opencode: https://opencode.de/de/software/zammad-3166
tags:
  - application
  - support
  - start2023
  - k8s
sortingPriority: 2
---

Zammad is a free helpdesk and issue tracking system that enables the connection of various channels such as e-mail and telephone.

---

Zammad is used in the [digital citizen service](https://it-at-m.github.io/dbs/introduction.html) for less structured processes.
Citizens can submit requests on the municipal form server (e.g. regarding [real estate tax](https://service.muenchen.de/intelliform/forms/01/10/10/kontaktformular_grundsteuer/index), [Supplementary guardianships](https://service.muenchen.de/intelliform/forms/01/03/03/erhebungsbogen_ergaenzungspflegschaften/index) or [technical enquiries](https://service.muenchen.de/intelliform/forms/01/01/01/supportformular/index))).
City employees can then process the process in Zammad.
Citizens can then finally view the response at [digital citizen service](https://stadt.muenchen.de/buergerservice/anliegen/detailAnliegen.html).

![Screenshot of an email from DBS to a citizen](/inhouse/dbs-buerger-mail.png)
![Screenshot of a message from DBS to a citizen](/inhouse/dbs-buerger-interface.png)

As citizens log in to both the municipal form server and the digital citizen service with the [BayernID](https://id.bayernportal.de/de/), we can also offer citizen services with a [high level of trust](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/eIDAS-Verordnung/Elektronische-Identifizierung/elektronische-identifizierung_node.html).
We have integrated BayernID via our [BayernId-plugin](./bayernid-plugin.html).

The [zammad-ldap-sync](https://github.com/it-at-m/zammad-ldap-sync) developed by us enables a structured representation of LDAP entries in Zammad.
