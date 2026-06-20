<template>
  <v-app id="inspire">
    <!-- menu select -->
    <navigation-menu 
      v-model="drawer"
    />

    <!-- App Header -->
    <app-header 
      @toggle-menu="drawer = !drawer"
    />

    <!-- main content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- side content -->
    <right-side-bar />
  </v-app>
</template>

<script lang="ts" setup>
  // @ts-ignore: Vue SFC module may not expose default export in type inference
  import AppHeader from "../components/AppHeader.vue";
  // @ts-ignore: Vue SFC module may not expose default export in type inference
  import NavigationMenu from "../components/NavigationMenu.vue";
  // @ts-ignore: Vue SFC module may not expose default export in type inference
  import RightSideBar from "../components/RightSideBar.vue";
  import { ref } from "vue"

  const drawer = ref(false)
</script>

<style scoped>
.menu-item {
  font-size: 25px;
}

.side-content {
  width: 20% !important;
}
</style>
