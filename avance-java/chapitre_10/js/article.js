/**
 * Created by msi on 25/04/2017.
 */

var formElt = document.querySelector("form");

formElt.addEventListener("submit", function (e) {
    e.preventDefault();

    //Récupération des champs du formulaire en un objet FormData
    var data = new FormData (formElt);
    for (var value of data.values()) {
        console.log(value);
    }

    ajaxPost("http://oc-jswebsrv.herokuapp.com/article", data, function () {
        var objetElt = document.getElementById("objects");
        var messageElt = document.createElement("p");
        messageElt.textContent = "L'article a été ajouté";
        objetElt.appendChild(messageElt);
    },false);
});