var cont = 0;
const num1 = 1;
function sal(){
    cont = cont += num1;
    console.log("La página se ha cargado ", cont, " veces.");
}

function ini(){
    window.open("./index.html");
}
function op(){
    let op = 0;
    opt = document.getElementById("cursjs").value;
    switch (opt) {
        case "0":
            window.open("./javascript.html");
            break;
        case "1":
            window.open("./javascript.html");
        break;
    
        default:
            alert("default");
        break;
    }
}