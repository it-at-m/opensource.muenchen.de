---
application: Epitaph – Indoor Navigation
developer: LHM
code: https://github.com/it-at-m/epitaph_ips
licensingmodel: open source
license: MIT
tags: 
- eigenentwicklung
- application
- start2022
---
Epitaph ermöglicht die lokale Positionsbestimmung auf mobilen Geräten. Die Open-Source-Bibliothek verwendet die Programmiersprache Dart und das Flutter-Framework.


---

## About the project

The [it@M InnovationLab](https://stadt.muenchen.de/infos/innovationlab-im-it-referat.html) and the Kreisverwaltungsreferat (KVR) are working together on a way to support the existing visitor guidance system in the registry office in Ruppertstraße. For this purpose, the joint project "Epitaph - Indoor Navigation" was started. The goal of the project is to develop a cross-platform smartphone app that allows people to navigate through municipal buildings.

For this purpose, we are working with BLEs (Bluethooth Low Energy) beacons. These emit Bluethooth signals that are detected by the cell phone. The app uses these signals to determine the position, which is displayed in the app. This enables users to find their way around the building.


## Technical details

The app was developed by our team in a data-efficient way based on existing open source software. It works cross-platform on both Android and iOS devices by using Flutter technology on only one code base, without being natively developed for these platforms.

The Epitaph library has two major components: EpitaphIPS contains elements for position calculation and building representation, while EpitaphGraphs provides modules for mesh graph representations and wayfinding algorithms.

