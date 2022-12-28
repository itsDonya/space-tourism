<template>
  <section class="flex items-center justify-center gap-20">
    <NavbarTechnology />

    <div class="w-4/12 flex flex-col items-start gap-6">
      <h5
        class="font-barlow text-lg tracking-[2px] uppercase text-light-gray/70"
      >
        the terminology...
      </h5>
      <h1 class="text-white font-bellefair text-5xl uppercase">
        {{ technology.name }}
      </h1>
      <p class="text-light-gray leading-8">
        {{ technology.description }}
      </p>
    </div>

    <img
      class="w-96"
      :src="technology.images.portrait"
      :alt="technology.name"
    />
  </section>
</template>

<script>
import data from "../../static/data.json";
import NavbarTechnology from "../../components/navigation/NavbarTechnology.vue";
export default {
  components: {
    NavbarTechnology,
  },
  computed: {
    technology() {
      const technologyName = this.$route.path.split("/")[2];
      const technologyInfo = data.technology.find(
        (tech) => tech.pathName === technologyName
      );
      return technologyInfo;
    },
  },
};
</script>
