<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue/Index.vue";
</script>

<template>
  <div class="relative min-h-screen flex min-w-fit bg-gray-400">
    
    <SideBar />
    <div class="w-full">
      <Header />
      <div class="flex-1 flex flex-col overflow-y-auto">
        
        <router-view />
        
      </div>
    </div>
  </div>
</template>


