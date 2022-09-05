<template>
  <button
    @click="$emit('changeMenu')"
    class="
      bg-gray-600
      rounded-tr-[25px] rounded-tl-[25px]
      w-60
      h-10
      ml-4
      flex
      justify-between
      items-center
      px-2
      text-white text-md
      font-semibold
    "
  >
    <h1>Balances</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </button>
  <div
    class="
      w-60
      h-[484px]
      bg-gray-500
      absolute
      top-[40px]
      left-[16px]
      rounded-bl-[25px] rounded-br-[25px]
    "
  >
    <div class="w-full h-[444px] bg-gray-100 overflow-y-auto">
      <DropButton
        v-for="(item, index) in dropButtonsData" :key="index"
        :amount="item.amount"
        :bgStyle="item.bgStyle"
        :name="item.name"
      ></DropButton>
    </div>
    <div
      class="
        w-full
        h-[40px]
        bg-blue-700
        text-white
        flex flex-row
        justify-between
        px-4
        items-center
        text-lg
        rounded-bl-[25px] rounded-br-[25px]
      "
    >
      <h1>Equity</h1>
      <h1>$534534534.0990</h1>
    </div>
  </div>
</template>

<script>
import DropButton from "./Dropdown/buttons.vue";
export default {
  methods: {},
  components: { DropButton },
  data: function () {
    return {
      dropButtonsData: [
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-blue-400",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-gray-300",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-700",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-500",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
        {
          name: "dropButtons1",
          bgStyle: "bg-red-200",
          amount: "39343",
        },
      ],
    };
  },
};
</script>

<style>
</style>