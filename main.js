const menuHamburguesa = document.getElementById("menu-hamburguesa");
const menuPrincipal = document.getElementsByClassName("header-list")[0];
const enlacesMenu = document.querySelectorAll(".header-list a");
const cerrarMenu = document.querySelector(".cerrar-menu button");

menuHamburguesa.addEventListener('click', () => {
    menuPrincipal.classList.toggle('mostrar-menu');
    menuHamburguesa.style.display = 'none';
});

enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        menuPrincipal.classList.remove('mostrar-menu');
        menuHamburguesa.style.display = 'block';
    });
});

cerrarMenu.addEventListener('click', function(){
    menuPrincipal.classList.remove('mostrar-menu');
    menuHamburguesa.style.display = 'block';
});