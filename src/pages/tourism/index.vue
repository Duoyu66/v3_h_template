
<script setup lang="ts">
import {useStroe} from "../../store";
import {storeToRefs} from "pinia";
const main = useStroe();
const {weatherObj} = storeToRefs(main);
main.getWeather()
</script>
<template>
<h1>我是旅游模块</h1>
  {{weatherObj}}
</template>



<style scoped>

</style>