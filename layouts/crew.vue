<template>
  <div
    class="w-screen h-screen py-12 bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-fixed bg-cover"
  >
    <Header />
    <main class="w-full mt-12">
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
