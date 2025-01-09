# Repositories

[Public Code](publish.html) is defined by free [licenses](licenses.html), but also by publicly accessible __source code__ and __artifacts__.


## Code

We want to give citizens, developers from other authorities, citizen developers, basically all interested people, the opportunity to use, understand, distribute and improve our code.


GitHub is the best-known public code repository for free software.
Users from the FOSS community search, share and discuss free code mainly on GitHub.
We follow the community and also use [GitHub for Public Code of the City of Munich](https://github.com/it-at-m/).
By managing code on GitHub, we offer low-threshold participation for everyone.  
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
  * In addition to the container images, we also provide [Helm Charts](https://github.com/it-at-m/helm-charts) for easy use in Kubernetes.
* Java/Maven artifacts are published under the _groupId_ `en.muenchen` on [Maven Central](https://central.sonatype.com/search?q=de.muenchen).
* NPM packages are published in the package scope [`@muenchen` on npmjs.org](https://www.npmjs.com/search?q=%40muenchen).
