<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar/Index.vue";
</script>

<template>
  <div class=" min-h-screen flex min-w-fit bg-gray-400">
    
    <SideBar />
    <div class="w-full">
      <Header />
      <div class="w-full">
        
        <router-view />
        
      </div>
    </div>
  </div>
</template>


