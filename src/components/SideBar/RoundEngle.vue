<template>
    <div class=" h-5 w-5 absolute bottom-10 transition-all duration-500 ease-in-out" :class="bgStyle + (isHovering ?' left-[220px]': ' left-11')">
        <div class="bg-slate-800 w-full h-full rounded-br-2xl ">
        </div>
    </div>
    <div class=" h-5 w-5 absolute top-10 transition-all duration-500 ease-in-out" :class="bgStyle + (isHovering ?' left-[220px]': ' left-11')">
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
        bgStyle: {
            type: String,
            default: "bg-gray-600"
        }
    },
    data: function ()  {
        return {

        }
    },

    methods: {
        
    }
}
</script>

<style>

</style>