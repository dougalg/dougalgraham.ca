<?php

// What do you want to call your PDF?
$PDFName = 'Dougal_Graham_-_CV.pdf';
// If the PDF file is older than the HTML file then create it again, otherwise, just redirect
if (filemtime($PDFName) > filemtime('index.html')) {
	include('wkhtmltopdf.php');
	$pdf = new WkHtmlToPdf(array(
	//    'no-outline',         // Make Chrome not complain
	// Why do we need to specify margins again?
		'margin-top'    => '2cm',
		'margin-right'  => '1.5cm',
		'margin-bottom' => '2.5cm',
		'margin-left'   => '2cm',
	));

	$pdf->setPageOptions(array(
	 //   'disable-smart-shrinking',
	//    'user-style-sheet' => 'pdf.css',
		'print-media-type',
		'header-html' => 'blank.html',
		'footer-html' => 'blank.html',
		'header-spacing' => 2,
		'footer-spacing' => 2
	));

	$pdf->addPage('index.html');
	$pdf->saveAs($PDFName);
}

// Redirect to the PDF
header('Location: '.$PDFName);

?>