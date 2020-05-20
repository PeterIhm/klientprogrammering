<template>
  <div class="eventsbylocation">
    <div class="search-box">
      <input type="text" class="search-bar" v-model="search" placeholder="Location..." />
      <button class="search-button">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <!--<h1>Events by location</h1>-->
    <h1>GÖTEBORG</h1>

    <div class="hej">
      <p>hej!</p>
    </div>
  </div>
</template>

<script>
import BrottsplatsService from "@/services/services.js";
export default {
  data() {
    return {
      searchText: ''
    }
  },
  mounted: function(){
    BrottsplatsService.eventsByLocation(this.searchText).then(data => console.log(data))
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

.hej {
  background-color: rgba(255, 255, 255);
}

.hej p {
  margin: 1em;
}

.header {
  font-size: 2ch;
  color: rgb(255, 255, 255);
}

.text {
  color: rgb(255, 255, 255);
}

/*!Search box/bar*/

.search-box {
  width: 100%;
  background-color: rgb(255, 255, 255);
}

.search-box .search-bar {
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

/*!Search Dropdown*/

/*!Search Button*/

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
