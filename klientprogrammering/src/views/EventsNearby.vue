<template>
  <div class="eventsnearby">
      <h1>Eventsnearby</h1>
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

.search-box{
  background-color: #822c57;
}


</style>