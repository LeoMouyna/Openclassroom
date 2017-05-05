/**
 * Created by msi on 23/04/2017.
 */

function generateTableHeader() {
    var tableStructureElt = document.getElementById("tableaux");
    //Table header
    var headerRawElt = document.createElement("tr");
    var headerNameElt = document.createElement("td");
    var headerYearearElt = document.createElement("td");
    var headerAuthorElt = document.createElement("td");
    var headerBoldNameElt = document.createElement("strong");
    headerBoldNameElt.textContent = "Nom";
    var headerBoldYearElt = document.createElement("strong");
    headerBoldYearElt.textContent = "Année";
    var headerBoldAuthorElt = document.createElement("strong");
    headerBoldAuthorElt.textContent = "Auteur";
    headerNameElt.appendChild(headerBoldNameElt);
    headerYearearElt.appendChild(headerBoldYearElt);
    headerAuthorElt.appendChild(headerBoldAuthorElt);
    headerRawElt.appendChild(headerNameElt);
    headerRawElt.appendChild(headerYearearElt);
    headerRawElt.appendChild(headerAuthorElt);
    tableStructureElt.appendChild(headerRawElt);
}

function generateTable(ajaxResponse) {
    var tableStructureElt = document.getElementById("tableaux");
    generateTableHeader();

    //Add informations from ajax request
    var tableaux = JSON.parse(ajaxResponse);
    tableaux.forEach(function (tableau) {
        var rawElt = document.createElement("tr");
        var nameElt = document.createElement("td");
        var yearElt = document.createElement("td");
        var authorElt = document.createElement("td");
        nameElt.textContent = tableau.nom;
        yearElt.textContent = tableau.annee;
        authorElt.textContent = tableau.peintre;
        rawElt.id = tableau.nom;
        rawElt.appendChild(nameElt);
        rawElt.appendChild(yearElt);
        rawElt.appendChild(authorElt);
        tableStructureElt.appendChild(rawElt);
    })
}

ajaxGet("http://localhost:8080/javascript-web-srv/data/tableaux.json", generateTable);