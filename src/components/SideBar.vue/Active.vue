<template>
    <div class="flex items-center justify-between py-1 px-4 ">
        <div class="flex items-center ">
            <div class="flex items-center ">
                    <div :class="styleReturn('w-60', 'w-16')" class="bg-gray-400 flex justify-between items-center content-center h-10 rounded-l-full transition-all duration-500 ease-in-out relative">
                        <div class="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center fixed">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        </div>
                        <span class="transition-all duration-500 ease-in-out ml-12" :class="styleReturn('', hideStyle)">{{title}}</span>
                    </div>
                        <Shapes :isHovering="isHovering" />
                </div>
        </div>
    </div>
</template>

<script>
import Shapes from './Shapes.vue';
export default {
    components: { Shapes },
    props: {
        isHovering: {type: Boolean, default: false},
        title: { type: String, default: "Dashboard" },
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