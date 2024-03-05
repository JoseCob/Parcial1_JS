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
        //Añade el archivo CSS main
        const stylesMain = document.createElement('link');
        stylesMain.rel = 'stylesheet';
        stylesMain.type = 'text/css';
        stylesMain.href = '../Css/main.css';
        const headCSS3 = document.querySelector('head');
        headCSS3.appendChild(stylesMain);

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
        let navbarSticky = document.getElementById('sticky');

        /* Logica relacionada con el sticky del headDuolingo de la página + scroll */
        const rect = getbtnElementHD.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {//Obtiene la parte superior e inferior del botón
            btnEmpAhora.innerHTML = '<button class="btnHeader"><span>IDIOMA DE LA PÁGINA: ESPAÑOL</span><img alt="carácter del header" class="caracterHeader" src="../images/caracterEspecial.svg"></button>';
        }else {
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
    <div class="containerotherElements">
        <div></div><!--Aqui iria una clase con scroll para ir pintando la pagina hasta llegar a 1-->
        <section class="otherContentElements">
            <section class="leftDirectionContentrOther">
                <div class="textContainerLeftDirection">
                    <h2 class="textTitleLeftDirection">divertido, efectivo y gratis</h2>
                    <p class="contentSubTextLeft">
                        <span>
                            Aprender con Duolingo es divertido y <a class="textImportant" href="#enlace">los estudios demuestran que funciona</a>. 
                            ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo 
                            tiempo que desarrollas tus habilidades de comunicación en la vida real!
                        </span>
                    </p>
                </div>
                <div class="imgContentLeftDirection">
                    <img class="imgLeftDirection" alt="gifDuo2" src="../images/Duo2.gif">
                </div>
            </section>
            <section class="otherContentElements2 leftDirectionContentrOther">
                <div class="textContainerLeftDirection">
                    <h2 class="textTitleLeftDirection">respaldado por la ciencia</h2>
                    <p class="contentSubTextLeft">
                        <span>
                            Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido 
                            entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar 
                            en otros idiomas.
                        </span>
                    </p>
                </div>
                <div class="imgContentLeftDirection">
                    <img class="imgLeftDirection" alt="gifDuo3" src="../images/Duo3.gif">
                </div>
            </section>
            <section class="leftDirectionContentrOther">
                <div class="textContainerLeftDirection">
                    <h2 class="textTitleLeftDirection">mantén tu motivación</h2>
                    <p class="contentSubTextLeft">
                        <span>
                            Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. 
                            ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás 
                            recordatorios de nuestra adorable mascota, Duo, el búho.
                        </span>
                    </p>
                </div>
                <div class="imgContentLeftDirection">
                    <img class="imgLeftDirection" alt="gifDuo4" src="../images/Duo4.gif">
                </div>
            </section>
            <section class="otherContentElements2 leftDirectionContentrOther">
                <div class="textContainerLeftDirection">
                    <h2 class="textTitleLeftDirection">aprendizaje personalizado</h2>
                    <p class="contentSubTextLeft">
                        <span>
                            Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se 
                            adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.
                        </span>
                    </p>
                </div>
                <div  class="imgContentLeftDirection">
                    <img class="imgLeftDirection" alt="gifDuo5" src="../images/Duo5.gif">
                </div>
            </section>
        </section>
        <section class="containeroMarket">
            <div class="contentMarket">
                <div class="contentBtnMarket">
                    <h1 class="titleMarket">aprende cuando quieras y donde quieras</h1>
                    <div class="containerBtnMarket">
                        <a class="btnMarket" href="#enlace">
                            <span>
                                <img src="../images/App_store.png" width="140px" height="32px">
                            </span>
                        </a>
                        <a class="btnMarket" href="#enlace">
                            <span>
                                <img src="../images/Play_store.png" width="140px" height="32px">
                            </span>
                        </a>
                    </div>
                    <img class="Duo12Gif" src="../images/Duo12.gif">
                </div>
                <div>
                    <img class="duoOfice" alt="fontOficialDuolingo" src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/229d5f88cc9df2eb0b68f39466500911.svg">
                </div>
            </div>
        </section>
    </div>
    <section class="fontSuperDuo">
        <div class="containerSuperDuolingo">
            <div class="contentDuo">
                <img src="../images/Duo6.gif" class="imgSuperDuo">
            </div>
            <div class="containerbtnSuperDuo">
                <img class="imgSuperText" alt="Super Duolingo" src="../images/superText.png"height="91" width="605">
                <button class="superBtnDuo">
                    <span class="textSuperD">Prueba 2 semanas gratis</span>
                </button>
            </div>
        </div>
    </section>
    <section class="theContainerotherElements">
        <section class="leftDirectionContentrOther">
            <div class="textContainerLeftDirection">
                <h2 class="textTitleLeftDirection">
                    <span>duolingo english test</span>
                </h2>
                <p class="contentSubTextLeft">
                    Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los 
                    últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad 
                    de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí. 
                </p>
                <a class="thebtncontentOtherElements" href="#enlace">
                    <span class="theTextOtherElements">Certifica tu inglés</span>
                </a>
            </div>
            <div class="imgContentLeftDirection">
                <img class="imgLeftDirection" alt="Duo7" src="../images/Duo7.gif">
            </div>
        </section>
        <section class="otherContentElements2 leftDirectionContentrOther">
            <div class="textContainerLeftDirection">
                <h2 class="textTitleLeftDirection">
                    <span>duolingo for schools</span>
                </h2>
                <p class="contentSubTextLeft">
                    Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes 
                    a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.
                </p>
                <a class="thebtncontentOtherElements" href="#enlace">
                    <span class="theTextOtherElements">Potencia tu salón de clases</span>
                </a>
            </div>
            <div class="imgContentLeftDirection">
                <img class="imgLeftDirection" alt="gifDuo8" src="../images/Duo8.gif">
            </div>
        </section>
        <section class="leftDirectionContentrOther">
            <div class="textContainerLeftDirection">
                <h2 class="textTitleLeftDirection">
                    <span>duolingo abc</span>
                </h2>
                <p class="contentSubTextLeft">
                    ¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, 
                    Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente 
                    gratis!
                </p>
                <a class="thebtncontentOtherElements" href="#enlace">
                    <span class="theTextOtherElements">Conoce Duolingo ABC</span>
                </a>
            </div>
            <div class="imgContentLeftDirection">
                <img class="imgLeftDirection2" alt="Duo9" src="../images/Duo9.gif">
            </div>
        </section>
        <section class="otherContentElements2 leftDirectionContentrOther">
            <div class="textContainerLeftDirection">
                <h2 class="textTitleLeftDirection">
                    <span>duolingo math</span>
                </h2>
                <p class="contentSubTextLeft">
                    ¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán 
                    adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza 
                    matemática.
                </p>
                <a class="thebtncontentOtherElements" href="#enlace">
                    <span class="theTextOtherElements">Mejora en matemática</span>
                </a>
            </div>
            <div class="imgContentLeftDirection">
                <img class="imgLeftDirection3" alt="gifDuo10" src="../images/Duo10.gif">
            </div>
        </section>
    </section>`;
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

    //Estilos no globales
    const styles= document.createElement('Style');
    styles.textContent=`
    /*Estilo para el menú de navegación*/
    .headersticky{
      background: rgb(255, 255, 255);
      border-bottom: 2px solid transparent;
      position: fixed;
      width: 100%;
      z-index: 2;
    }
    .header {
      align-items: center;
      display: flex;
      height: 70px;
      justify-content: center;
      padding: 0 15px;
      justify-content: space-between;
    }
    .duoLogo{
      height: 38px;
      width: 161px;
    }
    .btnHeader{
      color: rgb(175, 175, 175);
      font-weight: bold;
      align-items: center;
      display: flex;
      white-space: nowrap;
      text-transform: uppercase;
      background: none;
      border: none;
      cursor: pointer;
      user-select: none;
      padding: 0;
      transition: filter .2s;
      font-size: 13.5px;
      letter-spacing: .8px;
    }
    .caracterHeader{
      height: 14px;
      margin-left: 8px;
      width: 14px;
    }
    /*Estilo del Seguimiento del navbar en la página con el atributo sticky*/
    #stickyContent{
      padding: 16px;
    }
    .sticky {
      position: fixed;
      top: 0;
      width: 100%;
      border-bottom: 0 solid transparent; /* Añadir esta línea */
      transition: border-bottom 0.25s ease-in-out; /* Añadir esta línea */
      z-index: 100;
    }
    .sticky.active {
      border-bottom: 2px solid #E5E5E5; /* Añadir esta línea */
    }
    /*Estilo para el botón oculto en el navbar*/
    /*clase para el btnEmpAhora*/
    .hideBtn {/*clase que Oculta un elemento de tipo botón*/
      display: none;
    }
    .btnEmpAhora{
      padding: 9px;/*Contenedor del botón*/
      width: 142px;/*Ancho del boton de forma independiente por la etiqueta <a>*/
      color: #ffffff;/*Color del texto del botón*/
      background-color: #58CC02;/*Color de fondo del botón*/
      border-radius: 12px;/*Genera Borde redondo*/
      border-bottom: 4px solid #58A700; /*Propiedad de atajo para bordes inferiores */
      border-top: 2px solid #58CC02;/*Propiedad de atajo para bordes superior */
      border-right: 2px solid #58CC02;/*Propiedad de atajo para bordes derecho*/
      border-left: 2px #58CC02;/*Propiedad de atajo para bordes izquierdo*/
      font-weight: bold;/*Textto en negritas*/
      font-size: 15px;/*Tamaño del texto*/
      cursor: pointer;/*Cambia el Puntero del mouse*/
      text-transform: uppercase;
      text-align: center;
    }
    .btnEmpAhora:hover{
      background-color: #61E002;/*Color de fondo del botón*/
      border-top: 2px solid #61E002;/*Propiedad de atajo para bordes superior */
    }
    .btnEmpAhora:active{
      padding: 7px;
      background-color: #61E002;
      border-bottom: 2px solid #58CC02;
      border-right: 2px solid #61E002;
      width: 146px;
      margin-top: 3px;
    }
    /*Fin del menú de navegación */

    /*Estilos para el elemento del contenedor containerHome de la página principal*/
    .container{
      box-sizing: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 88vh;
      max-width: 98%;
      padding: 48px 0px;
      overflow: hidden;
      position: relative;
    }
    .containerElements{/*clase del Contenedor de elementos*/
      align-items: end;
      display: flex;
      flex: 1;
      justify-content: center;
      gap: 80px;
      margin-top: -130px;
      position: absolute;
    }
    .contentIMG{/*Contenido de la imagen*/
      user-select: none;
      max-width: 100vh;
      margin-top: 50px;
      margin-left: -50px;
    }
    .containerCenter{/*Clase para centrar el título del h1*/
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-left: -3vw;
    }
    .containerButtons{/*Clase contenedor de los botones*/
      display: flex;
      line-height: normal;
      flex-direction: column;
      gap: 30px;
      max-width: 330px;
      width: 100%;
      margin-top: 15px;
    }
    .textButtonContainerHome{/*Clase para el texto dentro del botón de la página principal*/
      margin-top: -5px;/*Desplaza el texto hacia la parte superior*/
    }
    .btn1{
      padding: 15px;/*Contenedor del botón*/
      width: 327px;/*Ancho del boton de forma independiente por la etiqueta <a>*/
      color: #ffffff;/*Color del texto del botón*/
      background-color: #58CC02;/*Color de fondo del botón*/
      border-radius: 14px;/*Genera Borde redondo*/
      border-bottom: 4px solid #58A700; /*Propiedad de atajo para bordes inferiores */
      border-top: 2px solid #58CC02;/*Propiedad de atajo para bordes superior */
      border-right: 2px solid #58CC02;/*Propiedad de atajo para bordes derecho*/
      border-left: 2px #58CC02;/*Propiedad de atajo para bordes izquierdo*/
      font-weight: bold;/*Textto en negritas*/
      font-size: 15px;/*Tamaño del texto*/
      cursor: pointer;/*Cambia el Puntero del mouse*/
    }
    .btn1:hover{
      background-color: #61E002;/*Color de fondo del botón*/
      border-top: 2px solid #61E002;/*Propiedad de atajo para bordes superior */
    }
    .btn1:active{
      margin-top: 3px;
      padding: 14.5px;/*Contenedor del botón*/
      background-color: #61E002;
      border-bottom: 2px solid #58CC02; /*Propiedad de atajo para bordes inferiores */
    }
    .btn2{
      margin-top: -15px;/*Desplaza hacia abajo el botón*/
      padding: 16px;/*Contenedor del botón*/
      color: #1EB1F6;/*Color del texto del botón*/
      background-color: #ffffff;/*Color de fondo del botón*/
      border-radius: 14px;/*Genera Borde redondo*/
      border-bottom: 4px solid #E5E5E5;/*Propiedad de atajo para bordes inferiores*/
      border-top: 2px solid #E5E5E5;/*Propiedad de atajo para bordes superior*/
      border-right: 2px solid #E5E5E5;/*Propiedad de atajo para bordes derecho*/
      border-left: 2px solid #E5E5E5;/*Propiedad de atajo para bordes izquierdo*/
      font-weight: bold;/*Texto en negritas*/
      font-size: 15px;/*Tamaño del texto*/
      cursor: pointer;/*Cambia el Puntero del mouse*/
    }
    .btn2:hover{
      background-color: #E5E5E5;
      border-color: #CECECE;
    }
    .btn2:active{
      margin-top: -10px;
      padding: 13.5px;/*Contenedor del botón*/
      background-color: #E5E5E5;
    }
    .btn2:focus:not(:hover) {/*Esta clase hace que el botón recupere el hover cuando este pierde el foco*/
      background-color: #ffffff;
    }
    /*Fin del menú de containerHome */

    /*Clase para el carrusel de banderas*/
    .containerFlag{
      align-items: center;
      border-bottom: 2px solid #E5E5E5;
      border-top: 2px solid #E5E5E5;
      display: flex;
      height: 75px;
      justify-content: center;
      padding: 0 40px;
      position: relative;
    }
    .containerCarouselFlags{
      max-width: 1036px;
      grid-gap: 20px;
      align-items: center;
      display: grid;
      grid-template-columns: min-content 1fr min-content;
      margin: auto;
      overflow-x: auto;
    }
    .directionArrow{
      color: rgb(175,175,175,1,);
      cursor: pointer;
      height: 22px;
      opacity: .5;
      width: 14px, 22px;
      user-select: none;
    }
    .carouselFlags{
      overflow: hidden;
    }
    .lineFlags{
      display: flex;
      gap: 20px;
      transition: transform .5s ease-in-out;
    }
    /*Clase para el contenido de las banderas*/
    .Flag{
      align-items: center;
      color: rgb(119, 119, 119, 1);
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
    .svgFlag{
      margin-right: 10px;
    }
    .textFlag{
      font-size: 15px;
      font-weight: 700;
      letter-spacing: .8px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    /*Fin Clase para el carrusel de banderas*/

    /*Estilos para el elemento del contenedor footer*/
    .containerFooter{
        display: grid;
        gap: 20px;
        grid-template-columns: minmax(0, 216px);
        margin: 0 auto;
        max-width: 375px;
        overflow-wrap: anywhere;
        padding: 96px 32px 64px;
    }
    .containerFooter ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .containerFooter a{
        color: rgb(165,237,110);
        font-size: 15px;
        font-weight: 700;
        line-height: 22px;
    }

    .contentFooter{
        align-content: start;
        display: grid;
        gap: 32px;
    }
    .categoryFooter{
        color: rgb(215,255,184);
        font-size: 19px;
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 12px;
    }
    .separatorLine{
        border-top: 2px solid rgb(165,237,110);
        margin: 0;
    }
    .subContentFooter{
        margin: 0 auto;
    }
    .textSubFooter{
        color: rgb(215,255,184);
        font-size: 15px;
        font-weight: 700;
        line-height: 22px;
        margin-bottom: 16px;
    }
    .subNavFooter{
        margin: -8px -12px;
    }
    .subNavFooter {
        margin: -8px -12px;
    }
    .textNavFooter{
        display: inline-block;
        margin: 8px 12px;
    }
    /*Estilos para el footer responsivo*/
    @media screen and (min-width: 1080px){
        /*clase responsiva del navbar*/
        .header{
            margin: 0 auto;
            max-width: 988px;
            padding: 0;
        }
        /*clase responsiva del main*/

        /*clase responsiva del footer*/
        .containerFooter{
            gap: 24px;
            grid-template-columns: repeat(5, 178px);
            max-width: 988px;
            padding: 96px 0 64px;
        }
        .subContentFooter{
            max-width: 988px;
            padding: 40px 0 64px;
        }
        .subContentFooter a{
            color: rgb(165,237,110);
            font-size: 11.8px;
            font-weight: 700;
            line-height: 22px;
        }
    }
    /*FIN de Estilos para el elemento del contenedor footer*/
    `;
    document.head.appendChild(styles)//Se añade los estilos al head de la página
});