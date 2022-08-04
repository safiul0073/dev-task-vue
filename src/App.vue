<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import LeftMenu from "./components/LeftMenu.vue";
</script>

<template>
  <div class="w-full max-h-screen">
    <Header />
    <LeftMenu />
  </div>

  <RouterView />
</template>


