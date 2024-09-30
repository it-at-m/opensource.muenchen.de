---
title: Wahllokalsystem
developer: LHM
developerlink: https://it-at-m.github.io/Wahllokalsystem/
code: https://github.com/it-at-m/Wahllokalsystem/
licensingmodel: open source
license: MIT
tags:
- application
- eigenentwicklung
- start2023
- k8s
sortingPriority: 2
---
The __Wahllokalsystem__ (polling station system) is an application for recording and transmitting election results from the polling stations to the electoral office.

---

## Project

Wahllokalsystem station system was initially introduced for the 2017 federal election, but the source code was not published.
As part of a planned lifecycle measure, the entire application will be reviewed and published.

Along 3 [milestones](https://github.com/it-at-m/Wahllokalsystem/milestones?direction=asc&sort=title) we are still in the process of reviewing individual modules step by step and publishing them here.


## Function

The main focus of the software is on the actions on election day. It supports the opening of the polling station, e.g. by using a checklist to ensure that all the necessary materials are available. During the voting period, the number of voters already in the polling station is transmitted. The software is also used to document election-related incidents.

It also checks at defined times which members of the electoral board are present at the polling station. This ensures that the committee is sufficiently staffed at all times.

During the vote count and the associated creation of the minutes, the system supports the election committee in recording the data correctly. To this end, there are numerous rules and consistency checks that provide the election committee with feedback on whether the recorded data is consistent.

The electoral office can use the system to send important information to the polling districts.

The election results of a polling station recorded in this way are transmitted directly to the electoral office, where they are then published promptly on [wahlen-muenchen.de](https://www.wahlen-muenchen.de/).
On the other hand, the results are printed out in paper form as a transcript, signed by the electoral board on the evening of the election and sent to the electoral office.
