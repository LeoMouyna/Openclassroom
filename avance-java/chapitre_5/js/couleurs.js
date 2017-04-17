/**
 * Created by msi on 15/04/2017.
 */

var paragraphes = document.getElementsByTagName("div");

document.addEventListener("keypress", function (e) {
    var pColor = "unknown";
    var touche =  String.fromCharCode(e.charCode);
    switch (touche){
        case 'r':
        case 'R': //Red color
            pColor = "red";
            break;
        case 'v':
        case 'V':
            pColor = "green";
            break;
        case 'j':
        case'J':
            pColor = "yellow";
            break;
        case 'b':
        case 'B':
            pColor = "white";
            break;
        default:
            console.log("Touche "+ touche+ " appuyée.");
            break;
    }
    for (var i=0; i<paragraphes.length; i++){
        paragraphes[i].style.background = pColor;

    }
});

