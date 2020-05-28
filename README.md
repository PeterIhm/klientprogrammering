# What's the Buzz Sverige

Bygg instruktioner:
För att kunna bygga, testa och köra What’s the Buzz Sverige behöver du: 
-	clone det här repot: https://github.com/PeterIhm/klientprogrammering.git
-	Har Node.js (version 12) installerat på din dator, inkl NPM och Vue-Cli 

Navigera till projektens foldern (./klientprogrammering/klientprogrammering) i kommandotolken och skriv följande kommando:

npm install

Vill du köra unittester? 
Då kör du:

npm run test:unit

Annars kan du fortsätta bygga projektet:

npm run build

Så byggs appen i dist foldern. 

Installer Serve genom följande kommandot:
npm install -g serve

Och då kan du köra:

serve -s dist

Nu får du en lokal live version av appen.
Hoppas du kommer att tycka om What's the Buzz Sverige, happy searching!
