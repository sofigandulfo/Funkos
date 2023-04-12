// NAV ABRIR Y CERRAR

const menuHamburguesa = document.getElementById("menu-hamburguesa");
const menuPrincipal = document.getElementsByClassName("header-list")[0];
const enlacesMenu = document.querySelectorAll(".header-list a");
const cerrarMenu = document.querySelector(".cerrar-menu button");

menuHamburguesa.addEventListener('click', function () {
    menuPrincipal.classList.toggle('mostrar-menu');
    menuHamburguesa.style.display = 'none';
});

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        menuPrincipal.classList.remove('mostrar-menu');
        menuHamburguesa.style.display = 'block';
    });
});

cerrarMenu.addEventListener('click', function () {
    menuPrincipal.classList.remove('mostrar-menu');
    menuHamburguesa.style.display = 'block';
});


//BOTON FILTRO SHOP

const botonFiltro = document.getElementById("filtros");
const formFiltro = document.getElementsByClassName("form-shop")[0];

botonFiltro.addEventListener('click', function () {{
    if (formFiltro.classList.contains('mostrar-form')) {
        formFiltro.style.display = 'none';
        formFiltro.classList.remove('mostrar-form')
    }
    else {
        formFiltro.classList.toggle('mostrar-form');
        formFiltro.style.display = 'flex';
    }}})