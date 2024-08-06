
<script setup>
import TagTile from "../.vitepress/components/TagTile.vue";
</script>

# Nutzen

Das Ökosystem der freien Software bietet unzählige Lösungen und Anwendungen für moderne Softwareentwicklung.
Ohne den Einsatz freier Software ist eine zeitgemäße Softwareentwicklung nicht mehr vorstellbar.
Man findet freie Software in nahezu allen modernen Softwareprodukten.
Die Bedeutung und der Einfluss der freien Software auf die Softwareentwicklung sind somit unverzichtbar und unumstritten.

Unsere [strategischen Vorgaben](principles#rechtliche-und-politische-vorgaben) sehen dies ebenfalls vor:

> Wenn wirtschaftlich und technologisch oder strategisch sinnvoll, setzt die LHM priorisiert Open Source-Lösungen ein, um insbesondere Firmenabhängigkeiten zu vermeiden.
> Die LHM verfolgt diesen Ansatz sowohl im Anwendungs- als auch im Infrastruktur-Bereich.


## Anwendungen

Die Landeshauptstadt München betreibt eine Vielzahl von Anwendungen, die in verschiedenen Bereichen eingesetzt werden.
Dabei reicht das Spektrum von Verwaltungsanwendungen für den internen Gebrauch bis hin zu Anwendungen für Bürgerinnen und Bürger, die den Zugang zu öffentlichen Dienstleistungen erleichtern.

<ClientOnly>
<TagTile
:available-tags="['application']"
:exclude="['eigenentwicklung']"
show-tags
show-excerpt
/>
</ClientOnly>

## Infrastruktur

Die zum Betrieb und zur Entwicklung von Softwareanwendungen benötigte Infrastruktur basiert seit jeher auf Open Source Software.
Linux, Server, Datenbanken, Verschlüsselung und Programmiersprachen sind größtenteils Open Source.

Das eigene Rechenzentrum der Landeshauptstadt München umfasst ein umfangreiches Portfolio an zentralen Fachanwendungen und Diensten.
Darüber hinaus werden alle notwendigen Ressourcen und Services bereitgestellt, die für den Betrieb dieser Anwendungen und der darunterliegenden Infrastruktur notwendig sind.

<ClientOnly>
<TagTile
:available-tags="['infrastruktur']"
show-tags
show-excerpt
/>
</ClientOnly>
