# Usability analysis

In order to use or even further develop existing free software, it must first be subjected to a usability analysis.
All free software should undergo this usability analysis, regardless of whether it is to be used as a framework, library, [development tools](./in-house-development.html) or as [finished software](./use.html).

## Code review

The code should be evaluated by an experienced developer who is familiar with the relevant language or the framework used. 
The following questions should be answered:

* Is the code written in an understandable way with descriptive names for variables and methods?
* Is there a coding style guide and is it adhered to?
* Are there dependencies on other services (e.g. Redis, Memcached, Elasticsearch) and are these used in stable, up-to-date versions?
* Is a framework used? If not, what is the reason? If yes, selection and integration should be evaluated.
* How long is the estimated training period for a developer?
* All functions should be provided not only via the graphical user interface (GUI), but also via a general, non-proprietary, and comprehensive __programming interface__ (API). Ideally, this should include the corresponding [OpenAPI spec](https://www.openapis.org/).

The focus is on the potential maintainability and security of the software.


## Security

Publicly accessible code can be easily checked for security vulnerabilities.
One advantage of free software is the transparency of the source code, which means that security researchers and developers can check open source software independently.
However, it must be checked whether IT security is also actively ensured and whether suitable tools are available for this purpose:

* Is a list of _Common Vulnerabilities and Exposures_ (CVE) available and is it processed according to urgency.
* Are all dependencies not only visible, but are potential risks also transparent through a _Software Bill of Materials_ in these dependencies?
* If external audits are available (e.g. as with [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)), these can be evaluated positively

## Documentation

Comprehensive [documentation](https://opensource.com/article/20/3/documentation) is essential for all software, especially open source software that is intended to be used or modified by others. It ensures transparency, traceability, and ease of use and further development.
Clear and detailed documentation, both in the source code and in accompanying files, is a fundamental prerequisite for ensuring the accessibility and usability of the software.

Every software project must provide *either* a structured documentation folder `/docs` *or* its own wiki or website.
The technical documentation should describe all functions, interfaces, and user interfaces of the software. This includes in particular:

* Use and user interfaces  
* API references  
* Installation and maintenance instructions  
* Technical background and architecture  

The technical documentation must be written in __English__ to be internationally understandable; other languages are useful.  

A __user manual__ should ideally be available **in two languages (German and English)**.  

The documentation must be **freely accessible on the internet** and provided in **open formats** (e.g., Markdown, HTML, text).
It must be possible to submit **suggestions for improving the documentation** (e.g., via pull requests).

Creating and maintaining documentation requires [10–20%](https://opensource.com/article/20/3/documentation) of development time.
It must be updated regularly to document any new or changed features.

Every [software repository](repositories) must contain a [README.md](https://opensource.guide/de/starting-a-project/#eine-readme-schreiben) in *English* in the main directory and must answer the following questions:

* What does this project do?
* Why is it useful?
* How can I use it or contribute to it?
* Where can I get support?


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
We therefore check whether a publicly accessible _Continuous Integration and Deployment_ (CI/CD) is available, including for our preferred [SaaS solutions](fossaas) as part of the exit strategy.

[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365
