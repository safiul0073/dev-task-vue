<template>
    <div class="p-2">
        <svg v-if="!this.isHidden" @click="this.isHidden = true" class="w-8 h-8 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      <div v-if="this.isHidden"  class="relative bg-gray-200 w-72 h-12 rounded-full">
        <svg class="w-8 h-8 absolute text-gray-900 top-2 left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="enter somthink..." class="w-50 h-12 bg-gray-200 font-sans absolute right-14 outline-none text-gray-800">
        <svg @click="this.isHidden = false"  xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 absolute text-gray-500 left-60 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            isHidden: false,
        }
    },
}
</script>

<style>

</style>