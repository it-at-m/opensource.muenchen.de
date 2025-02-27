# FOSSaaS

Die Landeshauptstadt München nutzt Private-Cloud, wie auch Public-Cloud Angebote.

> Als Cloud Provider für die Landeshauptstadt München stellen wir sowohl Cloud Services auf unserer eigenen Infrastruktur, als auch Public Cloud Angebote zur Verfügung, die unseren hohen Sicherheitsanforderungen entsprechen.

[Eigenbetrieb it@M – IT-Services](https://stadt.muenchen.de/infos/itm-eigenbetrieb-im-it-referat.html)

Cloudangebote versprechen flexibler zu sein, können aber auch die Handlungsoptionen einschränken.
Cloudangebote versprechen durch die Spezialisierung eines Betreibers kostengünstiger zu sein, können aber auch den Preis einseitig diktieren.
Jeder IT-Service, vor allem Public Cloud Angebote, benötigen daher eine Exit-Strategie um einem Vendor Lock-in entkommen zu können:

> Bei kritischer Dienstleistung: sofortige Übernahme in private Cloud oder bei anderer Public-Cloud muss möglich sein

[BSI: Empfehlungen zur Vorbereitung einer Exit-Strategie bei Nutzung von Cloud Dienstleistungen](https://www.bsi.bund.de/dok/1042922)

Muss man einen proprietären Cloud-Service migrieren, ist man immer gezwungen auch die gesamte Anwendung zu migrieren.
Dies bedeutet meist eine Einführung einer komplett neuen Software, mit all dem Aufwand der Datenmigration, Nutzerschulung und gegebenenfalls infrastrukturellen Integration.

> Preiserhöhungen und geänderte Service-Bedingungen treffen Sie voll, und falls Ihr Dienstleister das Angebot vollkommen einstellt, haben Sie ein Problem.
Abhilfe kann darin bestehen, nur PaaS-Dienste zu nutzen, die auf einem Open-Source-Projekt basieren. Eine Database as a Service (DBaaS), die beispielsweise auf PostgreSQL basiert, ist weniger anfällig für einen harten Vendor Lock-in als proprietäre Lösungen.[^devops]

Das gilt speziell für das Cloud-Servicemodell Platform as a Service, aber auch allgemein für alle anderen Cloud-Servicemodelle.

Muss man einen Cloud-Service, der auf freier Software basiert, migrieren, ist eine *sofortige Übernahme*, wie in der Exit-Strategie Vorgaben des BSI gefordert, durch die grundsätzliche freie Zugänglichkeit der Software möglich.  
Man kann freie Software nicht nur mitnehmen, sondern noch besser, die Anwendung ist meist bereits am Exitziel vorhanden.
Denn Cloud-Dienste für freie Software gibt es in der Regel bei verschiedenen unabhängigen Serviceanbietern.
Und wenn nicht, besteht immer die Möglichkeit auch wieder On-Premises gehen.

![/fossaas-venn.svg](/fossaas-venn.svg)


[^devops]: Sujeevan Vijayakumaran: DevOps ISBN 978-3-8362-9099-9 S. 264
