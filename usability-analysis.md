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

The focus is on the potential maintainability and security of the software.


## Security

Publicly accessible code can be easily checked for security vulnerabilities.
One advantage of free software is the transparency of the source code, which means that security researchers and developers can check open source software independently.
However, it must be checked whether IT security is also actively ensured and whether suitable tools are available for this purpose:

* Is a list of _Common Vulnerabilities and Exposures_ (CVE) available and is it processed according to urgency.
* Are all dependencies not only visible, but are potential risks also transparent through a _Software Bill of Materials_ in these dependencies?
* If external audits are available (e.g. as with [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)), these can be evaluated positively

## Documentation

Comprehensive software documentation is essential for all software, especially for software that is to be used or modified by others.

The following documentation must be available:

* User documentation
* Developer, installation and maintenance documentation.

All documentation must comprehensively describe __all__ the technical functions and user interfaces of the software.
This includes information about the software itself, its use, the API and installation and maintenance instructions.

It is important that the documentation is freely accessible on the Internet and provided in open formats (e.g. Markdown, HTML, Text).
It must be possible to submit suggestions for improving the documentation.

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
We therefore check whether a publicly accessible _Continuous Integration and Deployment_ (CI/CD) is available.

* Are source code, artifacts, releases, containers etc. available in common [repositories](repositories).
* Are there [documented](#documentation) __configuration options__ for:
  * Resources (computing power, memory, etc.)
  * Resource types (e.g. different storage types such as block file, object)
  * Security settings (e.g. use of local certification authorities, security contexts)

[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365
