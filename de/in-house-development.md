<script setup>
import TagTile from "../.vitepress/components/TagTile.vue";
</script>

## Referenzarchitektur für Eigenentwicklungen {#refarch}

In der Richtlinie „Landeshauptstadt München-Referenzarchitektur für Eigenentwicklungen“ wird der technische Aufbau von selbstentwickelter Software festgelegt.
Um eine optimale Wartbarkeit und Skalierbarkeit der Software zu gewährleisten, setzen wir auf einen modularen Technologie-Stack aus Open Source Komponenten.
Dies ermöglicht es uns, Komponenten leicht auszutauschen und zu aktualisieren.
Open Source spielt in der Referenzarchitektur für Eigenentwicklungen eine doppelte Rolle:
Zum einen setzen wir, wie oben ausgeführt, auf einen 100% Open Source Stack.


<TagTile
:available-tags="['devstack']"
/>


Zum anderen aber wird die Landeshauptstadt München sämtliche Eigenentwicklungen auf Basis einer [Open-Source-Lizenz](./licenses#eigenentwicklungen) veröffentlichen.
