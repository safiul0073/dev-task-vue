<template>
    <router-link :to="route" class="pl-2 ">
        <Active :isHovering="isHovering" :bgStyle="bgStyle" :title="title" v-if="$route.fullPath === route"> 
            <slot></slot>
        </Active>
            
        <InActive :isHovering="isHovering"  :title="title" v-else > 
            <slot></slot>
        </InActive>
    </router-link>
</template>

<script>
import Active from "./Active.vue";
import InActive from "./InActive.vue";
export default {
    components: { Active, InActive },
    props: {
        isHovering: {
            type: Boolean,
            default: false
        },
        route: {
            type: String,
            default: '/'
        },
        title: {
            type: String,
            default: 'Dashboard'
        },
        bgStyle: {
            type: String,
            default: 'bg-gray-400'
        },

    }
}
</script>

<style>

</style>