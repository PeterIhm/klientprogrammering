<template>
  <main>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="assets/src/all.min.css" />
    <div id="app">
      <div id="nav">
        <router-link to="/">
          <button id="button" class="button">
            <i class="fa fa-home" style="font-size:4em;"></i>
          </button>
        </router-link>
        <router-link to="/eventsnearby">
          <button id="button" class="button">
            <i class="fa fa-map-marker" style="font-size:4em;"></i>
          </button>
        </router-link>
        <router-link to="/eventsbylocation">
          <button id="button" class="button">
            <i class="fa fa-building" style="font-size:4em;"></i>
          </button>
        </router-link>
        <router-link to="/eventsbyarea">
          <button id="button" class="button">
            <i class="fa fa-globe" style="font-size:4em;"></i>
          </button>
        </router-link>
        <router-link to="/about">
          <button id="button" class="button">
            <i class="fa fa-info-circle" style="font-size:4em;"></i>
          </button>
        </router-link>
      </div>
      <router-view />
    </div>

    <div class="background"></div>
  </main>
</template>

<script>
</script>

<style>
h1 {
  background-color: #ceeaff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat";
  /* background-image: url("./assets/City.jpg");*/
  background-size: cover;

  background-image: url("./assets/cold-bg.jpg"); /* lägg till backgroundbild */
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  /*background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 075));*/
}

/*Navigation*/

#nav {
  background-color: #262626;
  padding-left: 1em;
  float: left;
  text-decoration: none;
  width: 100%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
  display: flex;

  justify-content: center;
}

#nav button {
  color: white;

  margin: 1em 2em 1em 0;
  background-color: #262626;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
}

#nav button:hover {
  background: transparent; /*#00ff99*/ /*00ff99*/
  color: #4885cc; /*5aa6fe*/
}
</style>
