<template>
  <h1 class="text-white text-[150px] font-bellefair uppercase">{{ text }}</h1>
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
