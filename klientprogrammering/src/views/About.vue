<template>
  
    <div class="text">      
      <h1>Min grupp är bäst!</h1>
      <br>
      <div class="caption"><p>Information!</p></div>

      <div  class="info"><p>längst upp hittar du navigation knapparna som leder dig till våra olika sidor.</p></div>
      <br>

      <div class="item">
        <i class="fa fa-home" style="font-size:3em;"></i>
        <p>Leder dig till startsidan som du precis befinner dig på.</p>
      </div>
    <br>
      <div class="item">
        <i class="fa fa-map-marker" style="font-size:3em;"></i>
        <p>Leder dig till händelser omkring dig.</p>
      </div>
    <br>
      <div class="item">
        <i class="fa fa-building" style="font-size:3em;"></i>
        <p>Leder dig till...</p>
      </div>
    <br>
      <div class="item">
        <i class="fa fa-globe" style="font-size:3em;"></i>
        <p>Leder dig till...</p>
      </div>
    <br>
      <div class="item">
        <i class="fa fa-info-circle" style="font-size:3em;"></i>
        <p>Leder dig till...</p>
      </div>
  </div>
</template>

<style scoped>

.info p{
  margin-left: 0.8em;
  margin-right: 0.5em;
}

.text h1{  
  background-color: rgba(0, 0, 0, 0);
  font-size: 35px;
  text-shadow: 2px 2px #0000005b;
  color: white;
  text-align: center;
}

.text .caption p{
  margin-left: 0.5em;
  font-size: 25px;
  text-shadow: 2px 2px #0000005b;
  color: rgb(255, 255, 255);
}

.text p, .text i{
  font-size: 15px;
  text-shadow: 2px 2px #0000005b;
  color: white;
}

.text .item{
  display: flex; 
  align-items:center;
  justify-content: space-around;
  
}

.text .item i{
  text-align: center;
  flex: 1;
}

.text .item p{  
  flex: 5;
}


</style>

