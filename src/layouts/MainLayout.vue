<template>
  <q-layout view="lHh Lpr lFf">
    <app-navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <bottom-navbar />
  </q-layout>
</template>

<script>
import AppNavbar from "src/components/AppNavbar.vue";
import BottomNavbar from "src/components/BottomNavbar.vue";
import { defineComponent, ref } from "vue";
import { useWindowSize } from "src/composables/resize";

export default defineComponent({
  components: { AppNavbar },
  name: "MainLayout",

  components: {
    AppNavbar,
    BottomNavbar,
  },

  setup() {
    return {
      // essentialLinks: linksList,
    };
  },
});
</script>
