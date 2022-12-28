<template>
  <nav class="flex items-center justify-center gap-2">
    <nuxt-link
      v-for="(link, i) in links"
      :key="i"
      :to="link"
      class="w-3 h-3 block rounded-full bg-light-gray/30"
    ></nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "/crew/douglas-hurley",
        "/crew/mark-shuttleworth",
        "/crew/victor-glover",
        "/crew/anousheh-ansari",
      ],
    };
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: white;
}
</style>
