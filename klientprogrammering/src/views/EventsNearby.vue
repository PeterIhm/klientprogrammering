<template>
  <div class="eventsnearby">
    <h1>Eventsnearby</h1>
    <h1>Alla dagar är bra dagar</h1>
    <p>Alla dagar är fortsatt bra dagar</p>

    <div id="eventlist">
    <event-list></event-list>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("eventsNearby");
  }
};
</script>

<style>
.search-box {
  background-color: #822c57;
}

</style>