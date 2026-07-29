# Repositories

[Public Code](publish.html) is defined by free [licenses](licenses.html), but also by publicly accessible __source code__ and __artifacts__.


## Code

We want to give citizens, developers from other authorities, citizen developers, basically all interested people, the opportunity to use, understand, distribute and improve our code.


GitHub is the best-known public code repository for free software.
Users from the FOSS community search, share and discuss free code mainly on GitHub.
We follow the community and also use [GitHub for Public Code of the City of Munich](https://github.com/it-at-m/).
Through code management and [CI/CD](github-actions) on GitHub, we offer low-barrier participation for everyone.  
GitHub does not hold any restrictive rights to the code managed there; each project can determine its own license.
This leads to low vendor dependency, which is also easy to escape:
We are only tied to Git as free software for distributed code management.
This is also used by all other relevant platforms.
Like other free projects, e.g. [curl](https://daniel.haxx.se/blog/2021/01/28/what-if-github-is-the-devil/), we keep ourselves open to using other Git-based platforms additionally or alternatively.

When we [contribute](./improve.html#code-contributions) to other software projects, we do so on the existing platform of the software project.

An important and relevant alternative for public administrations in Germany is [gitlab.opencode.de](https://gitlab.opencode.de).
We also run the [landeshauptstadt-muenchen](https://gitlab.opencode.de/groups/landeshauptstadt-muenchen) group there.
Even if we do not primarily publish on gitlab.opencode.de, we are prepared to mirror repositories there on request. 
If we want to participate in free software projects from other public administration communities, we will only do so there if the projects allow merge requests.

In order not to force employees to use their real names on the Internet, employees are allowed to use pseudonyms.
However, all pseudonyms used are documented _internally_ in order to be able to trace which employees are acting publicly here.


## Artifacts

The concept of _Public Money Public Code_ obliges us to [publish](./publish.html) only the source code.
To make our software easy to use, we want to publish as many artifacts based on the source code as possible, such as built packages, container images or Helm charts.

* Container images, like our code, are built on GitHub and also made available in the `ghcr.io` registry (https://github.com/orgs/it-at-m/packages).
  * In addition to the container images, we also offer [Helm Charts](https://github.com/it-at-m/helm-charts) on [artifacthub.io org=it-at-m](https://artifacthub.io/packages/search?org=it-at-m) for use in Kubernetes.
* Java/Maven artifacts are published under the _groupId_ `en.muenchen` on [Maven Central](https://central.sonatype.com/search?q=de.muenchen).
* NPM packages are published in the package scope [`@muenchen` on npmjs.org](https://www.npmjs.com/search?q=%40muenchen).

## Repository Structure

Software repositories can be structured in various ways. Whether to choose a project repository (monorepo) or a multi-repo approach should always be a well-reasoned, project-specific decision.

Both options have specific strengths and weaknesses. In many cases, a project repository is recommended, but there are also valid reasons to opt for a multi-repo. We use both approaches: for example, the [digiwf-core](https://github.com/it-at-m/digiwf-core) project as a single-repo and the [dave-](https://github.com/orgs/it-at-m/repositories?q=dave&type=all&language=&sort=) projects as a multi-repo.

When in doubt, a [project repository](#project-repo) should be preferred.

This recommendation applies in particular to projects on GitHub, but is generally applicable to any Git repository (e.g., `git.muenchen.de`).

### Project Repo

A __project repo__ is a software development strategy in which the code for multiple related services within a project is managed in a single repository. This contrasts with __multirepos__, where each microservice is maintained in its own repository.

__Advantages of a project repo:__

* Dependencies between services within a project (e.g., a new feature that requires changes to both the frontend and backend) can be __developed, tested, and released together__—including pull requests, tests, and deployments.
* A project repo makes it easier for outsiders to __quickly identify which components belong together__.
* Developers can more easily set up __a complete development environment__ with all the necessary services.
* There is a central `README.md` that can provide [__clear documentation__](usability-analysis#dokumentation) for the entire project. In addition, a documentation website, either in a `/docs` directory or as a standalone site, is recommended.
* The __overview on GitHub__ (e.g., [github.com/orgs/it-at-m/repositories](https://github.com/orgs/it-at-m/repositories)) remains clear and organized, since fewer individual repositories are created.

A single project repository is particularly well-suited for projects in which many services are closely intertwined and interdependent.

### Multirepo

Arguments in favor of multirepos:

* Each microservice is assigned exactly one repository and one pipeline. This makes development more organized.
* A monorepo makes external collaboration more complex, since you always have to fork the entire project.
* A project consisting of different services using __different technologies__ would lead to code mixing in a monorepo and, in some cases, to merge conflicts that are difficult to resolve for people without knowledge of technology A or B.
* Pipelines are less complicated than in monorepos.
* __Less data__ than in monorepos: Cloning and tracking changes (e.g., with `git blame`) is faster.
* Bugs in the __main branch__ affect only one microservice, not the entire product or service.

Multi-repos are particularly well-suited for standalone services and, in particular, for libraries intended for use in other projects.

### Monorepo

> When we talk about a monorepo approach, it essentially means that there is only a single repository for the entire company. This repository contains all of the company’s projects, including both active and inactive ones.
> The best-known example of a monorepo in production is Google, which built its own source code management tool specifically to manage exactly one single repository. Meta Platforms, the company behind Facebook and Instagram, also essentially relies on a monorepo, using its Git-compatible in-house tool [Sapling](https://engineering.fb.com/2022/11/15/open-source/sapling-source-control-scalable/), which was released as open source at the end of 2022.
> A monorepo like this is incredibly huge and contains the history of (almost) all of the company’s projects.
> [^devops]
<!-- separate quote -->
> A monorepo is a single repository containing __multiple distinct projects__, with well-defined relationships. ([monorepo.tools](https://monorepo.tools/))

There are practically no limits to the size of a monorepo:

> Google, for example, is theorized to have the largest code repository ever, which has thousands of commits per day and is over 80 TBs large.
> (from [semaphoreci.com - What is a monorepo?](https://semaphoreci.com/blog/what-is-monorepo))

For example, a monorepo at LHM would exist if [Refarch](https://github.com/it-at-m/refarch), all Refarch projects, the [BayernID plugin](https://github.com/it-at-m/BayernID-Plugin) as an independent but utilized SSO service, and other projects were managed together in a single repository.

### Rules

* __[Documentation](usability-analysis#documentation)__: The numerous services in a monorepo should be documented in the `README.md` and include links to the respective files or directories.
* __Naming convention__: All multi-repositories for a project or product should be named using a consistent __prefix__ followed by a `-` (e.g., [dave-](https://github.com/orgs/it-at-m/repositories?q=dave&type=all&language=&sort=)).

[^devops]: Sujeevan Vijayakumaran: DevOps Wie IT-Projekte mit einem modernen Toolset und der richtigen Kultur gelingen ISBN 978-3-8362-9099-9 5.5.4 Was ist eigentlich mit Monorepos?
