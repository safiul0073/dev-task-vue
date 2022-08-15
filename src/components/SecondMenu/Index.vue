<template>
  <div class="h-16 w-full flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
    <BalanceButton />
    <div class="mx-auto bg-gray-100 h-10 rounded-full flex flex-row justify-between">
       <Button v-for="(item, index) in this.routes" :key="index" :route="item" :name="index" />
    </div>
  </div>
</template>

<script>
import BalanceButton from './BalanceButton.vue';
import Button from './Button.vue';
export default {
    components: { BalanceButton, Button },
    data: function () {
        return {
            routes: {
                dash: '/dashboard',
                Equity: '/dashboard/equity',
                Assets: '/dashboard/assets',
                Liabilities: '/dashboard/liabilities',
                Combo: '/dashboard/combo',
            }
        }
    },
}
</script>

<style>

</style>