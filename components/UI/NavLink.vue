<template>
  <nuxt-link
    class="h-full text-white z-20 flex items-center justify-center uppercase hover:border-b-4 transition-all"
    :to="path"
    ><span class="mr-2 font-bold">{{ number }}</span
    >{{ title }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
      default: "/",
    },
    number: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style>
.nuxt-link-active {
  border-bottom: 4px solid white;
}
</style>
