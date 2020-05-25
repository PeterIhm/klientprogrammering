<template>
  <div class="eventsnearby">
      <h1>What's the buzz hos dig?</h1>

      <p>Här visas de 10 senaste brotten som begåtts i närheten av din plats</p>
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