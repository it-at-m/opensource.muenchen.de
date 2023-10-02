---
listtag: eigenentwicklung
sidebar: false
---

<script setup>
import TagTile from "../.vitepress/components/TagTile.vue";
</script>

# Veröffentlichen

Sollten wir existierende freie Software nicht [nutzen](./use.html) oder [verbessern](./contribute.html) können, so entwickeln wir selbst freie Software.

Software-Eigenentwicklungen kommen vor allem dort zum Einsatz, wo entweder keine Lösungen am Markt zu finden sind, oder für die Landeshauptstadt München ein sehr hohes Maß an kommunaler Differenzierung notwendig ist.
Vor allem bei kommunalen Fachanwendungen muss oft jemand den ersten Schritt tun.  

Immer wenn wir uns entscheiden Software selbst zu entwickeln, entwicklen wir Open-Source-Sofware.


Dazu haben wir auch den Auftrag und Rückhalt der Politik:

> Der entwickelte Quellcode wird öffentlich zugänglich gemacht und unter eine freizügige Open Source-Lizenz (z.B. EUPL, MIT) gestellt.

_aus Stadtrats-Antrag [Neue Software im Open Source-Kontext entwickeln!](https://risi.muenchen.de/risi/antrag/detail/6289779)_

Die Landeshauptstadt München trägt so dadurch zum Geben und Nehmen im Bereich der öffentlichen Verwaltung bei - Open Source wird als Grundlage für den Austausch 
von bereits Erreichtem genutzt. 
Innerhalb der öffentlichen Verwaltung kann dieser Austausch dazu dienen, sowohl die Nachnutzung im Sinne des EfA[^1] Prinzips zu unterstützen, 
als auch durch eine größere Verbreitung zur Standardisierung beizutragen. 
Außerhalb der öffentlichen Verwaltung dient er der Transparenz sowie dem Austausch mit der Wirtschaft.

## Referenzarchitektur für Eigenentwicklungen

In der Richtlinie „Landeshauptstadt München-Referenzarchitektur für Eigenentwicklungen“ wird der technische Aufbau von solch selbstentwickelter Software festgelegt.
Der Richtlinie entsprechend kommt ein sehr moderner, modularer Technologie-Stack zum Einsatz, der vollständig aus Open Source Komponenten besteht:

Abbildung 3: „Landeshauptstadt München-Referenzarchitektur für Eigenentwicklungen“: Der Architektur-Stack für Software-Eigenentwicklungen besteht vollständig aus Open Source Komponenten

Open Source spielt so in der Referenzarchitektur für Eigenentwicklungen gleich zweifach eine große Rolle:
Zum einen setzen wir wie oben ausgeführt auf einen 100% Open Source Stack auf.
Zum anderen aber wird die Landeshauptstadt München sämtliche Eigenentwicklungen auf Basis einer Open-Source-Lizenz veröffentlichen.


<TagTile
  :tag-names="['eigenentwicklung', 'kooperation']"
  show-tags
  show-excerpt
/>

[^1]: "Einer für Alle"
