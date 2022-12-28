<template>
  <article class="relative flex flex-col gap-8">
    <BaseHeading class="pl-24" number="03" text="space launch 101" />
    <nuxt />
  </article>
</template>

<script>
import BaseHeading from "../components/UI/BaseHeading.vue";
export default {
  layout: "technology",
  components: {
    BaseHeading,
  },
};
</script>
