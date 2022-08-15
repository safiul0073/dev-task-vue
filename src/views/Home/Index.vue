
<template>
  <div class="h-[calc(100vh_-_64px)] pl-2 p-1 bg-gray-300">
    <SecondMenu />
    <router-view></router-view>
  </div>
</template>
<script >
import SecondMenu from '../../components/SecondMenu/Index.vue'
export default {
    components: { SecondMenu }
}
</script>