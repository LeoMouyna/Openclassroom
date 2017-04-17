/**
 * Created by msi on 11/04/2017.
 */
// TODO : écrire la fonction compterElements
function compterElements(element) {
    var liste = document.querySelectorAll(element);
    return liste.length;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2