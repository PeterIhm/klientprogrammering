<template>
  <div class="eventsnearby">
    <h1>Events nearby</h1>
  </div>
</template>
<script>
import BrottsplatsService from '@/services/services.js'
export default {
  mounted(){
    BrottsplatsService.getEventsNearby().then(data => console.log(data))

  }
}
</script>

<style>
h1{
  background-color: beige;
}
</style>