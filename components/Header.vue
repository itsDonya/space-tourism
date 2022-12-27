<template>
  <header class="w-full pl-24 flex items-center justify-between">
    <!-- Logo -->
    <img src="/logo.svg" alt="Logo" />

    <!-- Middle absolute line -->
    <span class="w-[30rem] h-0.5 bg-white/20 absolute left-[17%] z-20"></span>

    <!-- Top navbar -->
    <NavbarTop />
  </header>
</template>

<script>
import NavbarTop from "./navigation/NavbarTop.vue";
export default {
  components: {
    NavbarTop,
  },
};
</script>
