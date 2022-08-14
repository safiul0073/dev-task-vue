<template>
  <div class="h-16 w-full flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
    <BalanceButton />
    <div class="mx-auto bg-gray-100 w-96 h-10 rounded-full flex flex-row">
       <Button name="Dashboard" />
       <Button name="Dashboard" />
       <Button name="Dashboard" />
       <Button name="Dashboard" />
    </div>
  </div>
</template>

<script>
import BalanceButton from './BalanceButton.vue';
import Button from './Button.vue';
export default {
    components: { BalanceButton, Button }
}
</script>

<style>

</style>