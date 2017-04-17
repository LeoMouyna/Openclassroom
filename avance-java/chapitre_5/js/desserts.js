var addButton = document.querySelector("button");

//Remplace un dessert par une nouvelle saisie
function modifyDessert(e){
	var numerus = e.target.id;
	var modifiedDessert = document.getElementById("dessert_"+numerus);
	var newDessertText = prompt("Quel est votre nouveau dessert favoris ?");
	modifiedDessert.textContent = newDessertText;
}

//Demande et ajoute le dessert à la fin de la liste
function addDessert(){
	var newDessert = prompt("Ajouter le nom d'un dessert que vous aimez :");
	var listeDesserts = document.getElementById("desserts");
	var numerus = listeDesserts.childNodes.length-1;
	var newDessertElt = document.createElement("li");
	newDessertElt.id = "dessert_"+numerus;
	newDessertElt.textContent = newDessert;
	listeDesserts.appendChild(newDessertElt);

	//Ajout d'un bouton modifier
	var modifyButton = document.createElement("button");
	modifyButton.textContent = "Modifier";
	modifyButton.id = numerus;
	modifyButton.class = "modifyButton";
	listeDesserts.appendChild(modifyButton);
	modifyButton.addEventListener("click", modifyDessert);
}

addButton.addEventListener("click", addDessert);