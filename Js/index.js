//Agrega un event listener al documento para que se ejecute el código una vez que el DOM esté cargado y listo para interactuar
document.addEventListener('DOMContentLoaded', function() {//Se crea el DOM de la página

    //Se crea el apartado del "<head>" de nuestro HTML
        //Añade el archivo CSS stylesPrimal
        const stylesPrimal = document.createElement('link');//Crea un nuevo elemento link para enlazar el archivo CSS
        stylesPrimal.rel = 'stylesheet';//Establece el atributo rel del elemento link como "stylesheet" para indicar que se trata de un archivo de estilos
        stylesPrimal.type = 'text/css';//Establece el atributo type del elemento link como "text/css" para indicar que el archivo contiene hojas de estilo en cascada
        stylesPrimal.href = '../Css/stylesPrimal.css';//Establece el atributo href del elemento link con la ruta al archivo CSS para la página 
        const headCSS1 = document.querySelector('head');//Selecciona el elemento head del documento HTML
        headCSS1.appendChild(stylesPrimal);//Agrega el elemento link al elemento head
        //Añade el archivo CSS navBar
        const stylesNavBar = document.createElement('link');//Crea un nuevo elemento link para enlazar el archivo CSS
        stylesNavBar.rel = 'stylesheet';//Establece el atributo rel del elemento link como "stylesheet" para indicar que se trata de un archivo de estilos
        stylesNavBar.type = 'text/css';//Establece el atributo type del elemento link como "text/css" para indicar que el archivo contiene hojas de estilo en cascada
        stylesNavBar.href = '../Css/navBar.css';//Establece el atributo href del elemento link con la ruta al archivo CSS para la página 
        const headCSS2 = document.querySelector('head');//Selecciona el elemento head del documento HTML
        headCSS2.appendChild(stylesNavBar);//Agrega el elemento link al elemento head
        //Se crea el favicon del sitio
        const linkFavicon = document.createElement('link'); //Crea un nuevo elemento link para enlazar el favicon
        linkFavicon.rel = 'icon';//Establece el atributo rel del elemento link como "icon" para indicar que se trata de una imagen .ico
        linkFavicon.href="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico"//Establece el atributo href del elemento link con la ruta al Favicon para la página
        const headFavicon = document.querySelector('head');//Selecciona el elemento head del documento HTML
        headFavicon.appendChild(linkFavicon);//Agrega el elemento link al elemento head
    //FIN del apartado del "</head>" de nuestro HTML

    //se crea el div del id="headDuolingo">
    const headDuolingo = document.createElement('headDuolingo');
    headDuolingo.innerHTML=`
    <div class="header">
        <a href="../Html/index.html" class="logo"><img src="../images/Duo.svg" style="width: 100%; height: 100%;"></a>
        <div class="header-right">
            <button class="btnHeader">
                <span class="spanHeader">IDIOMA DE LA PÁGINA: 
                    ESPAÑOL
                </span>
                    <img alt="carácter del header" class="caracterHeader" src="../images/caracterEspecial.svg">
            </button>
        </div>
    </div>`;
    document.body.appendChild(headDuolingo);

    //Se crea el contenedor del inicio de la pagina
    //se crea el div del id="containerHome"
    const containerHome = document.createElement('containerHome')//se crea el div con el nombre containerHome
    containerHome.innerHTML=`
    <!--Sección del contenido principal-->
    <div class="container">
        <div class="containerElements">
            <div class="contentIMG"><img src="../images/Duo1.gif"></div>
            <div class="containerCenter">
                <h1>¡La forma divertida, efectiva y <br>gratis de aprender un idioma!</h1>
                <div class="containerButtons">
                    <a href="#">
                        <button class="btn1">
                            <div class="textButtonContainerHome">EMPIEZA AHORA</div>
                        </button>
                    </a>
                    <button class="btn2" id="buttonReset">
                        <div class="textButtonContainerHome">YA TENGO UNA CUENTRA</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!--Sección de las banderas-->
    <div class="containerFlag">
        <nav class="containerCarouselFlags">
            <span class="directionArrow linedisplacement">&lang;</span>
                <div class="carouselFlags">
                    <ul class="lineFlags" style="transform: translateX(0px);">
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 0 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Inglés</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 132 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Francés</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 198 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Alemán</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 330 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Italiano</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 594 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Portugués</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 2244 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Catalán</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 528 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Ruso</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="Flag">
                                <svg viewBox="0 792 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Sueco</span>
                            </a>
                        </li>
                    </ul>
                </div>
            <span class="directionArrow linedisplacement">&rang;</span>
        </nav>
    </div>`;
    document.body.appendChild(containerHome);//Se llama el html para mostrarlo en la pagina
    //Se crea la animación para el carrusel de las banderas
    const lineFlags = document.querySelector('.lineFlags');
    const directionArrows = document.querySelectorAll('.directionArrow.linedisplacement');
    //función de devolución de llamada, busca todos los elementos relacionados con '.directionArrow.linedisplacement' en la variable directionArrows
    directionArrows.forEach(directionArrow => {
        directionArrow.addEventListener('click', function() {//Activa el evento al hacer clic en el elemento seleccionado
            const currentTransform = lineFlags.style.transform;//Cambia o altera el estilo de la clase transform
            if (currentTransform === 'translateX(0px)') {//Posicion inicial
                lineFlags.style.transform = 'translateX(-146.653px)';/*Posicion alterada en '-146.653px' al 
                hacer clic al elemento si se encuentra en '0px'*/ 
            } else {
                lineFlags.style.transform = 'translateX(0px)';//regresa a la posicion inicial si no ubica el translateX(0px)
            }
        });
    });
});