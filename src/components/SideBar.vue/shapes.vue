<template>
    <div class="bg-gray-400  h-5 w-5 absolute bottom-10 transition-all duration-500 ease-in-out" :class="styleReturn('left-[220px]', 'left-11')">
        <div class="bg-slate-800 w-full h-full rounded-br-2xl ">
        </div>
    </div>
    <div class="bg-gray-400  h-5 w-5 absolute top-10 transition-all duration-500 ease-in-out" :class="isHovering ?'left-[220px]': 'left-11'">
        <div class="bg-slate-800 w-full h-full rounded-tr-2xl ">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isHovering: {
            type: Boolean,
            default: false
        },
    },
    data: function ()  {
        return {

        }
    },
    methods: {
        styleReturn: function (preSt, postSt) {
            return this.isHovering ? preSt : postSt;
        }
    }
}
</script>

<style>

</style>