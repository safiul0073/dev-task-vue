<template>
  <div class="flex items-center justify-between py-1 px-4 ">
        <div class="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
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