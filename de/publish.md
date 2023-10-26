
<script setup>

import TagTile from "../.vitepress/components/TagTile.vue";
import TagFilter from "../.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref([]);
const availableTags = ref(['eigenentwicklung', 'kooperation']);
</script>



# Veröffentlichen

Sollten wir existierende freie Software nicht [nutzen](./use.html) oder [verbessern](./contribute.html) können, so entwickeln wir selbst freie Software.

Software-Eigenentwicklungen kommen vor allem dann zum Einsatz, wenn keine Lösungen am Markt verfügbar sind oder ein sehr hohes Maß an kommunaler Differenzierung notwendig ist, insbesondere bei kommunalen Fachanwendungen.
Da wir Eigenentwicklungen als Open-Source-Software zur Verfügung stellen, können auch andere Organisationen und Entwickler\*Innen von unserer Arbeit profitieren und sie weiterentwickeln.

Dazu haben wir den Auftrag und Rückhalt der Politik:

> Der entwickelte Quellcode wird öffentlich zugänglich gemacht und unter eine freizügige Open Source-Lizenz (z.B. EUPL, MIT) gestellt.

_aus Stadtrats-Beschluss [Neue Software im Open Source-Kontext entwickeln!](https://risi.muenchen.de/risi/antrag/detail/6289779)_

Die Landeshauptstadt München trägt durch die Nutzung von Open-Source-Software zum Geben und Nehmen im Bereich der öffentlichen Verwaltung bei.
Open Source ist die Grundlage für den Austausch von bereits Erreichtem.
Innerhalb der öffentlichen Verwaltung kann dieser Austausch dazu dienen, sowohl die Nachnutzung im Sinne des EfA[^efa] Prinzips zu unterstützen als auch durch eine größere Verbreitung zur Standardisierung beizutragen.
Außerhalb der öffentlichen Verwaltung dient er der Transparenz sowie dem Austausch mit der Wirtschaft.


## Referenzarchitektur für Eigenentwicklungen

In der Richtlinie „Landeshauptstadt München-Referenzarchitektur für Eigenentwicklungen“ wird der technische Aufbau von selbstentwickelter Software festgelegt.
Wir nutzen eine modularen Technologie-Stack zum Einsatz aus Open Source Komponenten:
So können Komponenten leicht ausgetauscht und aktualisiert werden, was die Wartbarkeit und Skalierbarkeit der Software verbessert.  
Open Source spielt so in der Referenzarchitektur für Eigenentwicklungen gleich zweifach eine große Rolle:
Zum einen setzen wir, wie oben ausgeführt, auf einen 100% Open Source Stack auf.
Zum anderen aber wird die Landeshauptstadt München sämtliche Eigenentwicklungen auf Basis einer Open-Source-Lizenz veröffentlichen.

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
