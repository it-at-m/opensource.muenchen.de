# Usability Analysis

In order to use or even further develop existing open-source software, it must first undergo a usability analysis.
This usability analysis should encompass any open-source software, whether it is intended to be used as a framework, library, development tools, or as completed software.

The analysis is conducted based on the following criteria:

## Popularity

Are there already relevant reference customers from this field?
Community activities on GitHub, such as the number of stars, watchers, contributors, or pull requests, can indicate widespread adoption, but this may not necessarily be the case.

## Code Review

The evaluation of the code should be carried out by an experienced developer who is familiar with the relevant language or framework being used. 
The following questions should be answered:

* Is a framework being used? If not, what is the reasoning? If so, the selection and integration should be evaluated.
* Are there any other dependencies (e.g., Redis, Memcached, Elasticsearch), and are these being used in stable, up-to-date versions?
* Is it a web-based application? If not, why? Perhaps due to large data volumes or graphics, such as CAD.
* Is there a (preferably external) coding style guide? Is the code written in a comprehensible manner with meaningful names for variables and methods? 
* What is the estimated onboarding time for a developer?

The focus is on the potential maintainability and security of the software.

## DevOps

For the assessment, the last significant contribution (not a documentation update) should be no older than _three_ months, and the last release should be no older than _six months_.
Are there current pull requests available, and what is the number of closed or merged pull requests?
Is publicly accessible Continuous Integration and Deployment (CI/CD) available?
Are code, artifacts, releases, containers, etc., available in common repositories?
Provision of runnable containers for Kubernetes or, ideally, OpenShift.
The Dockerfile should meet the internal quality requirements (e.g., LHM standards).

## Security

It should be checked whether security scans are available and if there are current Common Vulnerabilities and Exposures (CVEs).
Is the dependency graph clean and viewable, for example, on GitHub?
Are there external audits, such as those for [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)?
Is there a Software Bill of Materials (SBOM) available?
For container applications, should the Dockerfile meet the quality criteria of the Container Approval Process (CAP)?

## Producer

Does the project have a contactable producer?
Does this producer offer support or proprietary features?
Is there funding or financing from third parties?
