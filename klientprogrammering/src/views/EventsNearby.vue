<template>
  <div class="eventsnearby">
    <div class="header">
      <h1>What's the buzz hos dig?</h1>
      <h3>Här visas de senaste brotten som begåtts i närheten av din plats</h3>
      <button
        onclick="navigator.geolocation.getCurrentPosition(pos => alert(pos.coords.longitude + ' ' + pos.coords.latitude))"
      >Update</button>
    </div>
        <div id="eventlist">
    <event-list></event-list>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("eventsNearby").catch(error => {
      this.$toasted.show("Det uppståd ett fel" + error);
    });
  }
};
</script>

<style>
h1 {
  font-size: 2em;
  text-shadow: 3px 3px #0000002b;
  background-color: transparent;
  color: rgb(255, 255, 255);

  margin-top: 1em;
  text-align: center;
}

h3 {
  text-shadow: 3px 3px #0000002b;
  background-color: transparent;
  color: rgb(255, 255, 255);

  margin-top: 1em;
  text-align: center;
}

.search-box {
  background-color: #822c57;
}

</style>