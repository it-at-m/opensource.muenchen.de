
<script setup>
import TagTile from ".vitepress/components/TagTile.vue";
import TagFilter from ".vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref(['eigenentwicklung', 'kooperation'])
</script>

# Publish

If we cannot [use](./use.html) or [improve](./contribute.html) existing free software, we develop free software ourselves.

Especially for municipal specialized applications, someone often has to take the first step.  
Whenever we decide to develop software ourselves, it happens openly and freely.

We also have the backing of politicians for this:

> The developed source code is made publicly available and placed under a permissive open source license (e.g. EUPL, MIT).

_from City Council motion [Develop new software in an open source context!](https://risi.muenchen.de/risi/antrag/detail/6289779)_

Thus, the motivation, out of ensuring digital sovereignty, is supplemented by the aspect of "spreading".
In this way, the state capital of Munich contributes to the give and take in the area of public administration - open source is used as a basis for sharing
of what has already been achieved.
Within public administration, this exchange can serve both to support reuse in the sense of the "One for All" principle,
and to contribute to standardization through wider dissemination.
Outside the public administration it serves the transparency as well as the exchange with the economy and can become also nucleus of new Startups.

## Reference Architecture for in-house development

Software in-house development refers to software that is developed by the City of Munich itself.
This is necessary in cases where no suitable software is available on the market. Examples of this are listed in the chapter "Important activities in 2021".
The guideline adopted for this purpose defines the technical structure of such self-developed software.
In accordance with the guideline, a very modern, modular technology stack is used, consisting entirely of open source components:
the "State Capital Munich Reference Architecture for Self-Development".

<TagTile
:tag-names="['refarchinfrastruktur']"
/>

In the area of proprietary software developments, which are primarily used where either no solutions can be found on the market,
or where a very high degree of municipal differentiation is necessary for the City of Munich, open source plays a major role in two ways:
On the one hand, the proprietary software developments are based on a 100% open source stack, as explained above.
On the other hand, however, the City of Munich will publish all of its own developments on the basis of an open source license, as stipulated in its IT strategy.
In 2022, the first projects will be published. Some of the projects will even be developed on a public platform.

In 2021, it was therefore decided to develop the strategically important platform for the digitization of core processes (i.e., the core tasks of the City of Munich, such as the registration system),
in contrast to the support processes (finance, HR, IT), to be implemented using a modular architecture based on open source components.
The above-mentioned open source-based reference architecture is also used in the area of in-house development.

## Overview

<TagFilter
  v-model="selectedFilters"
  :available-tags="['eigenentwicklung', 'kooperation']"
/>

<TagTile 
  :tag-names="selectedFilters"
  show-tags
  show-excerpt
/>