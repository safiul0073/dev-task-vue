<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import LeftMenu from "./components/LeftMenu.vue";
</script>

<template>
  <div class=" relative min-h-screen flex min-w-fit">
    
    <LeftMenu />
    <div class="w-full">
      <Header />
      <div class="flex-1 flex flex-col overflow-y-auto">
        <RouterView>
          <router-view />
        </RouterView>
      </div>
    </div>
  </div>
</template>


