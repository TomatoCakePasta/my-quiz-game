<script setup lang="ts">
const emit = defineEmits<{
  "toggle-menu": []
}>()
</script>
<template>    
    <v-app-bar>
      <v-app-bar-nav-icon @click="emit('toggle-menu')"></v-app-bar-nav-icon>
      <v-app-bar-title>Quiz Game</v-app-bar-title>
    </v-app-bar>
</template>    