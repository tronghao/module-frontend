export const code = {
  howToUse: `<SpinnerV3 :loading="loading" />`,
  example: `<script setup>
import { reactive } from 'vue';
import { SpinnerV3 } from "@/module";
const state = reactive({
    loading: false,
});
</script>

<template>
    <SpinnerV3 :loading="state.loading"></SpinnerV3>
</template>`,
};
