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
    //FIN del apartado del "</head>" de nuestro HTML

    //se crea el div del id="headDuolingo">
    const headDuolingo = document.createElement('headDuolingo');
    headDuolingo.innerHTML=`
    <div class="header">
        <a href="../Html/index.html" class="logo"><img src="../images/Duo.svg"></a>
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
    <div class="container">
        <div class="containerImg"><img class="text-noSelect" src="../images/Duo1.gif">
            <div class="textCenter">
                <h1>¡La forma divertida, efectiva y <br>gratis de aprender un idioma!</h1>
                <div class="buttons">
                    <button class="btn1">EMPIEZA AHORA</button><br>
                    <button class="btn2">YA TENGO UNA CUENTRA</button>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(containerHome);//Se llama el html para mostrarlo en la pagina
});