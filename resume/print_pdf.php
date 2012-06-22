<?php
include('wkhtmltopdf.php');
$pdf = new WkHtmlToPdf(array(
//    'no-outline',         // Make Chrome not complain
// Why do we need to specify margins again?
/*	'margin-top'    => '3cm',
	'margin-right'  => '1.5cm',
	'margin-bottom' => '2.5cm',
	'margin-left'   => '2cm',*/
));

$pdf->setPageOptions(array(
 //   'disable-smart-shrinking',
//    'user-style-sheet' => 'pdf.css',
	'print-media-type'
));

$pdf->addPage('index.html');

$pdf->send();
?>