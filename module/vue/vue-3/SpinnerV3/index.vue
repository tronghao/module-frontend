<template>
  <div
    v-show="loading"
    v-loading="loading"
    class="fixed left-0 right-0 top-0 bottom-0 z-[1000]"
  ></div>
</template>

<script>
export default {
  name: "SpinnerV3",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>
