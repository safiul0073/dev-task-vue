<template>

  <div  :class="styleReturn('w-64', 'w-20')"
    @mouseover="isHovering = true" 
    @mouseout="isHovering = false"
        class="h-screen bg-slate-800 text-white rounded-br-lg transition-all duration-500 ease-in-out">
  <div class="h-20 pl-2 flex justify-center align-center content-center relative">
      <div class="py-2 flex flex-col transition-all duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>

          <h1 class="absolute top-10 right-0 transition-transform duration-500 ease-in-out" :class="styleReturn('', hideStyle)">TailwindCss</h1>
      </div>
  </div>

    <nav>
      <a href="#" class="pl-2">
        <div class="flex items-center justify-between py-2 px-4 ">
          <div class="flex items-center ">
            <div :class="styleReturn('w-60', 'w-16')" class="bg-gray-400 flex justify-between items-center content-center h-10 rounded-l-full transition-all duration-500 ease-in-out relative">
              <div class="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center fixed">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span class="transition-all duration-500 ease-in-out ml-12" :class="styleReturn('', hideStyle)">{{this.title}}</span>
            </div>
            <div class="bg-gray-400  h-5 w-5 absolute bottom-10 transition-all duration-500 ease-in-out" :class="styleReturn('left-[220px]', 'left-11')">
              <div class="bg-slate-800 w-full h-full rounded-br-2xl ">
              </div>
            </div>
              <div class="bg-gray-400  h-5 w-5 absolute top-10 left-11 transition-all duration-500 ease-in-out" :class="isHovering ?'left-[220px]': 'left-11'">
              <div class="bg-slate-800 w-full h-full rounded-tr-2xl ">
              </div>
            </div>

          </div>
        </div>
      </a>
    </nav>
  </div>

</template>

<script>
export default {
  data: function ()  {
    return {
      isHovering: false,
      defaultWidth: 'w-64',
      hideStyle: 'hidden',
      title: "Dashboard",
      animationStyle: '',
    }
  },

  methods: {
    styleReturn: function (preSt, postSt) {
      return this.isHovering ? preSt : postSt;
    }
  }
}
</script>

<style scoped>

</style>

