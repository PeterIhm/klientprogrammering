<template>
  <div class="eventsbyarea">
    <h1>What's the Buzz i en viss län</h1>
    <div class="search-box" id="dropdownlist">
      <select v-model="selected" @input="getSelected" class="search-dropdown">
        <option disabled value>Välj län</option>
        <option>Blekinge län</option>
        <option>Dalarnas län</option>
        <option>Gotlands län</option>
        <option>Gävleborgs län</option>
        <option>Hallands län</option>
        <option>Jämtlands län</option>
        <option>Jönköpings län</option>
        <option>Kalmar län</option>
        <option>Kronobergs län</option>
        <option>Norrbottens län</option>
        <option>Skåne län</option>
        <option>Stockholms län</option>
        <option>Södermanlands län</option>
        <option>Uppsala län</option>
        <option>Värmlands län</option>
        <option>Västerbottens län</option>
        <option>Västernorrlands län</option>
        <option>Västmanlands län</option>
        <option>Västra Götalands län</option>
        <option>Örebro län</option>
        <option>Östergötlands län</option>
      </select>
    </div>
    <div id="eventlist">
    <event-list></event-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
export default {
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    getSelected() {
      this.$store.dispatch("eventsByArea", this.selected).catch(() => {
        this.$toasted.show("Det har uppstått ett fel", {
        theme: "toasted-primary",
        position: "bottom-center",
        duration: 5000
      });
      });
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-shadow: 3px 3px #0000002b;
  background-color: transparent;
  color: rgb(255, 255, 255);

  margin-top: 1em;
  text-align: center;
}

.search-box {
  width: 100%;
  background-color: rgb(255, 255, 255);
}

.search-box .search-dropdown {
  width: 80%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  text-overflow: clip;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  background-color: rgb(255, 255, 255);
  border-radius: 0px 0px 0px 0px;
  transition: 0.4s;
}

.search-box .search-button {
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  width: 20%;
  min-height: 5.1ex;
  border-radius: 0px 0px 0px 0px;
  border: 0ch;
  color: rgb(0, 0, 0);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
}
</style>