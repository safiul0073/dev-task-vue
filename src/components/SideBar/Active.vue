<template>
    <div class="flex items-center justify-between py-1 px-4">
        <div class="flex items-center  ">
            <div class="flex items-center ">
                    <div :class="bgStyle +  styleReturn(' w-60', ' w-16')" class=" flex justify-between items-center content-center h-10 rounded-l-full transition-all duration-500 ease-in-out relative">
                        <div class="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center fixed">
                         <slot> </slot>
                        </div>
                        <span class="transition-all duration-500 ease-in-out ml-12 text-gray-800 text-lg font-sans" :class="styleReturn('',  'hidden')">{{title}}</span>
                    </div>
                        <Shapes :bgStyle="bgStyle" :isHovering="isHovering" />
                </div>
        </div>
    </div>

</template>

<script>
import Shapes from './RoundEngle.vue';
export default {
    components: { Shapes },
    props: {
        isHovering: {type: Boolean, default: false},
        title: { type: String, default: "Dashboard" },
        bgStyle: { type: String, default: "bg-gray-600" },
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

</style>