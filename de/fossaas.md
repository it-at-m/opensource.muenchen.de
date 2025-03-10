# FOSSaaS

Die Landeshauptstadt München nutzt Cloud-Services.

> In den Fällen, in denen die Sourcing-Strategie die externe Beschaffung von neuen oder bestehenden IT-Services vorsieht, werden bevorzugt Cloud-Services beschafft.

[Sourcing- und Cloud-Strategie der Landeshauptstadt München](https://risi.muenchen.de/risi/dokument/v/5700029) (Seite 11)

Cloud-Services versprechen flexibler zu sein, können aber auch die Handlungsoptionen einschränken.
Cloud-Services versprechen durch die Spezialisierung eines Betreibers kostengünstiger zu sein, können aber auch den Preis einseitig diktieren.
Jeder IT-Service, vor allem Cloud-Services, benötigen daher eine Exit-Strategie um einem Vendor Lock-in entkommen zu können:

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


[^devops]: Sujeevan Vijayakumaran: DevOps ISBN 978-3-8362-9099-9 (Seite 264)
