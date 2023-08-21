<template>
  <section class="app-main">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  setup() {},
};
</script>
