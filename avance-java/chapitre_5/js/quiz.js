// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse

var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var contentDiv = document.getElementById("contenu");

for (var i=0; i<questions.length; i++){
    //Elements de la questions
    var paragrapheQuestion = document.createElement("p");
    var question = document.createElement("div");
    var titre = document.createElement("b");
    var enonce = document.createElement("i");
    titre.textContent = "Question "+(i+1)+ " : ";
    titre.id = "titre_"+i;
    enonce.textContent = questions[i].enonce;
    enonce.id = "enonce_"+i;

    //Génération des élements cachés
    var reponseOrButton = document.createElement("div");

    //Génération du bouton
    var showButton = document.createElement("button");
    showButton.textContent = "Afficher la réponse";
    showButton.id = i;
    showButton.addEventListener("click", function(e){
        //Remplace le boutton par un paragraphe réponse
        var reponseElt =  document.createElement("div");
        var showButton = e.target;
        var numerus = parseInt(showButton.id);
        reponseElt.textContent = questions[numerus].reponse;
        var responseOrButton = event.target.parentNode;
        responseOrButton.replaceChild(reponseElt, showButton);
    });

    //Ajout de tous les éléments au DOM question
    question.appendChild(titre);
    question.appendChild(enonce); 
    paragrapheQuestion.appendChild(question);
    reponseOrButton.appendChild(showButton);
    paragrapheQuestion.appendChild(reponseOrButton);
    contentDiv.appendChild(paragrapheQuestion);
    
}