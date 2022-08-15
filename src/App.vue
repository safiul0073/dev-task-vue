<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header/Index.vue";
import SideBar from "./components/SideBar/Index.vue";
export default {
  components: {
    Header,
    SideBar,
    RouterLink,
    RouterView
  },
  mounted() {
    if (this.$route.path === "/") {
      this.$router.push("/dashboard");
    }
  }
}
</script>

<template>
  <div class=" min-h-screen flex min-w-fit bg-gray-400 relative">
    
    <SideBar />
    <div class=" w-[calc(100%_-_78px)] absolute left-[78px] -z-0">
      <Header />
      <div class="w-full">
        
        <router-view />
        
      </div>
    </div>
  </div>
</template>


