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

In order to use or even further develop existing open-source software, it must first undergo a [usability analysis](./usability-analysis.md).

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

## Development

Our [in-house developments](in-house-development.html) are based on an open source technology stack.
We also use numerous other open source tools in software development.


<ClientOnly>
<TagTile
:available-tags="['development']"
:exclude="['eigenentwicklung']"
show-tags
show-excerpt
/>
</ClientOnly>
