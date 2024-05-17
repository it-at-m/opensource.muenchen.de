<script setup>
import TagTile from "./.vitepress/components/TagTile.vue";
</script>


## Reference Architecture for in-house development {#refarch}

The guideline "City of Munich Reference Architecture for Self-Developed Software" defines the technical structure of self-developed software.
To ensure optimal maintainability and scalability of the software, we rely on a modular technology stack of open source components.
This allows us to easily exchange and update components.
Open source plays a dual role in the reference architecture for in-house developments:
On the one hand, as explained above, we rely on a 100% open source stack.


<TagTile
:available-tags="['devstack']"
/>

On the other hand, how ever, the City of Munich will publish all in-house developments on the basis of an open source [license](licenses).
