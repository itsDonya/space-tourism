<template>
  <div
    class="w-screen h-screen py-12 bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-fixed bg-cover"
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
