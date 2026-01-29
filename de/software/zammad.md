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

Zammad ist ein freies Helpdesk- bzw. Issue-Tracking-System das die Anbindung von verschiedensten Kanälen wie E-Mail, Telefon ermöglicht.

---

Zammad wird im [digitalen Bürgerservice](https://it-at-m.github.io/dbs/introduction.html) für wenig strukturierte Vorgänge genutzt.
Bürger\*innen können Anliegen am städtische Formularserver (z.B. zur [Grundsteuer](https://service.muenchen.de/intelliform/forms/01/10/10/kontaktformular_grundsteuer/index), [Erhebungsbogen Ergänzungspflegschaften](https://service.muenchen.de/intelliform/forms/01/03/03/erhebungsbogen_ergaenzungspflegschaften/index) oder [technische Anfragen](https://service.muenchen.de/intelliform/forms/01/01/01/supportformular/index)) einreichen.
Mitarbeiter\*innen der Stadt können in Zammad den Vorgang dann bearbeiten, während die Bürger\*innen im [digtalen Bürgerservice](https://stadt.muenchen.de/buergerservice/anliegen/detailAnliegen.html) den Bearbeitungsstand einsehen und mit den Sachbearbeiter\*innen in Kontakt treten können.

![Screenshot einer DBS E-Mail an Bürger\*in](/inhouse/dbs-buerger-mail.png)
![Screenshot einer DBS Nachricht an Bürger\*in](/inhouse/dbs-buerger-interface.png)


Da sich Bürger\*innen sowohl am städtischen Formularserver, als auch am digitale Bürgerservice, mit der [BayernID](https://id.bayernportal.de/de/) anmelden, können wir auch Bürgerservices mit einem [hohen Vertrauensniveau](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/eIDAS-Verordnung/Elektronische-Identifizierung/elektronische-identifizierung_node.html) anbieten.
Die BayernID haben wir über unser [BayernId-plugin](./bayernid-plugin.html) integriert.

Der von uns eigenentwickelte [zammad-ldap-sync](https://github.com/it-at-m/zammad-ldap-sync) ermöglicht eine strukturierte Darstellung von LDAP-Einträgen in Zammad.
