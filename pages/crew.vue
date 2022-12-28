<template>
  <article class="w-full pl-24 flex flex-col items-start gap-14">
    <BaseHeading class="" number="02" text="meet your crew" />
    <nuxt />
  </article>
</template>

<script>
import BaseHeading from "../components/UI/BaseHeading.vue";
export default {
  layout: "crew",
  components: {
    BaseHeading,
  },
};
</script>
