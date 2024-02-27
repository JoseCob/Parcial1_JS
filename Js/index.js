//Agrega un event listener al documento para que se ejecute el código una vez que el DOM esté cargado y listo para interactuar
document.addEventListener('DOMContentLoaded', function() {//Se crea el DOM de la página

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

    // Selecciona el elemento webDuolingo del documento HTML
    const appContainer = document.getElementById("webDuolingo");
  
    const h1 = document.createElement("h1");//Crea un nuevo elemento h1
    h1.textContent = "Lista de Tareas";//Establece el contenido del elemento h1 como "Lista de Tareas"
    appContainer.appendChild(h1);//Agrega el elemento h1 al elemento webDuolingo
    const webDuolingo = document.getElementById("webDuolingo");/*Selecciona el elemento webDuolingo del documento HTML para 
    poder utilizarlo como contenedor principal para agregar otros elementos dinámicamente con JavaScript*/
});