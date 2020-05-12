<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." />

        <select class="search-dropdown">
          <option value="0">Stockholms län</option>
        </select>

        <button class="search-button">Search</button>
      </div>
    </main>
  </div>
</template>

<script>
/*
export default {
  name: 'App',
  data(){
    return{
      api_key: 'temp'
    }
  }
}*/
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  background-image: url("./assets/City.jpg"); /* lägg till backgroundbild */
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px; /* change <--- not px*/

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 075)
  );
}

/*!Search box/bar*/

.search-box {
  width: 50%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  width: 45%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  text-overflow: clip;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  background-color: rgb(255, 255, 255);
  border-radius: 16px 0px 0px 16px;
  transition: 0.4s;
}

/*!Search Dropdown*/

.search-box .search-dropdown {
  overflow: hidden;
  font-size: 20px;
  width: 30%;
  border-color: rgb(255, 255, 255);
  min-height: 5.1ex;
  border-radius: 0px 0px 0px 0px;
}

/*!Search Button*/

.search-box .search-button {
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  width: 25%;
  min-height: 5.1ex;
  border-radius: 0px 16px 16px 0px;
  border: none;
  color: rgb(0, 0, 0);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  .search-box {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
