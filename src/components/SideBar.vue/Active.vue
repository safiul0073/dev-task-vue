<template>
    <Transition 
        :enter-active-class="$route.meta.enterClass"
        :leave-active-class="$route.meta.leaveClass"
        name="fade"
        mode="out-in"
    >
    <div class="flex items-center justify-between py-1 px-4 ">
        <div class="flex items-center ">
            <div class="flex items-center ">
                    <div :class="styleReturn('w-60', 'w-16')" class="bg-gray-400 flex justify-between items-center content-center h-10 rounded-l-full transition-all duration-500 ease-in-out relative">
                        <div class="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center fixed">
                         <slot> </slot>
                        </div>
                        <span class="transition-all duration-500 ease-in-out ml-12" :class="styleReturn('',  'hidden')">{{title}}</span>
                    </div>
                        <Shapes :isHovering="isHovering" />
                </div>
        </div>
    </div>
    </Transition>
</template>

<script>
import Shapes from './RoundEngle.vue';
export default {
    components: { Shapes },
    props: {
        isHovering: {type: Boolean, default: false},
        title: { type: String, default: "Dashboard" },
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
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s ease;
    }
</style>