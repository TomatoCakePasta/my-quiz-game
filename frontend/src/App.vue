<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      width="320"
      temporary
    >
      <!-- user icon -->
      <template v-slot:prepend>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          subtitle="Logged in"
          class="menu-item"
        >
        Nancy
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item prepend-icon="mdi-trophy-outline" value="tornament" class="menu-item">大会に参加</v-list-item>
          <v-list-item prepend-icon="mdi-school-outline"  value="practice" class="menu-item">大会に参加</v-list-item>
          <v-list-item prepend-icon="mdi-account-outline" value="mypage" class="menu-item">マイページ</v-list-item>
          <v-list-item prepend-icon="mdi-note-edit-outline"  value="request" class="menu-item">問題応募</v-list-item>
        </v-list>

        <!-- mode select -->
        
      </template>
    </v-navigation-drawer>

    <!-- menu select -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Quiz Game</v-app-bar-title>
    </v-app-bar>

    <!-- main content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- side content -->
    <v-navigation-drawer
      location="right"
      permanent
      class="side-content"
      >
      

    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts" setup>
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
