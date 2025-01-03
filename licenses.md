Free software is defined by open access to the source code, but above all by its licence characteristics.

> The following is a purely informative description of our practice; it is expressly not a recommendation of any kind to proceed in this way.

## Use

When [using free software](./use) we can use all [OSI Approved Licences](https://opensource.org/licenses).

## Code Contributions

If we [modify and republish open source software ourselves](./improve#code-contributions), the respective licence must be observed and the required conditions must be complied with.
As a rule, modifying existing software does not pose a problem with regard to the licence, as a fork of the repository is created, which also contains the licence file.

## Own developments

The [publication](./publish) of the [software developed by LHM](./in-house-development) is carried out under the [MIT License](https://en.wikipedia.org/wiki/MIT_License) in order to hinder reuse as little as possible.
The MIT licence is also proposed in the City Council resolution ['Develop new software in an open source context!'](https://risi.muenchen.de/risi/antrag/detail/6289779).

### Integration in in-house developments

We take care not to use software with licenses with a strong copyleft effect. This gives us more freedom in choosing the license for our own software and avoids licensing conflicts.

We prefer to use software that has licences which are either permissive or have a weak copyleft effect.

In practice, we mainly use software with the following permissive licences verified by the [Open Source Initiative](https://opensource.org/licenses):

- [Apache 2.0](https://en.wikipedia.org/wiki/Apache_License)
- [BSD](https://en.wikipedia.org/wiki/BSD_licenses)
- [MIT-Lizenz](https://en.wikipedia.org/wiki/MIT_License)
- [PostgreSQL licence](https://www.postgresql.org/about/licence/)
- [PHP licence](https://en.wikipedia.org/wiki/PHP_License)

Licences with weak copyleft are possible:

- [Eclipse Public License - v2.0](https://en.wikipedia.org/wiki/Eclipse_Public_License#Version_2.0)
- [LGPL](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License)
- [MPL](https://en.wikipedia.org/wiki/Mozilla_Public_License)

We avoid the use of software under licences with a strong copyleft.
Typical representatives are:

- [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License)
- [EUPL](https://en.wikipedia.org/wiki/European_Union_Public_Licence)
- [AGPL](https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License)

### Exception Java

Java is an exception.
Java is licensed under the GPL.
However, the [GPL with exceptions for linked software](https://en.wikipedia.org/wiki/GPL_linking_exception) applies to OpenJDK.
This means that software that uses OpenJDK does not necessarily have to be licenced under the GPL.

### Check and document

To ensure that we do not commit any licence violations, all dependencies of our software must be checked and documented.

We use [GitHub Dependency Review](https://docs.github.com/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) for this purpose, which is already predefined in [oss-repository-en-template](https://github.com/it-at-m/oss-repository-en-template/blob/main/.github/workflows/dependency_review.yaml).

The **central it@M policy file** is defined in [it-at-m/.github](https://github.com/it-at-m/.github/blob/main/workflow-configs/dependency_review.yaml) - [the licences with a strong copyleft are defined there](https://github.com/it-at-m/.github/blob/main/workflow-configs/dependency_review.yaml#L2), which we want to avoid.

As "false positives" can occur during licence detection, these can be placed on an [ignore list](https://github.com/it-at-m/.github/blob/main/workflow-configs/dependency_review.yaml#L6).

The compatibility of the licences used can be checked with the [JLA - Compatibility Checker](https://joinup.ec.europa.eu/collection/eupl/solution/joinup-licensing-assistant/jla-compatibility-checker).
