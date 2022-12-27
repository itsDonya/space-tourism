<template>
  <nuxt-link
    :class="{ 'exact-active': exactActive }"
    class="h-full text-white z-20 flex items-center justify-center uppercase hover:border-b-2 transition-all font-barlow tracking-[2px]"
    :to="path"
    ><span v-if="number" class="mr-2 font-bold">{{ number }}</span
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
    },
    exactActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.nuxt-link-active:not(.exact-active) {
  border-bottom: 2px solid white;
}
.exact-active.nuxt-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
