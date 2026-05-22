/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('btn-email').addEventListener('click', function() {
    // 1. Obtenemos el correo desde el atributo data-email
    const email = this.getAttribute('data-email');
    
    // 2. Usamos la API del navegador para copiar al portapapeles
    navigator.clipboard.writeText(email).then(() => {
        // 3. Si se copia con éxito, mostramos la notificación
        const toast = document.getElementById('toast-notification');
        toast.classList.add('show');
        
        // 4. Ocultamos la notificación después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Error al copiar el correo: ', err);
    });
});
