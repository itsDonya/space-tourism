<template>
  <div class="w-4/12 flex flex-col items-start gap-7">
    <h3 class="font-bellefair text-3xl uppercase text-light-gray/70">
      {{ crew.role }}
    </h3>
    <h1 class="text-white font-bellefair text-5xl uppercase">
      {{ crew.name }}
    </h1>
    <p class="text-light-gray leading-8">{{ crew.bio }}</p>
    <!-- Menu -->
    <NavbarCrew />
    <img
      class="absolute bottom-0 right-0"
      :src="crew.images.png"
      :alt="crew.name"
    />
  </div>
</template>

<script>
import data from "../../static/data.json";
import NavbarCrew from "../../components/navigation/NavbarCrew.vue";
export default {
  components: {
    NavbarCrew,
  },
  computed: {
    crew() {
      const crewName = this.$route.path.split("/")[2];
      const crewInfo = data.crew.find((crew) => crew.pathName === crewName);
      return crewInfo;
    },
  },
};
</script>
