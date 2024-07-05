
<script setup>

import TagTile from "../.vitepress/components/TagTile.vue";
import TagFilter from "../.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref([]);
const availableTags = ref(['eigenentwicklung', 'kooperation']);
</script>



# Veröffentlichen

Nach dem Grundsatz [Public Money Public Code](https://publiccode.eu/de/) entwickeln wir selbst freie Software, sollten wir existierende freie Software nicht [nutzen](./use) oder [verbessern](./improve) können.

Software-Eigenentwicklungen kommen vor allem dann zum Einsatz, wenn keine Lösungen am Markt verfügbar sind oder ein sehr hohes Maß an kommunaler Differenzierung notwendig ist, insbesondere bei kommunalen Fachanwendungen.
Da wir [Eigenentwicklungen](./in-house-development) als Open-Source-Software zur Verfügung stellen, können auch andere Organisationen und Entwickler\*Innen von unserer Arbeit profitieren und sie weiterentwickeln.

Dazu haben wir den Auftrag und Rückhalt der Politik:

> Der entwickelte Quellcode wird öffentlich zugänglich gemacht und unter eine freizügige Open Source-Lizenz (z.B. EUPL, MIT) gestellt.

_aus Stadtrats-Beschluss [Neue Software im Open Source-Kontext entwickeln!](https://risi.muenchen.de/risi/antrag/detail/6289779)_

Die Landeshauptstadt München trägt durch die Nutzung von Open-Source-Software zum Geben und Nehmen im Bereich der öffentlichen Verwaltung bei.
Open Source ist die Grundlage für den Austausch von bereits Erreichtem.
Innerhalb der öffentlichen Verwaltung kann dieser Austausch dazu dienen, sowohl die Nachnutzung im Sinne des EfA[^efa] Prinzips zu unterstützen als auch durch eine größere Verbreitung zur Standardisierung beizutragen.
Außerhalb der öffentlichen Verwaltung dient er der Transparenz sowie dem Austausch mit der Wirtschaft.


## Übersicht

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
