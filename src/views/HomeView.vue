<template>
    <div class="grid grid-cols-2 gap-2">
  <div><ClassesChart/></div>
  <div><TypesChart/></div>

  </div>
</template>

<script>
import  ClassesChart  from '@/components/charts/ClassesChart.vue'
import  TypesChart  from '@/components/charts/TypesChart.vue'
export default {
  components: {
    ClassesChart,
    TypesChart,
  }};
</script>

<style setup></style>