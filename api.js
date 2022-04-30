const url = "https://blockchain.info/ticker";

// Nouvelle méthode FETCH
async function getPrice() {

  let request = await fetch(url, {

    method: 'GET'
  });

  if (!request.ok) {

    alert('Un problème est survenu !!')

  } else {

    let data = await request.json();
    // console.log(data);
    document.getElementById("price_label").textContent = data.EUR.last;

  }

}

getPrice();
setInterval(getPrice, 1000);

// Ancienne méthode

// function getPrice() {
//   // Créer une requête
//   let requete = new XMLHttpRequest(); // Créer un objet

//   requete.open("GET", url); // premier paramètre GET (URL)/ POST (form)
//   requete.responseType = "json"; // Nous attendon du JSON
//   requete.send(); // Nous envoyons notre requête

//   // Dés qu'on reçoit une reponse, cette foncton est executée

//   requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         let prixEnEuros = reponse.EUR.last;
//         document.getElementById("price_label").textContent = prixEnEuros;
//       } else {
//         alert("Un problème est survenu merci de réessayer plus-tard!");
//       }
//     }
//   };
//   console.log("prix actualisé");
// }

// setInterval(getPrice, 1000);


