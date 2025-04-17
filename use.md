<script setup>
import TagTile from ".vitepress/components/TagTile.vue";
</script>

# Use

The free software ecosystem offers countless solutions and applications.
Without the use of free software, modern software development is no longer imaginable.
You can find free software in almost all modern software products.

The City of Munich operates a large number of applications that are used in various areas.
These range from administrative applications for internal use to applications for citizens that facilitate access to public services.
Our [strategic guidelines](principles#legal-and-political-requirements) also provide for this:

> If economically and technologically or strategically sensible, LHM prioritizes the use of open source solutions, in particular to avoid company dependencies.
> LHM pursues this approach in both the application and infrastructure areas.


## Applications

<ClientOnly>
<TagTile
:available-tags="['application']"
:exclude="['eigenentwicklung']"
show-tags
show-excerpt
/>
</ClientOnly>

## Infrastructure

The infrastructure needed to run and develop software applications has always been based on open source software.
Linux, servers, databases, encryption and programming languages are mostly open source.

The City of Munich's own data center includes an extensive portfolio of central specialist applications and services.
In addition, all the necessary resources and services required to operate these applications and the underlying infrastructure are provided.


<ClientOnly>
<TagTile
:available-tags="['infrastruktur']" 
:exclude="['eigenentwicklung']"
show-tags
show-excerpt
/>
</ClientOnly>

## Usability Analysis

In order to use or even further develop existing open-source software, it must first undergo a usability analysis. This usability analysis should encompass any open-source software, whether it is intended to be used as a framework, library, development tools, or as completed software.

The analysis is conducted based on the following criteria:

* Popularity
* Code Review
* DevOps
* Security
* Producer

### Popularity

    Are there already relevant reference customers from this field? Community activities on GitHub, such as the number of stars, watchers, contributors, or pull requests, can indicate widespread adoption, but this may not necessarily be the case.

### Code Review

    The evaluation of the code should be carried out by an experienced developer who is familiar with the relevant language or framework being used. 
    The following questions should be answered:
    Is a framework being used? If not, what is the reasoning? If so, the selection and integration should be evaluated.
    Are there any other dependencies (e.g., Redis, Memcached, Elasticsearch), and are these being used in stable, up-to-date versions?
    Is it a web-based application? If not, why? Perhaps due to large data volumes or graphics, such as CAD.
    Is there a (preferably external) coding style guide? Is the code written in a comprehensible manner with meaningful names for variables and methods? 
    What is the estimated onboarding time for a developer?
    The focus is on the potential maintainability and security of the software.

### DevOps

    For the assessment, the last significant contribution (not a documentation update) should be no older than three months, and the last release should be no older than six months.
    Are there current pull requests available, and what is the number of closed or merged pull requests? Is publicly accessible Continuous Integration and Deployment (CI/CD) available?
    Are code, artifacts, releases, containers, etc., available in common repositories?
    Provision of runnable containers for Kubernetes or, ideally, OpenShift. The Dockerfile should meet the internal quality requirements (e.g., LHM standards).

### Security

    It should be checked whether security scans are available and if there are current Common Vulnerabilities and Exposures (CVEs). Is the dependency graph clean and viewable, for example, on GitHub?
    Are there external audits, such as those for curl? Is there a Software Bill of Materials (SBOM) available?
    For container applications, should the Dockerfile meet the quality criteria of the Container Approval Process (CAP)?

### Producer

    Does the project have a contactable producer? Does this producer offer support or proprietary features? Is there funding or financing from third parties?