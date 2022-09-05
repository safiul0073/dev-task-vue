<template>
  <button class="w-full h-12 flex flex-row justify-between items-center px-3 text-white" :class="bgStyle">
    <h1>
        {{this.name}}
    </h1>
    <h1>
        {{"$" + this.amount}}
    </h1>
  </button>
</template>

<script>
export default {
    props: {
        bgStyle: {
            type: String, default: "white"
        },
        name: {
            type: String, default: "Home"
        },
        amount: {
            type: String, default: "10000"
        }
    }
}
</script>

<style>

</style>