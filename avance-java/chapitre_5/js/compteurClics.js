/**
 * Created by msi on 15/04/2017.
 */

function incrementClic(){
    var elementDOM = document.getElementById("compteurClics");
    console.log("Un clic enregistré");
    var nbClics = elementDOM.textContent ;
    nbClics = parseInt(nbClics)+1;
    elementDOM.textContent = nbClics;
}

var stopButton = document.getElementById("desactiver");
stopButton.addEventListener("click", function () {
    console.log("Arrêt enregistrement des clics");
    clicButton.removeEventListener("click", incrementClic);
});

var clicButton = document.getElementById("clic");
clicButton.addEventListener("click", incrementClic);
