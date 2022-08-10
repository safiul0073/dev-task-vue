<template>

</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    methods:{
        onClick(){
            this.$emit('click', this.title);
        }
    }
}
</script>

<style>

</style>