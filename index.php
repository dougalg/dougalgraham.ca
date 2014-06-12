<?php
    $pages = Array('about' => 'About Me',
                   'projects' => 'Projects',
                   'contact' => 'Contact');
    $current_page = isset($_GET['p']) ? $_GET['p'] : '';
    if (!array_key_exists($current_page, $pages))
        $current_page = 'about';
?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>dougalgraham.ca - Freelance Web Development</title>
	<meta name="description" content="Dougal Graham">
	<META name="keywords" content="Dougal, Graham, Dougal Graham, web, development, web development, css, php, html, python, javascript, jquery, fst, fnite-state, xfst, mysql, apache, lighttpd, wordpress, themes, design, style, programming">
	<meta name="author" content="Dougal Graham">

	<!-- OG Meta
  ================================================== -->
  	<meta property="og:title" content="Dougal Graham - Freelance Web Development" />
	<meta property="og:description" content="Dougal Graham's freelance web development" />
 	<meta property="og:type" content="website" />
 	<meta property="og:url" content="http://www.dougalgraham.ca" />
 	<meta property="og:image" content="http://www.dougalgraham.ca/images/og_logo.jpg" />
 	<meta property="og:locale" content="en_CA" />

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- CSS
  ================================================== -->
	<link rel="stylesheet" href="stylesheets/base.css">
	<link rel="stylesheet" href="stylesheets/skeleton.css">
	<link rel="stylesheet" href="stylesheets/style.css">
	<link rel="stylesheet" href="stylesheets/layout.css">

	<!--[if lt IE 8]>
		<link rel="stylesheet" type="text/css" href="stylesheets/ie7.css" media="screen, projection" />
	<![endif]-->
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Favicons
	================================================== -->
	<link type="text/css" rel="shortcut icon" href="images/favicon.ico">
	<link type="text/css" rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link type="text/css" rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
	<link type="text/css" rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

</head>
<body>
	<div class="container clearfix" id="MainContainer">
		<nav class="sixteen columns clearfix" id="MainNavigation">
            <div class="logo">
                <a href="http://dougalgraham.ca"><img src="images/logo.png" alt="This is a logo"><span class="name">Dougal Graham</span></a>
            </div>
            <div class="pageList">
<?php require('templates/head_links.php'); ?>
            </div>
		</nav>
		<section class="sixteen columns clearfix" id="<?php echo $current_page; ?>">
<?php require("templates/$current_page.php"); ?>
		</section>
		<footer class="sixteen columns clearfix">
			<p>&copy;Copyright 2012, Dougal Graham, all rights reserved</p>
		</footer>
	</div>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="javascripts/extras.js"></script>
</body>
</html>