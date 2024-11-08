/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/client.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'Sport Development - Store';
// Constante para establecer el elemento del título principal.
const MAIN_TITLE = document.getElementById('mainTitle');
MAIN_TITLE.classList.add('text-center', 'py-3');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const DATA = await fetchData(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('login.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #245C9D;">
                        <div class="container">
                            <a class="navbar-brand d-flex align-items-center text-white" href="index.html">
                                <img src="../../resources/img/logo.png" height="50" alt="CoffeeShop" class="px-2">
                                <span>Sport Development</span>
                            </a>
                            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="bi bi-list"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav ms-auto flex-lg-row flex-column">
                                    <a class="nav-link text-white" href="index.html">
                                        <i class="bi bi-shop"></i> Catálogo
                                    </a>
                                    <a class="nav-link text-white" href="cart.html">
                                        <i class="bi bi-cart"></i> Carrito
                                    </a>
                                    <a class="nav-link text-white" href="order.html">
                                        <i class="bi bi-truck"></i> Pedidos
                                    </a>
                                    <a class="nav-link text-white" href="history.html">
                                        <i class="bi bi-hourglass-split"></i> Historial
                                    </a>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cuenta: <strong>${DATA.name}</strong>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="profile.html"><i class="bi bi-pencil"></i> Editar perfil</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item text-danger" href="#" onclick="logOut()"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a></li>
                                        </ul>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            `);
        } else {
            location.href = 'index.html';
        }
    } else {
        // Se agrega el encabezado de la página web antes del contenido principal.
        MAIN.insertAdjacentHTML('beforebegin', `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #245C9D;">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center text-white" href="index.html">
                        <img src="../../resources/img/logo.png" height="50" alt="CoffeeShop" class="px-2">
                        <span>Sport Development</span>
                    </a>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto flex-lg-row flex-column">
                            <a class="nav-link text-white" href="index.html">
                                <i class="bi bi-shop"></i> Catálogo
                            </a>
                            <a class="nav-link text-white" href="register.html">
                                <i class="bi bi-person"></i> Crear cuenta
                            </a>
                            <a class="nav-link text-white" href="login.html">
                                <i class="bi bi-box-arrow-right"></i> Iniciar sesión
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
   <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <!-- Primera columna con el título y derechos reservados -->
                <div class="col-12 col-md-6 mb-3 mb-md-0">
                    <h4 class="mb-2">Sport Development</h4>
                    <p class="mb-0"><i class="bi bi-c-square"></i> 2018-2024 Todos los derechos reservados</p>
                </div>

                <!-- Segunda columna con información de contacto -->
                <div class="col-12 col-md-6">
                    <h4 class="mb-2">Contáctanos</h4>
                    <p class="mb-0"><i class="bi bi-envelope"></i> sportdevelopment@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
    `);
}