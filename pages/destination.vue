<template>
  <article class="flex flex-col gap-12">
    <BaseHeading class="pl-24" number="01" text="pick your destination" />
    <nuxt />
  </article>
</template>

<script>
import BaseHeading from "../components/UI/BaseHeading.vue";
export default {
  layout: "destination",
  components: {
    BaseHeading,
  },
};
</script>
