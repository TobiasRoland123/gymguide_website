
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      console.log(id);
      let ret;

      document.addEventListener("DOMContentLoaded", hentData)


      const retUrl= "https://traeningsoevelser-172f.restdb.io/rest/opskrifter/" + id;
      const option = {
        headers: {
          "x-apikey": "631f0ecefdc15b0265f17313",
        },
      };

      async function hentData() {
        const respons = await fetch(retUrl, option);
        ret = await respons.json();
        vis();
      }
     

      function vis() {
        document.querySelector("img.billede").src = "kost_bilelder/" + ret.billedenavn;
        document.querySelector(".navn").textContent = ret.navn;
        document.querySelector(".måltid").innerHTML = " <strong> Måltid </strong> | " + ret.maaltid;
        document.querySelector(".indhold").innerHTML = " <strong>Indhold: " + ret.indhold;
        document.querySelector(".ingredienser").innerHTML = " <strong>Ingredienser til " + ret.navn + ":</strong> <br>" + ret.ingredienser;
        document.querySelector(".fremgangsmåde").innerHTML = "<strong>Fremgangsmåde " + ret.navn + ": </strong> <br>" + ret.ingredienser;
      }


      
      console.log(document.querySelector("h3.navn"))
