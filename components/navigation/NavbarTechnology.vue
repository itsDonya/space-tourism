<template>
  <nav class="flex flex-col items-center gap-8">
    <nuxt-link
      class="w-20 h-20 text-white text-2xl flex items-center justify-center bg-inherit font-bellefair border-[1px] border-white/40 transition-all hover:border-white rounded-full"
      v-for="(link, i) in links"
      :key="i"
      :to="link"
      >{{ i + 1 }}</nuxt-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "/technology/launch-vehicle",
        "/technology/spaceport",
        "/technology/space-capsule",
      ],
    };
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  color: inherit;
  background-color: white;
  border-color: white;
}
</style>
