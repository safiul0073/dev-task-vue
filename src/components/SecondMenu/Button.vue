<template>
<div>
    <h1 v-if="isActive" class="p-2 px-3 h-full rounded-full bg-gray-500 text-white">{{name}}</h1>
    <h1 v-else @click="isActive = true" class="p-2 px-3 h-full rounded-full  text-black">{{name}}</h1>
</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'World'
        }
    },
    data: function () {
        return {
            isActive: false,
        }
    },
}
</script>

<style>

</style>