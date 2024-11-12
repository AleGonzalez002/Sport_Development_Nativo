// Constante para completar la ruta de la API.
const PRODUCTO_API = 'services/public/product.php';
// Constante tipo objeto para obtener los parámetros disponibles en la URL.
const PARAMS = new URLSearchParams(location.search);
const PRODUCTOS = document.getElementById('productos');

// Método manejador de eventos para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    // Se define un objeto con los datos de la categoría seleccionada.
    const FORM = new FormData();
    FORM.append('idCategoria', PARAMS.get('id'));
    // Petición para solicitar los productos de la categoría seleccionada.
    const DATA = await fetchData(PRODUCTO_API, 'readProductosCategoria', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se asigna como título principal la categoría de los productos.
        MAIN_TITLE.textContent = `Categoría: ${PARAMS.get('nombre')}`;
        // Se inicializa el contenedor de productos.
        PRODUCTOS.innerHTML = '';
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se crean y concatenan las tarjetas con los datos de cada producto.
            PRODUCTOS.innerHTML += `
                 <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card shadow-sm border-0 mb-4 rounded-3">
                        <img src="../../resources/img/productos/${row.imagen_producto}" class="card-img-top" alt="${row.nombre_producto}" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3">
                            <h5 class="card-title text-truncate" style="font-size: 1.1rem; font-weight: 600;">${row.nombre_producto}</h5>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="text-muted" style="font-size: 1rem;">$${row.precio_producto}</span>
                                <span class="badge bg-light text-dark">${row.existencias_producto} en stock</span>
                            </div>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center p-3">
                            <a href="product_detail.html?id=${row.id_producto}" class="btn btn-dark btn-sm py-2 px-4 w-100 rounded-2">Agregar a carrito</a>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        // Se presenta un mensaje de error cuando no existen datos para mostrar.
        MAIN_TITLE.textContent = DATA.error;
    }
});