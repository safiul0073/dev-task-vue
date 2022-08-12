<template>

    <router-link to="/" class="pl-2 ">
            <Active :isHovering="isHovering" title="Dashbord" v-if="$route.fullPath === '/'"> 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </Active>
            <InActive :isHovering="isHovering"  title="Dashbord" v-else > 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </InActive>
    </router-link>
    <router-link to="/about" class="pl-2">
        <Active :isHovering="isHovering" title="About" v-if="$route.fullPath === '/about'">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        </Active>
        <InActive :isHovering="isHovering" title="About" v-else > 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        </InActive>
    </router-link>
</template>

<script>
import Active from './Active.vue';
import InActive from './InActive.vue';
export default {
    components: { Active, InActive },
    props: {
        isHovering: {
            type: Boolean,
            default: false
        },
    },
    data: function () {
        return {
        };
    },
    methods: {
        styleReturn: function (preSt, postSt) {
            return this.isHovering ? preSt : postSt;
        }
    },
    
}
</script>

<style scoped>

</style>>

