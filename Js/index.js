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
    <nav class="containerFlag">
        <span>&lang;</span>
            <div class="carouselFlags">
                <ul>
                    <li>
                        <a href="#">
                            <svg viewBox="0 0 82 66" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="ingles" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Inglés</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 132 82 66" data-test="flag-fr" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="frances" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Francés</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 198 82 66" data-test="flag-de" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="aleman" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Alemán</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 330 82 66" data-test="flag-it" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="italiano" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Italiano</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 594 82 66" data-test="flag-pt" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="portugues" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Portugués</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 2244 82 66" data-test="flag-ca" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="catalan" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Catalán</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 528 82 66" data-test="flag-ru" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="ruso" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Ruso</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg viewBox="0 792 82 66" data-test="flag-sv" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                                <image height="3168" class="sueco" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                            </svg>
                            <span>Sueco</span>
                        </a>
                    </li>
                </ul>
            </div>
        <span>&rang;</span>
    </nav>`;
    document.body.appendChild(containerHome);//Se llama el html para mostrarlo en la pagina
});