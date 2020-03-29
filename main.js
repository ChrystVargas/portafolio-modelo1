var colores = ["rgb(4, 212, 4)", "red", "rgb(255, 102, 0)", "rgb(226, 222, 0)", "deepskyblue"];
var posicionColor = 5;
var Acolor = "white";
var bordeAncho = 10;

var cabeza = document.getElementsByTagName("header")[0];
var contenedor = document.getElementsByClassName("contend")[0];
var centroCuerpo = document.getElementsByClassName("centro")[0];
var simpleParallax = document.getElementsByClassName("simpleParallax");
var navegador = document.getElementsByClassName("navegador")[0];
var barraS = document.getElementsByClassName("barraScroll")[0];
var barra = document.getElementsByClassName("barra")[0];
var cuadros2 = document.getElementsByClassName("cuadro2")[0];
var cuadros1 = document.getElementsByClassName("cuadro1")[0];
var centroLogo = document.getElementsByClassName("centroLogo")[0];
var logo = document.getElementsByClassName("logo")[0];
var d = document.getElementsByClassName("p")[0];
var span = document.getElementsByClassName("span")[0];

var estadoPortada = document.getElementsByClassName("logo")[0];
var estado = false;
var estadoClickColor = 1;

var titulo2 = document.getElementsByClassName("tit2");
var titulo1 = document.getElementsByClassName("tit1");
var grupoTitulo = document.getElementsByClassName("titulo1");
var texto = document.getElementsByClassName("texto")[0];

var posicionNavegador = 0;

titulo1[0].style.animation = "desvanecer1 linear 10s infinite";
titulo2[0].style.animation = "desvanecer2 linear 10s infinite";


