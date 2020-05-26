<template>
  <div class="eventsnearby">
      <h1>What's the buzz hos dig?</h1>
      <p>Här visas de 10 senaste brotten som begåtts i närheten av din plats</p>
      <button onclick="navigator.geolocation.getCurrentPosition(pos => alert(pos.coords.longitude + ' ' + pos.coords.latitude))">Update</button>
    <div class="collapsibles">
      <ul>
        <li v-for="event in $store.state.events" :key="event.id">
          <div>
            <button class="sibling-hover">
              <p>{{event.title}}</p>
            </button>
            <div class="sibling-highlight">
              <br />
              <div class="content">
                <p>{{event.info}}</p>
              </div>
              <br />
              <div class="content">
                <p>{{event.content}}</p>
              </div>
              <br />
              <br />
              <div class="content">
                <p>{{event.location}}</p>
              </div>
              <br />
              <div class="date">
                <p>{{event.date}}</p>
              </div>
            </div>
          </div> 
        </li>
      </ul>
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