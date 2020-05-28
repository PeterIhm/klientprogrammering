<template>
  <div class="text">
    <h1>About</h1>
    <br />
    <div class="caption">
      <p>Information!</p>
    </div>

    <div class="info">
      <p>
        Vi som tagit fram den här appen är tre programmeringsstudenter
        från YRGO. Vi har använt oss av brottsplatskartans api. Idén
        till appen kom ifrån tanken att man kan känna sig tryggare om man
        vet vad som pågår i ens närhet. Eller så kanske man bara är nyfiken?
      </p>
      <br>
      <p>
        Med What's the Buzz Sverige kan man enkelt kolla upp vad som händer
        runt om i Sverige med bara några knapptryck!</p>
    </div>
    <br />

    <div class="item">
      <i class="fa fa-home" style="font-size:3em;"></i>
      <p>Här hittar du en presentation av appen!</p>
    </div>
    <br />
    <div class="item">
      <i class="fa fa-map-marker" style="font-size:3em;"></i>
      <p>Undrar du vad som hänt hos dig? Då kikar du här!</p>
    </div>
    <br />
    <div class="item">
      <i class="fa fa-building" style="font-size:3em;"></i>
      <p>Undrar du vad som händer i en specifik stad eller stadsdel? Här kan du ta reda på det!</p>
    </div>
    <br />
    <div class="item">
      <i class="fa fa-globe" style="font-size:3em;"></i>
      <p>Här kan du se vad som händer i olika delar av sverige. Tyvärr räcker inte brottsplatskartan längre än så.</p>
    </div>
    <br />
    <div class="item">
      <i class="fa fa-info-circle" style="font-size:3em;"></i>
      <p>Det är här du är just nu!</p>
    </div>
  </div>
</template>

<style scoped>
.info p {
  margin-left: 0.8em;
  margin-right: 0.5em;
}

.text h1 {
  background-color: rgba(0, 0, 0, 0);
  font-size: 35px;
  text-shadow: 2px 2px #0000005b;
  color: white;
  text-align: center;
}

.text .caption p {
  margin-left: 0.5em;
  font-size: 25px;
  text-shadow: 2px 2px #0000005b;
  color: rgb(255, 255, 255);
}

.text p,
.text i {
  font-size: 15px;
  text-shadow: 2px 2px #0000005b;
  color: white;
}

.text .item {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.text .item i {
  text-align: center;
  flex: 1;
}

.text .item p {
  flex: 5;
}
</style>

