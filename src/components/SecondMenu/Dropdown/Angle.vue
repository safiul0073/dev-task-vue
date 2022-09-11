<template>
  <div :class="bgOuter" class="absolute w-5 h-5 top-[-20px] bottom-2 ">
    <div  :class="bgInner" class=" w-full h-full rounded-br-2xl ">
        </div>
  </div>
  <div :class="bgOuter" class="absolute w-5 h-5 top-12 ">
    <div :class="bgInner" class=" w-full h-full rounded-tr-2xl ">
        </div>
  </div>
</template>

<script>
export default {
    props: {
        bgOuter: {type: String},
        bgInner: {type: String}
    }
}
</script>

<style>

</style>