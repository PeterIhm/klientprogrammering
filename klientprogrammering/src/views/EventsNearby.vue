<template>
  <div class="eventsnearby">
      <h1>Eventsnearby</h1>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." />
        <select class="search-dropdown">
          <option value="0">Stockholms län</option>
        </select>
        <button class="search-button">Search</button>
      </div>
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