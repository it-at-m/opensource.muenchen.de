# Usability Analysis

In order to use or further develop existing free software, it must first undergo a usability analysis.  
This usability analysis should be applied to all types of free software, whether used as a framework, library, [development tool](./in-house-development.html), or [use](./use.html) as finished software.

The analysis is based on the following criteria:

## Popularity

* Are there already relevant reference users or productive deployments in comparable institutions?
* Community activity on [public repositories](./repositories.html): number of stars, watchers, issues, pull requests, discussions
* How large is the active developer community?
* Is the ongoing development of the project reliably ensured?
* A high number of GitHub stars is **not a reliable quality indicator**[^DevOps_Handbook_stars].

## Maturity and Community

Project maturity is a key criterion, regardless of whether the software is only used or also actively developed.

Evaluation criteria include:

* **Stability and maturity** of the project
* **Project history** and continuity of development
* Number and activity of **core developers**
* **Responsiveness** to bug reports and security vulnerabilities
* **Quality of communication** (e.g., handling of feature requests and interaction with the community)
* **Transparency of release and patch processes**
* Evaluation of patch release processes under time pressure: Are security patches published in a structured and traceable manner?

## Code Review

The code should be reviewed by experienced developers who are familiar with the relevant programming language and technology.

The following questions should be addressed:

* Is a framework used? If not, what is the reason? If so, the choice and integration should be evaluated.
* Are there other dependencies (e.g., Redis, Memcached, Elasticsearch), and are they used in stable and up-to-date versions?
* Is it a web-based application? If not, why? Possibly due to large data volumes or graphical requirements such as CAD?
* Is there a coding style guide (internal or external)? Is the code clearly written with descriptive naming for variables and methods?
* What is the estimated onboarding time for new developers?

Focus: Evaluation of the potential **maintainability**, **readability**, and **security** of the code.

## DevOps

For evaluation purposes, the last significant contribution (not a documentation update) should be no older than _three_ months, and the last release should be no older than _six months_.

Further criteria include:

* Are current pull requests present, and what is the ratio of closed vs. merged pull requests?
* Is publicly accessible Continuous Integration and Deployment (CI/CD) available?
* Are code, artifacts, releases, containers, etc., hosted in commonly used repositories?
* Is the software provided as runnable containers for Kubernetes, or ideally for [OpenShift](./software/openshift.html)?

## [Security](./security.md)

It must be verified whether security scans are in place and if current Common Vulnerabilities and Exposures (CVEs) exist.
Is the dependency graph clean and publicly visible – e.g., on GitHub?
Are there external audits, such as [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)?
Is a Software Bill of Materials (SBOM) available?
For container-based applications, does the Dockerfile comply with the quality standards of the [LHM Container Application Platform (CAP)](./software/openshift.html)?

### CVE

Comparing with vulnerability databases (e.g., CVE) and reviewing code repositories is helpful for obtaining a realistic risk assessment.  

In addition, the following should be checked:

- whether so-called protected branches have been set up.
- whether there are responsible maintainers.

## External support

The availability of external support is important for professional operation as well as for change requests.
This support can be offered by an active community or a commercial provider.

A large and committed community can also provide this support in principle, but if commercial support is offered, this should always be preferred.
This is because commercial support generally offers more reliable and professional support, which is particularly advantageous in security and operationally critical situations.  
If commercial support is not available or is too expensive, it must be ensured that we have the necessary skills in-house.
This may require us to procure training and further education for our employees.


The number of stars, watchers, contributors or pull requests can be an indication of a large community, but does not necessarily have to be [^DevOps_Handbook_stars].

## DevOps

Software consists not only of source code but is also embedded in automation for testing and deployment.
It is therefore necessary to check whether a publicly accessible _Continuous Integration and Deployment_ (CI/CD) is available.
In addition, whether source code, artifacts, releases, containers, etc. are available in common repositories.


[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365