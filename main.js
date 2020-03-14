var nuevo = "Yo soy Cristian Vargas Ari";

function titulo() {
    var tit = document.getElementById("titulo");
    
    tit.innerText = nuevo;
    tit.style.animation = "spA 5s infinite";
    if (nuevo == "Yo soy Cristian Vargas Ari") {
        nuevo = "Y soy un desarrollador Web"
    } else {        
        nuevo = "Yo soy Cristian Vargas Ari";
    }
}

setInterval('titulo()', 5000);

var colores = ["green","red","rgb(255, 102, 0)","rgba(226, 222, 0, 0.774)","deepskyblue"];
var Acolor = "white";

function clickColor(color) {

    var css = '.items:hover{ background-color: ' + colores[color] + '} @keyframes coloresTexto {from{color: ' + Acolor + '; text-shadow: 0px 0px 20px ' + Acolor + ';}to{color: ' + colores[color] + '; text-shadow: 0px 0px 20px ' + colores[color] + ';}} @keyframes coloresCajas {from{border: 10px solid ' + Acolor + '; -moz-box-shadow: 0px 0px 30px ' + Acolor + '; -webkit-box-shadow: 0px 0px 30px ' + Acolor + '; box-shadow: 0px 0px 30px ' + Acolor + ';}to{border: 10px solid ' + colores[color] + '; -moz-box-shadow: 0px 0px 30px ' + colores[color] + '; -webkit-box-shadow: 0px 0px 30px ' + colores[color] + '; box-shadow: 0px 0px 30px ' + colores[color] + ';}} .logo > span, .logo > p {animation: coloresTexto 3s; background: ' +colores[color] + '} .logo {animation: coloresCajas 3s; background: ' +colores[color] + '} ';

    Acolor = colores[color];

    var style = document.createElement('style');
    style.setAttribute("id", "estiloColor");
    
    style.appendChild(document.createTextNode(css));
    
    var style2 = document.getElementById("estiloColor");
    var padreStyle = style2.parentNode;

    padreStyle.replaceChild(style, style2);
}