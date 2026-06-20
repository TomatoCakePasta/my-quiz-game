<template>
    <v-navigation-drawer
        location="right"
        permanent
        class="side-content"
        >
        Right Side Bar
        <router-view name="sidebar" />
    </v-navigation-drawer>
</template>