<script setup>
import TagTile from ".vitepress/components/TagTile.vue";
import TagFilter from ".vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref([]);
const availableTags = ref(['eigenentwicklung', 'kooperation']);
</script>

# Publish

According to the principle [Public Money Public Code](https://publiccode.eu/en/), we develop free software ourselves if we cannot [use](./use) or [improve](./improve) existing free software.

In-house software developments are mainly used when no solutions are available on the market or a very high degree of municipal differentiation is required, especially for specialized municipal applications.
Since we make our own developments available as open source software, other organizations and developers can also benefit from our work and develop it further.

For this purpose, we have the mandate and backing of politicians:

> Der entwickelte Quellcode wird öffentlich zugänglich gemacht und unter eine freizügige Open Source-Lizenz (z.B. EUPL, MIT) gestellt.

> The developed source code is made publicly available and placed under a permissive open source license (e.g. EUPL, MIT).

_from City Council resolution [Develop new software in an open source context!](https://risi.muenchen.de/risi/antrag/detail/6289779)_

The City of Munich contributes to the give and take of public administration through the use of open source software.
Open source is the basis for the exchange of what has already been achieved.
Within the public administration, this exchange can serve both to support reuse in the sense of the EfA[^efa] principle and to contribute to standardization through wider dissemination.
Outside the public administration, it serves transparency as well as exchange with the business community.

## Reference Architecture for in-house development {#refarch}

The guideline "City of Munich Reference Architecture for Self-Developed Software" defines the technical structure of self-developed software.
To ensure optimal maintainability and scalability of the software, we rely on a modular technology stack of open source components.
This allows us to easily exchange and update components.
Open source plays a dual role in the reference architecture for in-house developments:
On the one hand, as explained above, we rely on a 100% open source stack.
On the other hand, however, the City of Munich will publish all in-house developments on the basis of an open source license.

## Overview

<ClientOnly>

<TagFilter
  v-model="selectedFilters"
  :available-tags="availableTags"
/>

<TagTile 
  :filter="selectedFilters"
  :available-tags="availableTags"
  show-tags
  show-excerpt
/>

</ClientOnly>

[^efa]: "Einer für Alle"
