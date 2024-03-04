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
        //Añade el archivo CSS main
        const stylesMain = document.createElement('link');
        stylesMain.rel = 'stylesheet';
        stylesMain.type = 'text/css';
        stylesMain.href = '../Css/main.css';
        const headCSS3 = document.querySelector('head');
        headCSS3.appendChild(stylesMain);
        //Añade el archivo CSS footer
        const stylesFooter = document.createElement('link');
        stylesFooter.rel = 'stylesheet';
        stylesFooter.type = 'text/css';
        stylesFooter.href = '../Css/footer.css';
        const headCSS4 = document.querySelector('head');
        headCSS4.appendChild(stylesFooter);

        //Se crea el favicon del sitio
        const linkFavicon = document.createElement('link'); //Crea un nuevo elemento link para enlazar el favicon
        linkFavicon.rel = 'icon';//Establece el atributo rel del elemento link como "icon" para indicar que se trata de una imagen .ico
        linkFavicon.href="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico"//Establece el atributo href del elemento link con la ruta al Favicon para la página
        const headFavicon = document.querySelector('head');//Selecciona el elemento head del documento HTML
        headFavicon.appendChild(linkFavicon);//Agrega el elemento link al elemento head
    //FIN del apartado del "</head>" de nuestro HTML

    //se crea el div del id="headDuolingo">
    const headDuolingo = document.createElement('headDuolingo');
    headDuolingo.id="sticky";
    headDuolingo.classList.add('headersticky');// Añadir una clase específica a la etiqueta footer
    headDuolingo.innerHTML=`
    <div class="header">
        <a href="../Html/index.html"><img src="../images/Duo.svg" class="duoLogo" style="width: 100%; height: 100%;"></a>
        <div>
            <button class="btnHeader">
                <span>IDIOMA DE LA PÁGINA: 
                    ESPAÑOL
                </span>
                    <img alt="carácter del header" class="caracterHeader" src="../images/caracterEspecial.svg">
            </button>
            <a href="#enlace" class="btnEmpAhora hideBtn";><span>Empieza ahora</span></a>
        </div>
    </div>`;
    document.body.appendChild(headDuolingo);
    //Se crea la animación sticky para el Navbar de la página
    //Empieza Cuando el usuario se desplaza por la página, se ejecuta mySticky. *EVENTO CON EL SCROLL*
    window.onscroll = function() {mySticky()};
    let navbar = document.querySelector("headDuolingo");//Se Obtiene el navbar
    let sticky = navbar.offsetTop;//Se Obtiene la posición de desplazamiento del navbar
    /*se añade la clase "sticky" al navbar cuando alcanza una posición específica durante el scroll, 
    y se quita esa clase cuando se deja esa posición*/
    function mySticky() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky", "active")
        } else {
          navbar.classList.remove("sticky" ,"active");
        }
    }

    //Se crea el addEventListener("scroll", (event) => {}); para hacer un evento con el scroll de la página
    addEventListener("scroll", function() {
        let btnEmpAhora = document.querySelector('.btnHeader');//Se selecciona el estilo de la class=".btnHeader"
        let getbtnElementHD = document.getElementById('getBtnHidden');//Se obtiene el elemento id="getBtnHidden"
    
        /* Logica relacionada con el sticky del headDuolingo de la página + scroll */
        const rect = getbtnElementHD.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {//Obtiene la parte superior e inferior del botón
            btnEmpAhora.innerHTML = '<button class="btnHeader"><span>IDIOMA DE LA PÁGINA: ESPAÑOL</span><img alt="carácter del header" class="caracterHeader" src="../images/caracterEspecial.svg"></button>';
        } else {
            btnEmpAhora.innerHTML = '<a href="#enlace" class="btnEmpAhora" style="display:block"><span>Empieza ahora</span></a>';
        }
    });
    
    //Se crea el contenedor del inicio de la pagina
    //se crea el div del id="containerHome"
    const containerHome = document.createElement('containerHome')//se crea el div con el nombre containerHome
    containerHome.innerHTML=`
    <div id="stickyContent" class="container">
        <div class="containerElements">
            <div class="contentIMG"><img src="../images/Duo1.gif"></div>
            <div class="containerCenter">
                <h1>¡La forma divertida, efectiva y <br>gratis de aprender un idioma!</h1>
                <div class="containerButtons">
                    <div id="getBtnHidden"></div>
                    <a href="#enlace">
                        <button class="btn1">
                            <div class="textButtonContainerHome">EMPIEZA AHORA</div>
                        </button>
                    </a>
                    <button class="btn2">
                        <div class="textButtonContainerHome">YA TENGO UNA CUENTRA</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="containerFlag">
        <nav class="containerCarouselFlags">
            <span class="directionArrow linedisplacement">&lang;</span>
                <div class="carouselFlags">
                    <ul class="lineFlags" style="transform: translateX(0px);">
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 0 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Inglés</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 132 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Francés</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 198 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Alemán</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 330 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Italiano</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 594 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Portugués</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 2244 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Catalán</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
                                <svg viewBox="0 528 82 66" class="svgFlag" style="height: 28.9756px; width: 36px;">
                                    <image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                                </svg>
                                <span class="textFlag">Ruso</span>
                            </a>
                        </li>
                        <li>
                            <a href="#enlace" class="Flag">
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
    //Se crea el contenedor main de la pagina
    const main = document.createElement('main');
    main.innerHTML=`
    <div class="main">
        <p>HOLA MUNDO</p>
    </div>`;
    main.classList.add('main');
    document.body.appendChild(main);

    //Se crea el contenedor footer de la pagina
    const footer = document.createElement('footer')//se crea el elemento footer
    // Establecer el contenido HTML del footer
    footer.innerHTML=`
    <div class="containerFooter">
        <div class="contentFooter">
            <div>
                <div class="categoryFooter">Sobre nosotros</div>
                <ul>
                    <li><a href="#enlace">Cursos</a></li>
                    <li><a href="#enlace">Misión</a></li>
                    <li><a href="#enlace">Método de enseñanza</a></li>
                    <li><a href="#enlace">Eficacia</a></li>
                    <li><a href="#enlace">Equipo</a></li>
                    <li><a href="#enlace">Investigación</a></li>
                    <li><a href="#enlace">Empleo</a></li>
                    <li><a href="#enlace">Guía para uso de marca</a></li>
                    <li><a href="#enlace">Tienda</a></li>
                    <li><a href="#enlace">Prensa</a></li>
                    <li><a href="#enlace">Inversionistas</a></li>
                    <li><a href="#enlace">Contáctanos</a></li>
                </ul>
            </div>
        </div>
        <div class="contentFooter">
            <div>
                <div class="categoryFooter">Productos</div>
                <ul>
                    <li><a href="#enlace">Duolingo</a></li>
                    <li><a href="#enlace">Duolingo for Schools</a></li>
                    <li><a href="#enlace">Duolingo English Test</a></li>
                    <li><a href="#enlace">Podcast</a></li>
                    <li><a href="#enlace">Duolingo for Business</a></li>
                    <li><a href="#enlace">Súper Duolingo</a></li>
                    <li><a href="#enlace">Regala Súper Duolingo</a></li>
                </ul>
            </div>
        </div>
        <div class="contentFooter">
            <div>
                <div class="categoryFooter">Aplicaciones</div>
                <ul>
                    <li><a href="#enlace">Duolingo para Android</a></li>
                    <li><a href="#enlace">Duolingo para iOS</a></li>
                </ul>
            </div>
        </div>
        <div class="contentFooter">
            <div>
                <div class="categoryFooter">Ayuda y soporte</div>
                <ul>
                    <li><a href="#enlace">App de Duolingo</a></li>
                    <li><a href="#enlace">Schools</a></li>
                    <li><a href="#enlace">Duolingo English Test</a></li>
                    <li><a href="#enlace">Estado</a></li>
                </ul>
            </div>
        </div>
        <div class="contentFooter">
            <div>
                <div class="categoryFooter">Términos y privacidad</div>
                <ul>
                    <li><a href="#enlace">Normas de la comunidad</a></li>
                    <li><a href="#enlace">Términos</a></li>
                    <li><a href="#enlace">Privacidad</a></li>
                </ul>
            </div>
            <div>
                <div class="categoryFooter">Social</div>
                <ul>
                    <li><a href="#enlace">Blog</a></li>
                    <li><a href="#enlace">Instagram</a></li>
                    <li><a href="#enlace">Facebook</a></li>
                    <li><a href="#enlace">Twitter</a></li>
                    <li><a href="#enlace">YouTube</a></li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="separatorLine">
    <div class="subContentFooter">
        <div class="textSubFooter">Idioma de la página:</div>
        <ul class="subNavFooter">
            <li class="textNavFooter"><a href="#enlace" class="textNav">العربية</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">বাংলা</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Čeština</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Deutsch</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Ελληνικά</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">English</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Español</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Français</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">हिंदी</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Magyar</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Bahasa Indonesia</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Italiano</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">日本語</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">한국어</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Nederlands</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Polski</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Português</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Română</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Русский</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">తెలుగు</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">ภาษาไทย</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Tagalog</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Türkçe</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Українською</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">Tiếng Việt</a></li>
            <li class="textNavFooter"><a href="#enlace" class="textNav">中文</a></li>
        </ul>
    </div>`;
    footer.classList.add('footer');// Añadir una clase específica a la etiqueta footer
    document.body.appendChild(footer);// Agrega el footer al final del body
});