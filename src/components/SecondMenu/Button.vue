<template>
<div>
    <router-link :to="route">
    <div v-if="$route.fullPath === route" class=" cursor-pointer px-6 flex items-center text-center h-full rounded-full bg-gray-500 text-white transition-all duration-500 ease-in-out">
        <svg v-if="route == '/dashboard'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <div v-else>{{name}}</div>
    </div>
    <div v-else class="px-6 cursor-pointer flex items-center text-center  h-full rounded-full  text-black">
        <svg v-if="name == 'dash'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <div v-else>{{name}}</div>
    </div>
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