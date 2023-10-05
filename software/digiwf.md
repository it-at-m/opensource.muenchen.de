---
Source: SNow
application: DigiWF
developer: LHM
developerlink: https://digiwf.oss.muenchen.de/
code: https://github.com/it-at-m/digiwf-core/
codelinktext: github.com/it-at-m/digiwf-core/
licensingmodel: open source
license: MIT
linkapplication: null
screenshot: https://raw.githubusercontent.com/it-at-m/digiwf-core/dev/docs/src/images/platform/screenshot_digiwf_reiseantrag.png
logo: https://digiwf.oss.muenchen.de/digiwf_logo.png
tags: ["eigenentwicklung", "server", "foss"]
prio: 2
---
DigiWF ist eine Plattform für die Prozessautomatisierung. Anwender*innen können Workflows selbst automatisieren und auf andere Systeme zugreifen.

---


## Über das Projekt

Seit 2019 wird das Thema Prozessautomatisierung in der Stadtverwaltung München voran getrieben.
Zu diesem Zweck wird die Camunda BPMN Process Engine eingesetzt, die das Projekt DigiWF nutzt.
Damit steht den Anwender*innen eine Plattform zur Verfügung, mit der sie über ein modulares Baukastenkonzept selbst in der Lage sind, automatisierte Workflows zu erstellen.

Die Plattform sorgt dafür, dass Aufgaben in einem Geschäftsprozess in der richtigen Reihenfolge abgearbeitet werden und dass die notwendigen Informationen digital an der richtigen Stelle zur Verfügung stehen.
Darüber hinaus stellt DigiWF auch Kennzahlen zu Workflow-Ausführungen bereit und unterstützt so die kontinuierliche Verbesserung von Prozessen.

## Technische Details

Große Teile der Plattform basieren auf der [camunda BPM Plattform](https://camunda.com/platform/).
Das Frontend basiert auf dem Formular-Framework der Referenzarchitektur der Landeshauptstadt.
Im Backend laufen die Workflows ab, hier kommen als Basis [Kafka](kafka), die camunda Workflow und die camunda Rule Engine zum Einsatz.
DigiWF wird im Rechenzentrum der Landeshauptstadt München in einer auf Containern basierenden Infrastruktur betrieben.

Dazu unser Vortrag auf der [CamundaCon 2023 - Automating Citizen Services in the City of Munich](https://page.camunda.com/camundacon-2023-city-of-munich) (englisch).
