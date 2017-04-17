function augmenterCompteur() {
    var compteurElt = document.getElementById("compteur");
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur + 1;
}

function stopTimer (){
    var stopButton = document.getElementById("arreter");
    stopButton.removeEventListener("click", stopTimer);
    var launchButton = stopButton;
    launchButton.id = "demarrer";
    launchButton.textContent = "Démarer";
    clearInterval(intervalId);
    launchButton.addEventListener("click", launchTimer);
}

function launchTimer (){
    var launchButton = document.getElementById("demarrer");
    launchButton.removeEventListener("click", launchTimer);
    var stopButton = launchButton;
    stopButton.id = "arreter";
    stopButton.textContent = "Arêter";
    // Appelle la fonction augmenterCompteur toutes les secondes (1000 millisecondes)
    intervalId = setInterval(augmenterCompteur, 1000);

    stopButton.addEventListener("click", stopTimer);
}

var launchButton = document.getElementById("demarrer");
var intervalId = "";
launchButton.addEventListener("click", launchTimer);
    