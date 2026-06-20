<template>
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
            <v-list-item prepend-icon="mdi-trophy-outline" value="tornament" class="menu-item" to="tournament">大会に参加</v-list-item>
            <v-list-item prepend-icon="mdi-school-outline"  value="practice" class="menu-item" to="practice">個人練習</v-list-item>
            <v-list-item prepend-icon="mdi-account-outline" value="mypage" class="menu-item" to="mypage">マイページ</v-list-item>
            <v-list-item prepend-icon="mdi-note-edit-outline"  value="request" class="menu-item" to="makequiz">問題応募</v-list-item>
        </v-list>
    
        <!-- mode select -->
        
        </template>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
    const drawer = defineModel<boolean>("drawer")
</script>