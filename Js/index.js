//Agrega un event listener al documento para que se ejecute el código una vez que el DOM esté cargado y listo para interactuar
document.addEventListener('DOMContentLoaded', function() {//Se crea el DOM de la página

    //Se crea el apartado del "<head>" de nuestro HTML
        //Enlaza o Añade el archivo CSS
        const linkStyle = document.createElement('link');//Crea un nuevo elemento link para enlazar el archivo CSS
        linkStyle.rel = 'stylesheet';//Establece el atributo rel del elemento link como "stylesheet" para indicar que se trata de un archivo de estilos
        linkStyle.type = 'text/css';//Establece el atributo type del elemento link como "text/css" para indicar que el archivo contiene hojas de estilo en cascada
        linkStyle.href = '../Css/styles.css';//Establece el atributo href del elemento link con la ruta al archivo CSS para la página 
        const headCSS = document.querySelector('head');//Selecciona el elemento head del documento HTML
        headCSS.appendChild(linkStyle);//Agrega el elemento link al elemento head
        //Se crea el favicon del sitio
        const linkFavicon = document.createElement('link'); //Crea un nuevo elemento link para enlazar el favicon
        linkFavicon.rel = 'icon';//Establece el atributo rel del elemento link como "icon" para indicar que se trata de una imagen .ico
        linkFavicon.href="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico"//Establece el atributo href del elemento link con la ruta al Favicon para la página
        const headFavicon = document.querySelector('head');//Selecciona el elemento head del documento HTML
        headFavicon.appendChild(linkFavicon);//Agrega el elemento link al elemento head
        //Se crea el enlace para Font Awesome
        const linkFontAwesome = document.createElement('link')
        linkFontAwesome.rel = 'stylesheet';
        linkFontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        const headFontAwesome = document.querySelector('link');
        headFontAwesome.appendChild(linkFontAwesome);
    //FIN del apartado del "</head>" de nuestro HTML

    //se crea el div del id="headDuolingo">
    const headDuolingo = document.getElementById('headDuolingo');
    headDuolingo.innerHTML=`
    <div class="header">
        <a href="../Html/index.html" class="logo"><img src="../images/Duo.svg"></a></li>
        <div class="header-right">
            <a href="#" class="text-noSelect">IDIOMA DE LA PÁGINA: ESPAÑOL&nbsp;<i class="fa fa-angle-down"></i></a>
        </div>
    </div>`;

    //se crea el div del id="headDuolingo">
    const containerHome = document.getElementById('containerHome');
    containerHome.innerHTML=`
    <div class="container">
        <div class="containerImg text-noSelect"><img src="../images/Duo1.gif"></div>
        <div class="container-textCenter">
            <h1>¡La forma divertida, efectiva y gratis de aprender un idioma!</h1>
            <button>EMPIEZA AHORA</button>
            <button>YA TENGO UNA CUENTRA</button>
        </div>
    </div>`;
});