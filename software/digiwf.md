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
- start2021
sortingPriority: 2
---
DigiWF is a platform for process automation. Users can automate workflows themselves and access other systems.

---


## About the project

Since 2019, the topic of process automation has been pushed forward in the Munich City Administration.
For this purpose, the Camunda BPMN Process Engine is used, which the project DigiWF uses.
This provides users* with a platform that enables them to create automated workflows themselves via a modular building block concept.

The platform ensures that tasks in a business process are processed in the right order and that the necessary information is available digitally in the right place.
In addition, DigiWF also provides metrics on workflow executions, supporting continuous process improvement.

![Screenshot of a digital travel request with the input fields\: type of trip, traveler and venue](https://raw.githubusercontent.com/it-at-m/digiwf-core/dev/docs/src/images/platform/screenshot_digiwf_reiseantrag.png)



## Technical details

Large parts of the platform are based on the [camunda BPM platform](https://camunda.com/platform/).
The frontend is based on the form framework of the reference architecture of the state capital.
The backend runs the workflows, here [Kafka](kafka), camunda Workflow and camunda Rule Engine are used as a basis.
DigiWF is operated in the data center of the City of Munich in a container-based infrastructure.

See our presentation at [CamundaCon 2023 - Automating Citizen Services in the City of Munich](https://page.camunda.com/camundacon-2023-city-of-munich).

