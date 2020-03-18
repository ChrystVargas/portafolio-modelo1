var colores = ["rgb(4, 212, 4)", "red", "rgb(255, 102, 0)", "rgba(226, 222, 0, 0.774)", "deepskyblue"];
var Acolor = "white";
var bordeAncho = 10;

var cabeza = document.getElementsByTagName("header")[0];
var cuadros2 = document.getElementsByClassName("cuadro2")[0];
var cuadros1 = document.getElementsByClassName("cuadro1")[0];
var centroLogo = document.getElementsByClassName("centroLogo")[0];
var logo = document.getElementsByClassName("logo")[0];
var d = document.getElementsByClassName("p")[0];
var span = document.getElementsByClassName("span")[0];

var estadoPortada = document.getElementsByClassName("logo")[0];
var estado = false;


function clickColor(color) {

    logo.style.animation = "";
    d.style.animation = ""
    span.style.animation = ""

    if (estado == true) {
        bordeAncho = 5;
    } else {
        bordeAncho = 10;
    }

    var css = '.items:hover{ background-color: ' + colores[color] + '}                                  @keyframes coloresTexto' + color + ' {from{color: ' + Acolor + '; text-shadow: 0px 0px 20px ' + Acolor + ';}to{color: ' + colores[color] + '; text-shadow: 0px 0px 20px ' + colores[color] + ';}}                   @keyframes coloresCajas' + color + ' {from{border: ' + bordeAncho + 'px solid ' + Acolor + '; -moz-box-shadow: 0px 0px 30px ' + Acolor + '; -webkit-box-shadow: 0px 0px 30px ' + Acolor + '; box-shadow: 0px 0px 30px ' + Acolor + ';}to{border: ' + bordeAncho + 'px solid ' + colores[color] + '; -moz-box-shadow: 0px 0px 30px ' + colores[color] + '; -webkit-box-shadow: 0px 0px 30px ' + colores[color] + '; box-shadow: 0px 0px 30px ' + colores[color] + ';}}                                                                                                   @keyframes coloresBorde' + color + ' {from{border: 3px solid ' + Acolor + '; -moz-box-shadow: 0px 0px 10px ' + Acolor + '; -webkit-box-shadow: 0px 0px 10px ' + Acolor + '; box-shadow: 0px 0px 10px ' + Acolor + ';}to{border: 3px solid ' + colores[color] + '; -moz-box-shadow: 0px 0px 10px ' + colores[color] + '; -webkit-box-shadow: 0px 0px 10px ' + colores[color] + '; box-shadow: 0px 0px 10px ' + colores[color] + ';}}                                                                                                             .logo> span {animation: coloresTexto' + color + ' 1s; color: ' + colores[color] + '; text-shadow: 0px 0px 20px ' + colores[color] + ';}                                                                                 .logo {animation: coloresCajas' + color + ' 1s; border: ' + bordeAncho + 'px solid ' + colores[color] + ';-moz-box-shadow: 0px 0px 30px ' + colores[color] + ';-webkit-box-shadow: 0px 0px 30px ' + colores[color] + ';box-shadow: 0px 0px 30px ' + colores[color] + ';}                                                                             .colorTexto {animation: coloresTexto' + color + ' 1s; color: ' + colores[color] + '; text-shadow: 0px 0px 20px ' + colores[color] + ';} .colorCajaBorde {animation: coloresBorde' + color + ' 1s; border: 3px solid ' + colores[color] + ';-moz-box-shadow: 0px 0px 10px ' + colores[color] + ';-webkit-box-shadow: 0px 0px 10px ' + colores[color] + ';box-shadow: 0px 0px 10px ' + colores[color] + ';}';

    Acolor = colores[color];

    var style = document.createElement('style');
    style.setAttribute("id", "estiloColor");

    style.appendChild(document.createTextNode(css));

    var style2 = document.getElementById("estiloColor");
    var padreStyle = style2.parentNode;

    padreStyle.replaceChild(style, style2);
}




estadoPortada.addEventListener("click", function () {

    if (estado == true) {
        cuadros1.setAttribute("class", "colorCajaBorde cuadro1");
        cuadros2.setAttribute("class", "colorCajaBorde cuadro2");
        cabeza.style.animation = "expand .8s";
        cabeza.style.height = "100vh";
        cabeza.style.backgroundColor = "rgba(36, 33, 33, 0.966)";

        centroLogo.style.animation = "logoCentro 1s"
        centroLogo.style.marginLeft = "calc(50% - 70px)"

        logo.style.animation = "logoGrande 1s"
        logo.style.width = "130px";
        logo.style.height = "130px";
        logo.style.borderWidth = "10px";

        d.style.animation = "DGrande 1s"
        d.style.fontSize = "130px";

        span.style.animation = "spanGrande 1s"
        span.style.fontSize = "20px";
        span.style.paddingTop = "6px";
        
        estado = false;
    } else {
        cuadros1.setAttribute("class", "colorCajaBorde cuadro1");
        cuadros2.setAttribute("class", "colorCajaBorde cuadro2");
        cabeza.style.animation = "collap .8s";
        cabeza.style.height = "7vh";
        cabeza.style.backgroundColor = "rgb(36, 33, 33)";

        centroLogo.style.animation = "logoSuperior 1s"
        centroLogo.style.marginLeft = "0"
        centroLogo.style.paddingLeft = "50px"
        centroLogo.style.marginTop = "50px"

        logo.style.animation = "logoChico 1s"
        logo.style.width = "50px";
        logo.style.height = "50px";
        logo.style.borderWidth = "5px";

        d.style.animation = "Dchico 1s"
        d.style.fontSize = "50px";

        span.style.animation = "spanChico 1s"
        span.style.fontSize = "8px";
        span.style.paddingTop = "0";
        span.style.width = "6px";

        estado = true;
    }
})