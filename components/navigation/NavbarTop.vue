<template>
  <nav class="relative w-7/12 h-24 bg-white/5">
    <!-- Frosted layer -->
    <div
      class="w-full h-full absolute left-0 top-0 backdrop-blur-[14px] z-10"
    ></div>

    <!-- Nav links -->
    <div class="w-full h-full z-20 flex items-center justify-center gap-14">
      <NavLink
        v-for="(link, i) in links"
        :key="i"
        :exact-active="link.exactActive"
        :title="link.title"
        :path="link.path"
        :number="link.number"
      />
    </div>
  </nav>
</template>

<script>
import NavLink from "../UI/NavLink.vue";
export default {
  components: {
    NavLink,
  },
  data() {
    return {
      links: [
        {
          title: "home",
          path: "/",
          number: "00",
          exactActive: true,
        },
        {
          title: "destination",
          path: "/destination",
          number: "01",
          exactActive: false,
        },
        {
          title: "crew",
          path: "/crew",
          number: "02",
          exactActive: false,
        },
        {
          title: "technology",
          path: "/technology",
          number: "03",
          exactActive: false,
        },
      ],
    };
  },
};
</script>
