<template>
<div>
    <router-link :to="route">
    <div v-if="$route.fullPath === route" class=" cursor-pointer px-6 flex items-center text-center h-full rounded-full bg-gray-500 text-white transition-all duration-500 ease-in-out">{{name}}</div>
    <div v-else class="px-6 cursor-pointer flex items-center text-center  h-full rounded-full  text-black">{{name}}</div>
    </router-link>
</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'World'
        },
        route: {
            type: String,
            default: '/dashboard/assets'
        },
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