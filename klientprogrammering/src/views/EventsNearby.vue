<template>
  <div class="eventsnearby">
    <div class="header">
      <h1>What's the buzz hos dig?</h1>
      <h3>Här visas de senaste brotten som begåtts i närheten av din plats</h3>
      <button class="update-button" v-on:click="nearbyEvents" title="Uppdatera"></button>
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
  },
  methods: {
    nearbyEvents() {
      this.$store.dispatch("eventsNearby");
    }
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

.update-button {
  background: white url("../assets/update-button.png") no-repeat;
  width: 60px;
  height: 60px;
  background-size: cover;
}
</style>