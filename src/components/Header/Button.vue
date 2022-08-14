<template>
  <!-- <div class=""> -->
    <div v-if="!isHidden" @click="isHidden = true" class="rounded-full text-gray-300 h-12 w-12 mx-2 flex justify-center items-center">
        <slot></slot>
    </div>

  <!-- </div> -->
    <div v-if="isHidden" @click="isHidden = false"  class="rounded-full bg-gray-300 text-gray-800 h-12 w-12 mx-2 flex justify-center items-center">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {

    },

    data: function () {
        return {
            isHidden: false,

        }
    },
}
</script>

<style>

</style>