<template>
  <h5
    class="text-[28px] font-barlow tracking-[4.75px] text-light-gray uppercase"
  >
    {{ text }}
  </h5>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>
