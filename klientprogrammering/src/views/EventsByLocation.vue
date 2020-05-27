<template>
  <div class="eventsbylocation">
        <h1>What's the Buzz i en viss plats</h1>
    <div class="search-box">
      <input
        class="search-bar"
        type="text"
        v-model="searchTerm"
        @keyup.enter="search"
        placeholder="Sök stad..."
      />
      <button class="search-button" type="button" @click="search">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <h1>{{searchTerm}}</h1>
    <br>

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
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.searchTerm);
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

/*.text*/

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

@media screen and ( device-width: 1024px ) {
  .sibling-hover:hover ~ .sibling-highlight {
    display: block;
    color: rgb(255, 0, 0);
  }
}
</style>
