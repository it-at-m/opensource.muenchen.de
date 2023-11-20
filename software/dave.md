---
application: DAVe
developer: LHM
code: https://github.com/orgs/it-at-m/repositories?q=dave&type=source
codelinktext: github.com/it-at-m dave
licensingmodel: open source
license: MIT
logo: /dave_logo.png
tags:
- application
- eigenentwicklung
- start2021
sortingPriority: 3
---
With DAVe, traffic counts can be commissioned, recorded and graphically evaluated using various diagrams.

---

## About the project

DAVe is a specialized procedure for the evaluation of traffic counts. It enables the employees of the mobility department to document and analyze the traffic development in Munich. It is based on data from over 2000 counting stations.
 
DAVe was also developed as an in-house software application based on the open source reference architecture of the City of Munich. It is planned to publish DAVe as open source software.

All traffic counts carried out in Munich since 1989 can be viewed with the specialized application DAVe (short for Database and Evaluation of Traffic Counts). Various diagrams are offered for evaluation, which can also be downloaded as a PDF report if required. Additional counting points as well as new traffic counts can be created and ordered in direct communication with the counting service provider.
The collected data helps to analyze traffic development and is used, for example, for planning new bike paths. They also form the basis for the traffic volume map, on which interested citizens can view the traffic loads on Munich's streets online.

![Screenshot of a website with the plan of a street intersection, with stylized lanes in different colors](/DAVE_Grafik_Belastungsplan_verkehr.png)



## Technical details

DAVe was developed using the reference architecture of the City of Munich. Java Spring Boot is used in the backend and TypeScript and Vue in the frontend. A node-stream load map that clearly displays traffic flows was designed using SVG.js.

The data resides in two different databases: the data relevant for the search, such as location or street names, is stored in an ElasticSearch database. This enables a very performant search with search suggestions in real time. The traffic data from the counts that is not required for the search is stored in a relational database (Oracle at LHM).

The application is operated in the data center of the City of Munich. An infrastructure based on [containers](openshift) is used.

