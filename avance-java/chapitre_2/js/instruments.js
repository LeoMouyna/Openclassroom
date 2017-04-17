/**
 * Created by msi on 11/04/2017.
 */
function infosLiens() {
    //Génère une liste d'élement <a>
    var liensElts = document.getElementsByTagName("a");
    //affiche le nombre d'élément dans la liste
    console.log(liensElts.length);
    //Affiche le lien pointé par le permier élément
    console.log(liensElts[0].getAttribute("href"));
    //Affiche le lien pointé par le dernier élément
    console.log(liensElts[liensElts.length-1].getAttribute("href"));
}

function possede(identifiant, classe) {
    try {
        var message = document.getElementById(identifiant).classList.contains(classe);
    }
    catch (TypeError){
        var message = "Auncun élément ne possède l'identifant "+identifiant;
    }
    finally {
        console.log(message);
    }
}

infosLiens();
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur