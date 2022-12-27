<template>
  <nav class="relative w-7/12 h-24 bg-white/5">
    <!-- Frosted layer -->
    <div
      class="w-full h-full absolute left-0 top-0 backdrop-blur-[14px] z-10"
    ></div>

    <!-- Nav links -->
    <div
      class="w-full h-full z-20 flex items-center justify-center gap-14 font-barlow tracking-[2px]"
    >
      <NavLink title="Home" path="/" number="00" />
      <NavLink title="Destination" path="/destination" number="01" />
      <NavLink title="Crew" path="/crew" number="02" />
      <NavLink title="Technology" path="/technology" number="03" />
    </div>
  </nav>
</template>

<script>
import NavLink from "./UI/NavLink.vue";
export default {
  components: {
    NavLink,
  },
};
</script>