function clickColor(color) {

    if (estadoClickColor == 1) {
        cuadros1.style.background = "rgb(24, 24, 24)";
        cuadros2.style.background = "rgb(24, 24, 24)";
        cabeza.style.background = "rgb(36, 33, 33)";
        contenedor.style.background = "rgb(36, 33, 33)";
        texto.style.background = "rgb(36, 33, 33)";

        estadoClickColor = 0;
    } else {
        cuadros1.style.background = "rgb(36, 33, 33)";
        cuadros2.style.background = "rgb(36, 33, 33)";
        cabeza.style.background = "rgb(24, 24, 24)";
        contenedor.style.background = "rgb(24, 24, 24)";
        texto.style.background = "rgb(24, 24, 24)";

        estadoClickColor = 1;
    }

    posicionColor = color;
    logo.style.animation = "";
    d.style.animation = ""
    span.style.animation = ""

    if (estado == true) {
        bordeAncho = 5;        
    } else {
        bordeAncho = 10;
    }

    var css = '.items:hover{ background-color: ' + colores[color] + '}                                      @keyframes coloresTextoBrillo' + color + ' {from{color: ' + Acolor + '; text-shadow: 0px 0px 20px ' + Acolor + ';}to{color: ' + colores[color] + '; text-shadow: 0px 0px 20px ' + colores[color] + ';}}                  @keyframes coloresTexto' + color + ' {from{color: ' + Acolor + ';}to{color: ' + colores[color] + ';}}                   @keyframes coloresCajas' + color + ' {from{border: ' + bordeAncho + 'px solid ' + Acolor + '; -moz-box-shadow: 0px 0px 30px ' + Acolor + '; -webkit-box-shadow: 0px 0px 30px ' + Acolor + '; box-shadow: 0px 0px 30px ' + Acolor + ';}to{border: ' + bordeAncho + 'px solid ' + colores[color] + '; -moz-box-shadow: 0px 0px 30px ' + colores[color] + '; -webkit-box-shadow: 0px 0px 30px ' + colores[color] + '; box-shadow: 0px 0px 30px ' + colores[color] + ';}}                                                                  @keyframes coloresBorde' + color + ' {from{border: 3px solid ' + Acolor + '; -moz-box-shadow: 0px 0px 10px ' + Acolor + '; -webkit-box-shadow: 0px 0px 10px ' + Acolor + '; box-shadow: 0px 0px 10px ' + Acolor + ';}to{border: 3px solid ' + colores[color] + '; -moz-box-shadow: 0px 0px 10px ' + colores[color] + '; -webkit-box-shadow: 0px 0px 10px ' + colores[color] + '; box-shadow: 0px 0px 10px ' + colores[color] + ';}}@keyframes coloresIconos' + color + ' {from{fill: ' + Acolor + ';}to{fill: ' + colores[color] + ';}}          .coloresIconos {animation: coloresIconos' + color + ' 1s; fill: ' + colores[color] + ';}     .logo> span, .coloresTextoBrillo {animation: coloresTextoBrillo' + color + ' 1s; color: ' + colores[color] + '; text-shadow: 0px 0px 20px ' + colores[color] + ';}   .logo {animation: coloresCajas' + color + ' 1s; border: ' + bordeAncho + 'px solid ' + colores[color] + ';-moz-box-shadow: 0px 0px 30px ' + colores[color] + ';-webkit-box-shadow: 0px 0px 30px ' + colores[color] + ';box-shadow: 0px 0px 30px ' + colores[color] + ';}    .colorTexto {animation: coloresTexto' + color + ' 1s; color: ' + colores[color] + ';}        .colorCajaBorde {animation: coloresBorde' + color + ' 1s; border: 3px solid ' + colores[color] + ';-moz-box-shadow: 0px 0px 10px ' + colores[color] + ';-webkit-box-shadow: 0px 0px 10px ' + colores[color] + ';box-shadow: 0px 0px 10px ' + colores[color] + ';} .navegador a:hover {color: ' + colores[color] + ';}   .barra{background-color: ' + colores[color] + ';}';

    Acolor = colores[color];

    marcarNavegador(posicionNavegador);

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
        cabeza.style.opacity = "0.95";

        centroLogo.style.animation = "logoCentro 1s";
        centroLogo.style.marginLeft = "calc(50% - 70px)";
        centroLogo.style.alignSelf = "center";
        centroLogo.style.paddingLeft = "0";
        centroLogo.style.marginTop = "0";

        logo.style.animation = "logoGrande 1s";
        logo.style.width = "130px";
        logo.style.height = "130px";
        logo.style.borderWidth = "10px";

        d.style.animation = "DGrande 1s"
        d.style.fontSize = "130px";

        span.style.animation = "spanGrande 1s"
        span.style.fontSize = "20px";
        span.style.paddingTop = "6px";
        span.style.width = "10px";

        navegador.style.animation = "aparecerNavegacion2 linear 1s";
        navegador.style.opacity = "0";

        barraS.style.animation = "aparecerNavegacion2 linear 1s";
        barraS.style.opacity = "0";

        barra.style.animation = "aparecerNavegacion2 linear 1s";
        barra.style.opacity = "0";

        estado = false;
    } else {
        cuadros1.setAttribute("class", "colorCajaBorde cuadro1");
        cuadros2.setAttribute("class", "colorCajaBorde cuadro2");
        cabeza.style.animation = "collap .8s";
        cabeza.style.height = "7vh";
        cabeza.style.opacity = "1";

        centroLogo.style.animation = "logoSuperior 1s"
        centroLogo.style.paddingLeft = "50px"
        centroLogo.style.marginTop = "50px"
        centroLogo.style.marginLeft = "0"

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

        navegador.style.animation = "aparecerNavegacion1 linear 1s";
        navegador.style.opacity = "100%";

        barraS.style.animation = "aparecerNavegacion1 linear 1s";
        barraS.style.opacity = "100%";

        barra.style.animation = "aparecerNavegacion1 linear 1s";
        barra.style.opacity = "100%";

        setTimeout(() => {
            animacionClickLogo();
        }, 1000);

        estado = true;
    }
})



function animacionClickLogo() {

    titulo1[0].style.animation = "";
    titulo2[0].style.animation = "";

    grupoTitulo[1].style.animation = "grupoT linear 5s";

    grupoTitulo[0].style.opacity = "0";
    grupoTitulo[1].style.opacity = "100%";

    setTimeout(() => {
        titulo1[1].style.animation = "title1 ease-in-out 1s";
        titulo2[1].style.animation = "title2 ease-in-out 1s";
        titulo1[1].style.left = "-2800px";
        titulo2[1].style.left = "0";
        titulo2[1].style.right = "0";
    }, 5000);

    setTimeout(() => {
        animacionBotonReel();
    }, 8000);
}

var boton1 = document.getElementsByClassName("boton")[0];
var boton2 = document.getElementsByClassName("boton2")[0];
var cajaReel = document.getElementsByClassName("texto")[0];

