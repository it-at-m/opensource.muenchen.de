---
title: WJH Orientierungsrechner
developer: LHM
code: https://github.com/it-at-m/wjh-rechner
codelinktext: github.com/it-at-m/wjh-rechner
linkapplication: https://kita-orientierungsrechner-wjh.muenchen.de/
licensingmodel: open source
license: MIT
tags:
  - application
  - eigenentwicklung
  - k8s
sortingPriority: 3
---

The **WJH-Orientierungsrechner** allows for a preliminary calculation of possible funding through the Economic Youth Welfare (WJH) of the City of Munich.

---

## About the project

The WJH Orientation Calculator allows for a preliminary calculation of possible funding through the Economic Youth Welfare (WJH) of the City of Munich.

The calculator is only intended to provide an orientation on possible financial support for the daycare fees of independent providers in Munich through the economic youth welfare department of the social services office (WJH).

When an application is made to the economic youth welfare department of the social services office for the takeover of parental contributions for a child day care facility (kindergarten, nursery, after-school care, lunchtime supervision), the costs that can be covered, either through a subsidy or full cost coverage, will be assessed on a case-by-case basis.

## Technical details

The frontend was implemented using TypeScript and [Vue.js](vuejs) and [Vuetify](vuetifyjs) and is hosted on [Openshift](openshift) in the data center of the City of Munich.

The web application is designed as a dynamic page that is executed exclusively in the user's browser. Therefore, information that leads to a preliminary calculation of possible funding is not leaving the context of the user.
