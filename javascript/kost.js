
const url = "https://traeningsoevelser-172f.restdb.io/rest/opskrifter?"
const myHeaders = {
         "x-apikey": "631f0ecefdc15b0265f17313"
            }
    

      document.addEventListener("DOMContentLoaded", start)
    //   en global variabel 'retter', som indeholder vores JSON
      let retter;
    // vi laver en variabel 'filter', der indeholder det vi vil filtrere på. Jeg sætter den til 'alle', så alle retter bliver vist først. 
      let filter ="alle";
    //første funktion der kaldes efter DOM er loaded.


    //vi skal lægge eventListeners på alle knapper - så der udføres en funtion ved klik. 
      function start() {
            const filterknapper = document.querySelectorAll(".kategorier_kost button");
            //den konstant looper jeg så igennem med en foreach, og ligger en eventListener på hver knap.
            filterknapper.forEach(knap => knap.addEventListener("click", filtrerRetter));
        // også loader vi JSON
          loadJSON();
      }

      //Eventhandler funktionen skal finde den værdi, der ligger i knappens data-attribut. 
      //Denne værdi skal filter-variablen sættes lig med. altså filter sættes lig med dataset.kategori.

      function filtrerRetter () {
        
          filter = this.dataset.type;//'this', den knap der er trykket på dataset.kategori og sætter filteret lig med det. hvis man trykker på vegetar knappen, bliver den sat til vegetar. 
          document.querySelector(".valgt").classList.remove("valgt");//fjern klassen 'valgt' fra den knap
          this.classList.add("valgt")//marker den knap der er klikket på. 
          visRetter(); //kalder funktionen igen, efter det nye filter er sat. derved kan vi med en if-sætning filtrere på de retter, osm vi får vist så de svarer til vores filter.
          

      }

        async function loadJSON() {
            const JSONData = await fetch("https://traeningsoevelser-172f.restdb.io/rest/opskrifter?", {
                headers: myHeaders
            });
           retter = await JSONData.json();
           console.log("Retter", retter);
           visRetter();
        }
  
        // funktion der viser retter i liste view.
        //derefter skal visRetter-funtionen kaldes på ny. 
        //visRetter skal starte med at fjerne det eksisterende indhold fra listen i html, ellers bliver listen længere og længere.
        //der skal udbygges if-sætninger i visRetter så den kan vise 'alle'.


        //her nede i visRetter, skal vi slette indholdet fra vores liste, ellers kommer vi til at ligge flere i vores liste, hver gang vi klikker på en knap. 
        function visRetter(){
        
        const container = document.querySelector(".container");
        const template = document.querySelector("template");

        //textContent lig med en tom streng, gør vi ryder container inden ny loop
        container.textContent ="";

        retter.forEach(ret => {
    
        if(filter == ret.type || filter =="alle" ) { //udbyg if-sætningen: hvis filter er lig med valuen af ret.kategori (vegetar, low carb og high protein) eller hvis filter er lig med 'alle'
            const klon = template.cloneNode(true).content; 
            klon.querySelector(".navn").textContent = ret.navn;
            klon.querySelector(".maaltid").textContent = ret.maaltid;
            klon.querySelector("img").src = "kost_bilelder/" + ret.billedenavn
            container.appendChild(klon);

        }


    })
}