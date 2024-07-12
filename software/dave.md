---
title: DAVe
developer: LHM
code: https://github.com/orgs/it-at-m/repositories?q=dave&type=source
codelinktext: github.com/it-at-m dave
licensingmodel: open source
license: MIT
logo: /inhouse/dave_logo.png
tags:
- application
- eigenentwicklung
- start2021
- k8s
sortingPriority: 2
---
With __DAVe__, traffic counts can be commissioned, recorded and graphically evaluated using various diagrams.

---

## About the project


DAVe (short for: Database and Evaluation of Traffic Counts) is an application for evaluating traffic counts. It enables the employees of the Mobility Department to document and analyze traffic development in Munich. It is based on data from over 2000 counting points.
 
All traffic counts carried out in Munich since 1989 can be viewed with the DAVe application. Various diagrams are available for analysis, which can also be downloaded as a PDF report if required. Additional counting points and new traffic counts can be created and commissioned in direct communication with the counting service provider.
The data collected helps to analyze traffic development and is used, for example, to plan new cycle paths. They also form the basis for the traffic volume map, where interested citizens can view the [traffic volumes on Munich's roads](https://stadt.muenchen.de/infos/verkehrsdaten.html) online.

![Screenshot of a website with a map of Munich showing the current counting points](/inhouse/DAVE_Karte.png)
![Screenshot of a website with the plan of a street intersection, with stylized lanes in different colors](/inhouse/DAVE-Standardansicht-Knoten-Strom-Belastungsplan.png)
![Screenshot of a website with hydrographs](/inhouse/DAVE_Ganglinie.png)
![Screenshot of a website with list output](/inhouse/DAVE_Listenausgabe.png)


## Technical details

DAVe was developed with the [reference architecture](../publish#refarch) of the City of Munich. Java Spring Boot is used in the backend and TypeScript and [Vue.js](vuejs) in the frontend. A node-flow load plan that clearly displays the traffic flows was designed with the help of SVG.js.

The data is stored in two different databases: the data relevant for the search, such as location or street names, is stored in ElasticSearch. This enables a very high-performance search with search suggestions in real time. The traffic data from the counts that is not required for the search is stored in a relational database.

DAVe can be installed and operated via [helm chart](https://artifacthub.io/packages/helm/it-at-m/dave?modal=install).


## Roadmap

Currently, only individual counts can be uploaded.
In the second expansion stage of DAVe, the evaluation options for permanent counting points will be integrated.
This means that all current evaluation options that are available for counting points will also be possible (where appropriate) for measuring points (i.e. permanent counting points for motorised and bicycle traffic).
Some additional evaluation options that are only useful for permanent counting points will also be available.  
There are also plans to integrate pedestrian traffic data in a follow-up project (time horizon: 2025).
