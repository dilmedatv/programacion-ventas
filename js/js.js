var cont = 0;
const num = 1;
var contmegust = 0;
var contnomegust = 0;
var opini = "";
function sal(){
    cont = cont += 1;
    console.log("La página se a cargado " + cont + "veces.");
}
function megus(){
    contmegust = document.getElementById("conmegus").value = contmegust + num;
    document.getElementById("conmegus").innerHTML = contmegust;
    if (contmegust == 100) {
        confirm("Hemos llegado a la meta de 100 me gustas!!!, gracias por visitar nuestra página.");
        console.log("Vamos en 100 me gustas.");
    } if (contmegust == 500) {
        confirm("Hemos llegado a la meta de 500 me gustas!!!, gracias por visitar nuestra página.");
        console.log("Vamos en 500 me gustas.");
    } if (contmegust == 1000){
        confirm("Hemos llegado a la meta de 1000 me gustas!!!, gracias por visitar nuestra página.");
        console.log("Vamos en 1000 me gustas. Est&aacute; p&aacute;gina esta avanzando.");
    }
}
function nomegus(){
    contnomegust = document.getElementById("connomegus").value = contnomegust + num;
    document.getElementById("connomegus").innerHTML = contnomegust;
    
}
function est(){
    let estu = "0";
    estu = document.getElementById("sel").value;
    switch (estu) {
        case "0":
            window.open("./index.html");
            break;
        case "1":
            window.open("./pseudocodigo.html");
            break;
        case "2":
            window.open("./aritmetica.html");
        break;
        case "3":
            window.open("./html.html");
            break;
        case "4":
            window.open("./css.html");
            break;
        case "5":
            window.open("./javascript.html");
            break;
        case "6":
            window.open("./Python.html");
            break;
        case "7":
            window.open("./Php.html");
            break;
        case "8":
            window.open("./Ingl&eacute;s.html");
            break;
        case "9":
            window.open("./M&uacute;sica.html");
            break;
        case "10":
            window.open("./Glosario.html");
            break;
        default:
            alert("La opción  seleccionada no es valida, intente de  nuevo:");
            }
    }
