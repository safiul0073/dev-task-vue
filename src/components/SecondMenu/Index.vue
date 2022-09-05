<template>
  <div
    class="h-16 w-full flex flex-col lg:flex-row gap-4 lg:gap-12 items-center"
  >
    <BalanceButton />
    <div
      class="
        mx-auto
        bg-gray-100
        h-10
        rounded-full
        flex flex-row
        justify-between
        transition-all
        duration-500
        ease-in-out
      "
    >
      <Button
        v-for="(item, index) in this.routes"
        :key="index"
        :route="item"
        :name="index"
      />
    </div>
  </div>
</template>

<script>
import BalanceButton from "./BalanceButton.vue";
import Button from "./Button.vue";
export default {
  components: { BalanceButton, Button },
  data: function () {
    return {
      routes: {
        dash: "/dashboard",
        Equity: "/dashboard/equity",
        Assets: "/dashboard/assets",
        Liabilities: "/dashboard/liabilities",
        Combo: "/dashboard/combo",
      },
    };
  },
};
</script>

<style  scoped>
body {
  direction: rtl;
}

.RadioButton .btn {
  width: 200px;
  float: left;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  font-size: 11px;
  min-height: 30px !important;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.btn-default {
  border: 1px solid gray;
  color: gray;
}

.btn-group > .btn:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:nth-child(2) {
  border-radius: 0;
}

.btn-group > .btn:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn.btn-default.btn-active {
  color: white;
}

.btn-group {
  clear: both;
  margin-top: 10px;
}

.RadioButton .btn:nth-child(3)::before {
  content: "";
  height: 100%;
  width: 100%;
  background: gray;
  position: absolute;
  top: 0;
  transition: 1s all ease;
  z-index: -1;
  left: 0px;
}

.btn-active:first-child ~ .btn::before {
  transform: translateX(calc(-4px - 200%));
}

.btn-active:nth-child(2) ~ .btn::before {
  transform: translateX(calc(-2px - 100%));
}
</style>