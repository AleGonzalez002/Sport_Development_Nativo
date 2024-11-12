<?php

// Se incluye la clase con las plantillas para generar reportes.
require_once ('../../helpers/report_template.php');
// Se incluyen las clases para el acceso a datos de deportess.
require_once ('../../models/data/sport_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReport('Deportes Registrados');
// Se instancia el modelo Cliente para obtener los datos.

// Se instancia el modelo deportes para obtener los datos.
$deportesmodel = new DeporteData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($datadeportes = $deportesmodel->readAll()) {
    // Se establece un color de relleno para los encabezados.
    $pdf->setFillColor(36, 92, 157);
    $pdf->setTextColor(255, 255, 255);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);

    // Encabezados
    $pdf->cell(50, 10, 'ID', 1, 0, 'C', 1);
    $pdf->cell(140, 10, 'Nombre', 1, 1, 'C', 1); // Cambiado a 140 y con salto de línea

    // Se establece la fuente para los datos de los deportess.
    $pdf->setFont('Arial', '', 11);
    // Recorremos los datos de los deportess
    foreach ($datadeportes as $deportes) {
        $pdf->setTextColor(0, 0, 0);

        // ID del deportes
        $pdf->cell(50, 10, $deportes['id_deporte'], 1, 0, 'C');

        // Nombre
        $pdf->cell(140, 10, $pdf->encodeString($deportes['nombre_deporte']), 1, 1, 'C'); // Cambiado a 140 y con salto de línea
    }
} else {
    // Si no hay deportes registrados
    $pdf->cell(190, 10, $pdf->encodeString('No hay deportes registrados'), 1, 1, 'C'); // Cambiado el ancho y con salto de línea
}

// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'deportes.pdf');