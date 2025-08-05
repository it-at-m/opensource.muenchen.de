# Usability analysis

In order to use or even further develop existing free software, it must first be subjected to a usability analysis.
All free software should undergo this usability analysis, regardless of whether it is to be used as a framework, library, [development tools](./in-house-development.html) or as [finished software](./use.html).

The analysis is conducted based on the following criteria:

## Adoption

* Are there already relevant reference customers or productive deployments in comparable institutions?
* Community activity on [public repositories](./repositories.html): number of stars, watchers, issues, pull requests, discussion activity
* How large is the active developer community?
* Is the continued development of the project ensured?
* A high number of GitHub stars is **not a reliable quality indicator**[^DevOps_Handbook_stars].

## Maturity and Community

Project maturity is a central criterion, regardless of whether the software is only used or actively developed.

The following should be evaluated:

* **Stability and maturity** of the project  
* **Project history** and continuity of development  
* Number and activity of **core developers**  
* **Responsiveness** to bug reports and security vulnerabilities  
* **Quality of communication** (e.g., regarding feature requests or community interactions)

## Code Review

Code is reviewed by experienced developers familiar with the language and technology in use.

The following questions should be addressed:

* Is a framework used? If not, what is the justification? If so, the selection and integration should be evaluated.
* Are there other dependencies (e.g., Redis, Memcached, Elasticsearch), and are they used in stable, up-to-date versions?
* Is it a web-based application? If not, why? For example, due to large data volumes or graphics (e.g., CAD).
* Is there a coding style guide (internal/external)? Is the code written in a readable and understandable way, with meaningful naming for variables and methods?
* What is the estimated onboarding time for new developers?

**Focus**: Evaluation of potential **maintainability**, **readability**, and **security** of the code.

## DevOps

For assessment, the last substantial contribution (not a documentation update) should be no older than _three months_, and the last release no older than _six months_.  
Are there currently open pull requests? What is the number of closed or merged pull requests?  
Is public Continuous Integration and Deployment (CI/CD) available?  
Are code, artifacts, releases, containers, etc. available in common repositories?  
Is the software available as runnable containers for Kubernetes or ideally [Openshift](./software/openshift.html)?

## [Security](./security.md)

It must be checked whether security scans are available and whether there are any known Common Vulnerabilities and Exposures (CVEs).  
Is the dependency graph – for example on GitHub – clean and visible?  
Are there external audits, such as for [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)?  
Is a Software Bill of Materials (SBOM) available?  
For container-based applications, the Dockerfile should meet the quality criteria of the [LHM Container Application Platform (CAP)](./software/openshift.html).

### CVE

Cross-checking with vulnerability databases (e.g., CVE) and reviewing code repositories is helpful to obtain a realistic risk profile.  
In addition, the following should be verified:

- Whether protected branches are configured  
- Whether there are responsible maintainers

## Documentation

Comprehensive software documentation is essential for all software, especially for software that is to be used or modified by others.

The following documentation must be available:

* User documentation
* Developer, installation and maintenance documentation.

All documentation must comprehensively describe __all__ the technical functions and user interfaces of the software.
This includes information about the software itself, its use, the API and installation and maintenance instructions.

It is important that the documentation is freely accessible on the Internet and provided in open formats (e.g. Markdown, HTML, Text).
It must be possible to submit suggestions for improving the documentation.

## External Support

The availability of external support is important for professional operation as well as for change requests.
This support can be offered by an active community or a commercial provider.

A large and committed community can also provide this support in principle, but if commercial support is offered, this should always be preferred.
This is because commercial support generally offers more reliable and professional support, which is particularly advantageous in security and operationally critical situations.  
If commercial support is not available or is too expensive, it must be ensured that we have the necessary skills in-house.
This may require us to procure training and further education for our employees.

The number of stars, watchers, contributors or pull requests can be an indication of a large community, but does not necessarily have to be [^DevOps_Handbook_stars].

[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365