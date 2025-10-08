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

## Documentation of Open Source Software

Comprehensive [documentation](https://opensource.com/article/20/3/documentation) is essential for any software, especially for open source projects that are intended to be used or modified by others. It ensures transparency, traceability, and facilitates easy use and further development.  
Clear and detailed documentation, both within the source code and in accompanying files, is a fundamental requirement to guarantee the accessibility and usability of the software.  

### Structure of Documentation

For effective and complete documentation, the following elements are required:

### 1. README.md

Each repository must contain a `README.md` file in the root directory.  
This file should include all sections of the [OSS Repository Template](https://github.com/it-at-m/oss-repository-en-template/blob/main/README.md) and be written **in English** to reach an international audience.  

A [README](https://opensource.guide/de/starting-a-project/#eine-readme-schreiben) should answer the following questions:

* What does this project do?  
* Why is it useful?  
* How can I use or contribute to it?  
* Where can I get support?

### 2. Technical Documentation (`/docs` or Website)

Each project must provide **either** a structured documentation folder `/docs`  
**or** a dedicated documentation website.  

The technical documentation should describe **all features, interfaces, and user interfaces** of the software. This includes in particular:

* Usage and user interfaces  
* API references  
* Installation and maintenance guides  
* Technical background and architecture  

Documentation should follow the **“English First”** principle to ensure international comprehensibility.  
For larger projects or multi-repositories, it can be implemented as a **website**.  

A user manual or product documentation should ideally be **bilingual (German and English)**.  

### Accessibility and Openness

Documentation must be **freely accessible on the internet** and provided in **open formats** (e.g., Markdown, HTML, Text).  
It should be possible to **submit suggestions for improving the documentation** (e.g., via pull requests or issues in the repository).

### Challenges in Documentation

Creating and maintaining documentation requires time and commitment. It must be updated regularly to reflect changes in the software.  
Missing or outdated documentation can lead to misunderstandings, errors, increased support effort, and a shortened product lifespan.  

### Best Practices for Effective Documentation

To ensure high-quality and sustainable documentation, the following principles should be observed:

1. **Consistent terminology:** Uniform terms promote clear communication.  
2. **Contribution guidelines:** Clear rules make it easier for the community to contribute to documentation.  
3. **Documentation templates:** Templates help capture information consistently and completely.  
4. **Up-to-dateness:** Every new or changed feature must be documented.  
5. **Regular review:** Quarterly updates ensure relevance and quality.  

### Conclusion

By implementing these measures, the documentation of open source software can be significantly improved, leading to higher user satisfaction and a vibrant, inclusive community.  
Effective documentation not only benefits users but also contributes to the long-term success of the project. It builds trust, lowers barriers for new contributions, and strengthens the community.

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
