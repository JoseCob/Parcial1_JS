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

    //Inicio de la etiqueta <div> del elemento headDuolingo del documento HTML
    //FIN de ---> etiqueta </div> del elemento headDuolingo del documento HTML

    //Inicio de la etiqueta <div> del elemento containerHome del documento HTML
        const containerHome = document.getElementById("containerHome");//Esta es el elemento padre del div containerHome
        const h1 = document.createElement("h1");//Crea un nuevo elemento h1
        h1.textContent = "¡La forma divertida, efectiva y gratis de aprender un idioma!";//Establece el contenido del elemento h1 como "¡La forma divertida,..."
        containerHome.appendChild(h1);//Agrega el elemento h1 al elemento containerHome

        /*Se añade la imagen de la parte izquierda*/
        const imgContent = document.createElement('img');
        imgContent.src = "../images/Duo1.gif";
        containerHome.insertBefore(imgContent, h1);

        /*Se crea el primer botón*/
        const btn1 = document.createElement("button");
        btn1.textContent = "EMPIEZA AHORA";//Genera el texto del div
        containerHome.append(btn1);//carga el div despues del primer hijo de 
        /*Se crea el Segundo botón*/
        const btn2 = document.createElement("button");
        btn2.textContent = "YA TENGO UNA CUENTA";//Genera el texto del div
        containerHome.append(btn2);//carga el div despues del primer hijo de containerHome

        // Agrega los botones antes del final del contenedor containerHome
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");
        containerHome.appendChild(btnContainer);
        btnContainer.appendChild(btn1);
        btnContainer.appendChild(btn2);
    //FIN de ---> etiqueta </div> del elemento containerHome del documento HTML
});