function animacionBotonReel() {

    var colorDegradado = [["rgb(4, 212, 4)", "rgba(4, 212, 4, 0.459)", "rgba(4, 212, 4, 0.164)"], ["red", "rgba(255, 0, 0, 0.507)", "rgba(255, 0, 0, 0.39)"], ["rgb(255, 102, 0)", "rgba(255, 102, 0, 0.493)", "rgba(255, 102, 0, 0.151)"], ["rgb(226, 222, 0)", "rgba(226, 222, 0, 0.486)", "rgba(226, 222, 0, 0.137)"], ["deepskyblue", "rgba(0, 191, 255, 0.452)", "rgba(0, 191, 255, 0.151)"], ["white", "rgba(255, 255, 255, 0.548)", "rgba(255, 255, 255, 0.185)"]];

    var css = '@keyframes botonAbajo' + posicionColor + ' {from{background: linear-gradient(to left, ' + colorDegradado[posicionColor][1] + ' 20%, ' + colorDegradado[posicionColor][0] + ' 100%);right: 0px;width: 0%;bottom: -1px;}70%{background: linear-gradient(to left, ' + colorDegradado[posicionColor][1] + ' 20%, ' + colorDegradado[posicionColor][0] + ' 100%);right: 0px;width: 100%;bottom: -1px;}to{ background: linear-gradient(to left, rgb(36, 33, 33) 20%, ' + colorDegradado[posicionColor][0] + ' 100%);right: 70px;width: 8%;bottom: -1px;}} @keyframes botonArriba' + posicionColor + ' {from{background: linear-gradient(to right, ' + colorDegradado[posicionColor][1] + ' 20%, ' + colorDegradado[posicionColor][0] + ' 100%);width: 0%;padding-top: 1px;}70%{background: linear-gradient(to right, ' + colorDegradado[posicionColor][1] + ' 20%, ' + colorDegradado[posicionColor][0] + ' 100%);left: 0px;width: 100%;padding-top: 1px;}to{ background: linear-gradient(to right, rgb(36, 33, 33) 20%, ' + colorDegradado[posicionColor][0] + ' 100%);left: 70px;width: 8%;padding-top: 1px;}}   @keyframes botonIzquierda' + posicionColor + ' {from{background: linear-gradient(to top, ' + colorDegradado[posicionColor][1] + ' 0%, ' + colorDegradado[posicionColor][0] + ' 100%);left: -1px;height: 0%;bottom: 0;}70%{background: linear-gradient(to top, ' + colorDegradado[posicionColor][1] + ' 0%, ' + colorDegradado[posicionColor][0] + ' 100%);left: -1px;height: 100%;bottom: 0;}to{background: linear-gradient(to top, rgb(36, 33, 33) 20%, ' + colorDegradado[posicionColor][0] + ' 100%);left: -1px;height: 1%;bottom: 100%;}} @keyframes botonDerecha' + posicionColor + ' {from{background: linear-gradient(to bottom, ' + colorDegradado[posicionColor][1] + ' 0%, ' + colorDegradado[posicionColor][0] + ' 100%);padding-right: 1px;height: 0%;top: -1px;right: -1px;width: 1px;}70%{background: linear-gradient(to bottom, ' + colorDegradado[posicionColor][1] + ' 10%, ' + colorDegradado[posicionColor][0] + ' 100%);padding-right: 1px;height: 100%;top: 0;right: -1px;width: 1px;}to{background: linear-gradient(to bottom, rgb(36, 33, 33) 20%, ' + colorDegradado[posicionColor][0] + ' 100%);padding-right: 1px;height: 0%;top: 100%;right: -1px;width: 1px;}}   @keyframes reelBackground' + posicionColor + ' {from{background-color: rgb(36, 33, 33); color: ' + colorDegradado[posicionColor][0] + ';}20%{background-color: ' + colorDegradado[posicionColor][0] + ';box-shadow: 0px 0px 30px ' + colorDegradado[posicionColor][0] + ';color: ' + colorDegradado[5][0] + '; text-shadow: 0px 0px 20px white;} 70%{background-color: ' + colorDegradado[posicionColor][0] + ';box-shadow: 0px 0px 30px ' + colorDegradado[posicionColor][0] + ';color: ' + colorDegradado[5][0] + ';text-shadow: 0px 0px 20px ' + colorDegradado[5][0] + ';} to{background-color: rgb(36, 33, 33);color: ' + colorDegradado[posicionColor][0] + ';}}';

    var style = document.createElement('style');
    style.setAttribute("id", "estiloColorBotonReel");

    style.appendChild(document.createTextNode(css));

    var style2 = document.getElementById("estiloColorBotonReel");
    var padreStyle = style2.parentNode;

    padreStyle.replaceChild(style, style2);


    boton1.style.animation = 'botonArriba' + posicionColor + ' 1s linear';

    setTimeout(() => {
        boton2.style.animation = 'botonDerecha' + posicionColor + ' 1s linear';
    }, 700);

    setTimeout(() => {
        boton1.style.animation = 'botonAbajo' + posicionColor + ' 1s linear';
    }, 1300);

    setTimeout(() => {
        boton2.style.animation = 'botonIzquierda' + posicionColor + ' 1s linear';
    }, 2000);

    setTimeout(() => {
        cajaReel.style.animation = 'reelBackground' + posicionColor + ' 3s linear';
    }, 2800);

    setTimeout(() => {

        titulo1[0].style.animation = "desvanecer1 linear 10s infinite";
        titulo2[0].style.animation = "desvanecer2 linear 10s infinite";
        grupoTitulo[1].style.opacity = "0";
        grupoTitulo[0].style.opacity = "100%";
    }, 7000);
}

