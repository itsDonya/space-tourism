<template>
  <div class="w-full flex justify-center items-center gap-8">
    <section class="w-5/12 flex flex-col items-center justify-center">
      <transition>
        <img :src="planet.images.png" :alt="planet.name" />
      </transition>
    </section>
    <section
      class="w-4/12 px-14 flex flex-col items-start gap-8 justify-center"
    >
      <NavbarPlanets />
      <h1 class="text-white font-bellefair text-8xl uppercase">
        {{ planet.name }}
      </h1>
      <p class="text-light-gray leading-8">{{ planet.description }}</p>
      <hr class="w-full h-0.5 bg-white-10" />
      <div class="w-full flex justify-between">
        <div>
          <h6
            class="text-[14px] font-barlow tracking-[2.35px] uppercase text-light-gray"
          >
            avg. distance
          </h6>
          <h5 class="text-3xl font-bellefair uppercase text-white">
            {{ planet.distance }}
          </h5>
        </div>
        <div>
          <h6
            class="text-[14px] font-barlow tracking-[2.35px] uppercase text-light-gray"
          >
            est. travel time
          </h6>
          <h5 class="text-3xl font-bellefair uppercase text-white">
            {{ planet.travel }}
          </h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from "../../static/data.json";
import NavbarPlanets from "../../components/navigation/NavbarPlanets.vue";
export default {
  components: {
    NavbarPlanets,
  },
  computed: {
    planet() {
      const planetName = this.$route.path.split("/")[2];
      const planetInfo = data.destinations.find(
        (planet) => planet.name === planetName
      );
      return planetInfo;
    },
  },
};
</script>
