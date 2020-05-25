<template>
  <div class="eventsnearby">
    <h1>Eventsnearby</h1>
    <h1>Alla dagar är bra dagar</h1>
    <p>Alla dagar är fortsatt bra dagar</p>
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