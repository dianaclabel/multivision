/* Acceder al boton hamburguesa a través de la clase .menu-toggle*/ 
var menuToggle = document.querySelector('.menu-toggle');


/*Acceder al menú de opciones vertical , a traves  de la clase .nav-menu*/
var navMenu = document.querySelector('.nav-menu');


/*Programa el evento click del boton  hamburguesa para alternar la visualización de la barra de menú vertical */

menuToggle.onclick = () => {
  
  navMenu.classList.toggle('active');
}