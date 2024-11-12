/*
*   Controlador de uso general en las páginas web del sitio privado.
*   Sirve para manejar la plantilla del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/admin/administrator.php';

// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');

// Se establece el título de la página web.
document.querySelector('title').textContent = 'Sport Development - Private';

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
    // Se verifica si el usuario está autenticado, de lo contrario se envía a iniciar sesión.
    if (DATA.session) {
        // Se comprueba si existe un alias definido para el usuario, de lo contrario se muestra un mensaje con la excepción.
        if (DATA.status) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #245C9D;">
                        <div class="container">
                            <!-- Logo y título del sitio -->
                            <a class="navbar-brand d-flex align-items-center text-white" href="dashboard.html">
                                <img src="../../resources/img/logo.png" alt="Sport Development" width="50" class="me-2">
                                <span>Sport Development</span>
                            </a>
                            <!-- Botón para colapsar el menú en dispositivos pequeños -->
                            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="bi bi-list"></i>
                            </button>

                            <!-- Enlaces de navegación -->
                            <div class="collapse navbar-collapse" id="navbarContent">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="color.html">Colores</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="gender.html">Géneros</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="brand.html">Marcas</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="sport.html">Deportes</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="product.html">Productos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="category.html">Categorías</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="administrator.html">Administradores</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="client.html">Clientes</a>
                                    </li>

                                    <!-- Dropdown para la cuenta de usuario -->
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cuenta: <strong>${DATA.username}</strong>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item text-dark" href="profile.html">Editar perfil</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item text-danger" href="#" onclick="logOut()">Cerrar sesión</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            `);
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
        } else {
            sweetAlert(3, DATA.error, false, 'index.html');
        }
    } else {
        // Se comprueba si la página web es la principal, de lo contrario se direcciona a iniciar sesión.
        if (location.pathname.endsWith('index.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                    <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #245C9D;">
                        <div class="container">
                            <a class="navbar-brand text-white" href="index.html">
                                <img src="../../resources/img/logo.png" alt="inventory" width="50">
                                Sport Development
                            </a>
                        </div>
                    </nav>
                </header>
            `);
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
        } else {
            location.href = 'index.html';
        }
    }
}