<template>
  <div class="eventsnearby">
      <h1>What's the buzz hos dig?</h1>
      <p>Här visas de 10 senaste brotten som begåtts i närheten av din plats</p>

  </div>
</template>

<script>
import BrottsplatsService from '@/services/services.js'
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

.sibling-hover,
#parent {
  width: 100%;
  border: none;
  color: white;
  background-color: #00000050;
  outline: none;
  padding: 1em;
  font-size: 1em;
}

.sibling-hover ~ .sibling-highlight {
  display: none;
  background-color: rgba(0, 0, 0, 0.1);
}

.sibling-hover:hover ~ .sibling-highlight {
  display: block;
  color: white;
}

.content >>> p {
  margin-left: 0.8em;
  margin-right: 0.5em;
  text-align: left;
  text-shadow: 2px 2px #0000005b;
}

.date >>> p {
  margin-left: 0.8em;
  margin-right: 0.5em;
  text-align: right;
  text-shadow: 2px 2px #0000005b;
}
</style>