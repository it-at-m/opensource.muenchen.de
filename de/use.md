
<script setup>
import TagTile from "../.vitepress/components/TagTile.vue";
</script>

# Nutzen

Das Ökosystem der freien Software bietet unzählige Lösungen und Anwendungen.
Man findet freie Software in nahezu allen modernen Softwareprodukten.
Die Landeshauptstadt München betreibt eine Vielzahl von freien Anwendungen, die in verschiedenen Bereichen eingesetzt werden.
Dabei reicht das Spektrum von Verwaltungsanwendungen für den internen Gebrauch bis hin zu Anwendungen für Bürgerinnen und Bürger, die den Zugang zu öffentlichen Dienstleistungen erleichtern.

Unsere [strategischen Vorgaben](principles#rechtliche-und-politische-vorgaben) sehen dies ebenfalls vor:

> Wenn wirtschaftlich und technologisch oder strategisch sinnvoll, setzt die LHM priorisiert Open Source-Lösungen ein, um insbesondere Firmenabhängigkeiten zu vermeiden.
> Die LHM verfolgt diesen Ansatz sowohl im Anwendungs- als auch im Infrastruktur-Bereich.

Um existierende freie Software zu nutzen oder sogar weiter entwickeln zu können muss diese zunächst einer [Nutzbarkeitsanalyse](./usability-analysis.md) unterzogen werden.

## Anwendungen


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
:exclude="['eigenentwicklung']"
show-tags
show-excerpt
/>
</ClientOnly>



## Development

Unsere [Eigenentwicklungen](in-house-development.html) basieren auf einem Open Source Technologie-Stack.
Darüber hinaus setzen wir zahlreiche weitere Open-Source-Tools in der Softwareentwicklung ein.

<ClientOnly>
<TagTile
:available-tags="['development']"
:exclude="['eigenentwicklung']"
show-tags
show-excerpt
/>
</ClientOnly>
