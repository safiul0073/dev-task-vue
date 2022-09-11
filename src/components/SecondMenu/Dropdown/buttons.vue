<template>
  <button @click="isActive = true" class="w-full h-12 flex flex-row justify-between items-center px-3 relative text-white" :class="bgStyle">
    <h1>
        {{this.name}}
    </h1>
    <h1>
        {{"$" + this.amount}}
    </h1>
  </button>
  <Angle v-show="isActive" :bgOuter="bgOuter" :bgInner="bgInner"/>
</template>

<script>
import Angle from './Angle.vue';
export default {
    props: {
        bgStyle: {
            type: String,
            default: "white"
        },
        name: {
            type: String,
            default: "Home"
        },
        amount: {
            type: String,
            default: "10000"
        },
        bgOuter: {type: String},
        bgInner: {type: String}
    },
    components: { Angle },
    data: function () {
        return {
            isActive: false,
        }
    }
}
</script>

<style>

</style>