<template>
    <router-link to="/" class="pl-2">
        <Active :isHovering="isHovering" title="Dashbord" v-if="$route.fullPath === '/'"/>
        <InActive :isHovering="isHovering"  title="Dashbord" v-else />
    </router-link>
    <router-link to="/about" class="pl-2">
        <Active :isHovering="isHovering" title="About" v-if="$route.fullPath === '/about'"/>
        <InActive :isHovering="isHovering" title="About" v-else />
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
            hideStyle: "hidden",
            title: "Dashboard",
            animationStyle: "",
        };
    },
    methods: {
        styleReturn: function (preSt, postSt) {
            return this.isHovering ? preSt : postSt;
        }
    },
    
}
</script>

<style>

</style>