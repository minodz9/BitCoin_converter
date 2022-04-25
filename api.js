const url = "https://blockchain.info/ticker";

function getPrice() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet

  requete.open("GET", url); // premier paramètre GET (URL)/ POST (form)
  requete.responseType = "json"; // Nous attendon du JSON
  requete.send(); // Nous envoyons notre requête

  // Dés qu'on reçoit une reponse, cette foncton est executée

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let prixEnEuros = reponse.EUR.last;
        document.getElementById("price_label").textContent = prixEnEuros;
      } else {
        alert("Un problème est survenu merci de réessayer plus-tard!");
      }
    }
  };
  console.log("prix actualisé");
}

setInterval(getPrice, 1000);
