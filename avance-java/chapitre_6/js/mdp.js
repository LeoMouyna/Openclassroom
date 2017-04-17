
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;
	//console.log(mdp1.length());
	var message = "Erreur :";
	var regexMdp = /.*\d.*/;//Avoir au moins un chiffre parmis la chaine de caractère.

	if (mdp1 !== mdp2){
		message += " les mots de passe de correspondent pas.";
	}
	else if (mdp1.length < 6){
		message += " La longeure minimale du mot de passe est de 6 caractère";
	}
	else if (!regexMdp.test(mdp1)){
		message += " Le mot de passe ne contient pas de chiffres.";
	}
	else {
		message = "Les mots de passe sont corrects.";
	}

	var messageElt = document.getElementById("infoMdp");
	messageElt.textContent = message;
	e.preventDefault();//Annule envoi de données 
});