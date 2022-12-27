<template>
  <article class="flex items-center justify-evenly">
    <section class="w-1/2 flex justify-center items-center">
      <div class="w-7/12 p-2 flex flex-col justify-center items-start">
        <BaseHeading text="so, you want to travel" />
        <BaseTitleXl text="space" />
        <p class="text-light-gray leading-8">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
    </section>
    <section class="w-1/2 flex items-center justify-center">
      <ButtonExplore />
    </section>
  </article>
</template>

<script>
import BaseHeading from "../components/UI/BaseHeading.vue";
import BaseTitleXl from "../components/UI/BaseTitleXl.vue";
import ButtonExplore from "../components/UI/ButtonExplore.vue";
export default {
  components: {
    BaseHeading,
    BaseTitleXl,
    ButtonExplore,
  },
};
</script>
