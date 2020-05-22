<template>
  <div class="eventsnearby">
    <h1>Eventsnearby</h1>
    <h1>Alla dagar är bra dagar</h1>
    <p>Alla dagar är fortsatt bra dagar</p>
    <div class="collapsibles">
      <ul>
        <li v-for="event in $store.state.events" :key="event.content">
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