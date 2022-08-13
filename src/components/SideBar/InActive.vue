<template>
  <div class="flex items-center justify-between py-1 px-4">
        <div class="flex items-center ">
            <div class="ml-2">
                <slot></slot>
            </div>
            
            <span class="transition-all duration-500 ease-in-out ml-4" :class="styleReturn('',  'hidden')">{{title}}</span>
        </div>
    </div>
</template>

<script>
export default {
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

<style>

</style>