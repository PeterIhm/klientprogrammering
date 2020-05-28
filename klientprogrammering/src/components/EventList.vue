<template>
    <div class="collapsibles">
      <ul>
        <li v-for="event in $store.state.events" :key="event.id">
          <div>
            <input type="checkbox" id="toggle" class="sibling-hover">    
            <p>{{event.title}}</p>
            <div class="sibling-highlight">
              <br>
              <div class="content">
                <p>{{event.info}}</p>
              </div>
              <br>
              <div class="content">
                <p>{{event.content}}</p>
              </div>
              <br>
              <br>
              <div class="content">
                <p>{{event.location}}</p>
              </div>
              <br>
              <div class="date">
                <p>{{event.date}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<style>
/*.text*/

.collapsibles{
  margin: auto;
}

.collapsibles ul{
  list-style-type: none;
}

.sibling-hover,#parent {
  width: 100%;
  border: none;
  color: white;
  background-color: #00000050;
  outline: none;
  padding: 1em;
  font-size: 1em;
}

p{
  color: white;
}

.sibling-hover ~ .sibling-highlight {
  display: none;
  background-color: rgba(0, 0, 0, 0.1);
}

.sibling-hover:checked ~ .sibling-highlight {
  display: block;
  color: white;
}

.content >>> p {
  margin-left: 0.8em;
  margin-right: 0.5em;
  text-align: left;
  text-shadow: 2px 2px #ffffff;
}

.date >>> p {
  margin-left: 0.8em;
  margin-right: 0.5em;
  text-align: right;
  text-shadow: 2px 2px #ffffff;
}

@media only screen and (min-width: 600px) {
  .collapsibles{
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>
