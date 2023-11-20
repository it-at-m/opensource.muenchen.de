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
logo: https://digiwf.oss.muenchen.de/digiwf_logo.png
tags:
- eigenentwicklung
- application
- opencore
- start2021
sortingPriority: 2
---
__DigiWF__ ist eine Plattform für die Prozessautomatisierung. Anwender*innen können Workflows selbst automatisieren und auf andere Systeme zugreifen.

---


## Über das Projekt

Seit 2019 wird das Thema Prozessautomatisierung in der Stadtverwaltung München voran getrieben.
Zu diesem Zweck wird die Camunda BPMN Process Engine eingesetzt, die das Projekt DigiWF nutzt.
Damit steht den Anwender*innen eine Plattform zur Verfügung, mit der sie über ein modulares Baukastenkonzept selbst in der Lage sind, automatisierte Workflows zu erstellen.

Die Plattform sorgt dafür, dass Aufgaben in einem Geschäftsprozess in der richtigen Reihenfolge abgearbeitet werden und dass die notwendigen Informationen digital an der richtigen Stelle zur Verfügung stehen.
Darüber hinaus stellt DigiWF auch Kennzahlen zu Workflow-Ausführungen bereit und unterstützt so die kontinuierliche Verbesserung von Prozessen.

![Screenshot eines digitalen Reisantrags mit den Eingabfeldern\: Art der Reise, Reisende und Veranstaltungsort](https://raw.githubusercontent.com/it-at-m/digiwf-core/dev/docs/src/images/platform/screenshot_digiwf_reiseantrag.png)


## Technische Details

Große Teile der Plattform basieren auf der [camunda BPM Plattform](https://camunda.com/platform/).
DigiWF kann sowohl mit der freien Open-Source-Version als auch mit der kostenpflichtigen Enterprise-Version von Camunda genutzt werden.
Für die Landeshauptstadt München nutzen wir die lizenzpflichtigen Enterprise-Version, da wir hierdurch erweiterte Funktionen und Tools, wie Cockpit und Optimize, nutzen können, die für uns einen Mehrwert bei der Erstellung und dem Betrieb von Ende-zu-Ende Prozessen bieten.
DigiWF (bzw. Camunda) funktioniert aber auch mit der der [freien Version](https://camunda.com/pricing/) von Camunda.
Insbesondere für kleine und weniger komplexe Prozesse ist dies eine gute Möglichkeit, um mit der Plattform ohne große Hürde zu arbeiten.

Das Frontend basiert auf dem Formular-Framework der Referenzarchitektur der Landeshauptstadt.
Im Backend laufen die Workflows ab, hier kommen als Basis [Kafka](kafka), die camunda Workflow und die camunda Rule Engine zum Einsatz.
DigiWF wird im Rechenzentrum der Landeshauptstadt München auf [Openshift](openshift) betrieben.

Dazu unser Vortrag auf der [CamundaCon 2023 - Automating Citizen Services in the City of Munich](https://page.camunda.com/camundacon-2023-city-of-munich) (englisch).
