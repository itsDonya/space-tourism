<template>
  <header class="w-full pl-24 flex items-center justify-between">
    <!-- Logo -->
    <img src="/logo.svg" alt="Logo" />

    <!-- Middle absolute line -->
    <span class="w-[30rem] h-0.5 bg-white/20 absolute left-[17%] z-20"></span>

    <!-- Top navbar -->
    <Navbar />
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
