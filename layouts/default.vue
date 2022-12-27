<template>
  <div
    class="w-screen h-screen py-12 bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-fixed bg-cover"
  >
    <Header />
    <main class="w-full mt-32">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
