<template>
  <h5
    class="text-[28px] font-barlow tracking-[4.75px] text-light-gray uppercase"
  >
    <span class="font-extrabold text-gray-600">{{ number }}</span>
    {{ text }}
  </h5>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    number: {
      type: [String, Number],
    },
  },
};
</script>
