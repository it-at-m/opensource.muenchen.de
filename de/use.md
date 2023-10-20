
<script setup>
import TagTile from "../.vitepress/components/TagTile.vue";
import TagList from "../.vitepress/components/TagList.vue";
import TagFilter from "../.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref(['foss'])
</script>


# Nutzen

> Wir nutzen freie Software wo immer möglich!  

Das Ökosystem der freien Software bietet unzählige Lösungen und Anwendungen für moderne Softwareentwicklung.
Ohne den Einsatz freier Software ist eine zeitgemäße Softwareentwicklung nicht mehr vorstellbar.
Man findet freie Software in nahezu allen modernen Softwareprodukten.
Die Bedeutung und der Einfluss der freien Software auf die Softwareentwicklung sind somit unverzichtbar und unbestreitbar.

## E- und Open Government

Die Landeshauptstadt München betreibt zahlreiche Aufgabenfelder.
Zum Kernbereich des kommunalen Handeln zählt die Partizipation mit der Stadtgesellschaft.
Im E- und Open Government wird besonders häufig Open Source eingesetzt.

<TagTile :tag-names="['opengovernment']" />

## Infrastruktur

Die zum Betrieb und zur Entwicklung von Softwareanwendungen benötigte Infrastruktur basiert seit jeher auf Open Source Software.
Linux, Server, Datenbanken, Verschlüsselung und Programmiersprachen sind größtenteils Open Source.

Das eigene Rechenzentrum der Landeshauptstadt München umfasst ein umfangreiches Portfolio an Services, bestehend aus etwa 350 zentralen Fachanwendungen und zentralen Diensten, die im Rechenzentrum gehostet werden.
Dazu kommt alles, was für den Betrieb dieser Anwendungen und der darunterliegenden Infrastruktur notwendig ist.

<TagTile :tag-names="['infrastruktur']" />


## Gesamtübersicht

Insgesamt nutzen wir natürlich viel mehr freie Software.

<ClientOnly>

<TagFilter
v-model="selectedFilters"
/>

<TagTile
:tag-names="selectedFilters"
show-tags
/>

</ClientOnly>
