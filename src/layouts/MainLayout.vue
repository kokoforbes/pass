<template>
  <q-layout view="lHh Lpr lFf">
    <app-navbar />
    <q-page-container class="container">
      <router-view />
    </q-page-container>
    <bottom-navbar v-if="width <= 1000" />
  </q-layout>
</template>

<script>
import AppNavbar from "src/components/AppNavbar.vue";
import BottomNavbar from "src/components/BottomNavbar.vue";
import { defineComponent } from "vue";
import { useWindowSize } from "src/composables/resize";

export default defineComponent({
  components: { AppNavbar },
  name: "MainLayout",

  components: {
    AppNavbar,
    BottomNavbar,
  },

  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  max-width: $max-width;
  @media (max-width: 1000px) {
    padding-bottom: 50px;
  }
}
</style>
