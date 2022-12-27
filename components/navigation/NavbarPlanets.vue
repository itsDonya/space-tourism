<template>
  <nav class="flex items-center justify-center gap-6 h-10">
    <NavLink
      v-for="(link, i) in links"
      :key="i"
      :path="link.path"
      :title="link.title"
    />
  </nav>
</template>

<script>
import NavLink from "../UI/NavLink.vue";
export default {
  data() {
    return {
      links: [
        {
          title: "moon",
          path: "/destination/moon",
        },
        {
          title: "mars",
          path: "/destination/mars",
        },
        {
          title: "europa",
          path: "/destination/europa",
        },
        {
          title: "titan",
          path: "/destination/titan",
        },
      ],
    };
  },
  components: {
    NavLink,
  },
};
</script>