/*En esta parte obtengo los elementos que son las tarjetas y zonas de cada esquina, en cada esquina cambio las
propiedades de la tarjeta y da el efecto de hundirse al pasar el mouse
*/

var zona = document.getElementsByClassName("zona");
var tarjeta = document.getElementsByClassName("tarjetaCargo");
var tarjetaP;
var zonaP;

tarjeta[0].addEventListener("mouseover", function () {
    zonaP = [0, 1, 2, 3];
    tarjetaP = 0;
    moverTarjetas();
})
tarjeta[1].addEventListener("mouseover", function () {
    tarjetaP = 1;
    zonaP = [4, 5, 6, 7];
    moverTarjetas();
})
tarjeta[2].addEventListener("mouseover", function () {
    tarjetaP = 2;
    zonaP = [8, 9, 10, 11];
    moverTarjetas();
})

function moverTarjetas() {
    tarjeta[tarjetaP].addEventListener("mouseout", function () {
        tarjeta[tarjetaP].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
    })

    zona[zonaP[0]].addEventListener("mouseover", function () {
        tarjeta[tarjetaP].style.transform = "matrix3d(1, 0, 0, -.0001, 0, 1, 0, -.0001, 0, 0, 1, 0, 0, 0, 0, 1)";
    })

    zona[zonaP[1]].addEventListener("mouseover", function () {
        tarjeta[tarjetaP].style.transform = "matrix3d(1, 0, 0, .0001, 0, 1, 0, -.0001, 0, 0, 1, 0, 0, 0, 0, 1)";
    })

    zona[zonaP[2]].addEventListener("mouseover", function () {
        tarjeta[tarjetaP].style.transform = "matrix3d(1, 0, 0, -.0001, 0, 1, 0, .0001, 0, 0, 1, 0, 0, 0, 0, 1)";
    })

    zona[zonaP[3]].addEventListener("mouseover", function () {
        tarjeta[tarjetaP].style.transform = "matrix3d(1, 0, 0, .0001, 0, 1, 0, .0001, 0, 0, 1, 0, 0, 0, 0, 1)";
    })

    tarjeta[tarjetaP].addEventListener("mouseout", function () {
        tarjeta[tarjetaP].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
    })
}


function marcarNavegador(posicion) {
    posicionNavegador = posicion;
    
    var itemNavegador = document.querySelectorAll(".navegador a");

    centroCuerpo.style.scrollTop = "50%";

    itemNavegador[0].style.color = "";
    itemNavegador[1].style.color = "";
    itemNavegador[2].style.color = "";
    itemNavegador[3].style.color = "";
    itemNavegador[4].style.color = "";
    itemNavegador[5].style.color = "";

    itemNavegador[posicion].style.color = colores[posicionColor];
}


centroCuerpo.addEventListener('scroll', function () {
    var porcentaje = ((centroCuerpo.scrollTop * 100) / 4570);
    console.log(porcentaje);
    barra.style.width = porcentaje + "%";
    
    if (porcentaje >= 0 & porcentaje < 8.7) {
        marcarNavegador(0);
    } else if (porcentaje >= 8.7 & porcentaje < 24) {
        marcarNavegador(1);
        simpleParallax[0].style.opacity = "1";
    } else if (porcentaje >= 24 & porcentaje < 50.9) {
        marcarNavegador(2);
        simpleParallax[1].style.opacity = "1";
    } else if (porcentaje >= 50.9 & porcentaje < 78) {
        marcarNavegador(3);
        simpleParallax[2].style.opacity = "1";
    } else if (porcentaje >= 78) {
        marcarNavegador(4);
        simpleParallax[3].style.opacity = "1";
    }

    if (porcentaje > 90) {
        barra.style.width = porcentaje + 10 + "%";
    }   
});
