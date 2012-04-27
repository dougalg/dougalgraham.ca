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
	<meta name="description" content="Dougal Graham's freelance web development">
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
	<div class="container clearfix" id="top">
		<nav class="sixteen columns clearfix" id="MainNavigation">
			<ul>
				<li><a href="#aboutMe" class="scroll">About Me</a></li>
				<li><a href="#portfolio" class="scroll">Portfolio</a></li>
				<li><a href="#contact" class="scroll">Contact</a></li>
			</ul>
		</nav>
	</div>

	<div class="container clearfix" id="MainContainer">
		<div class="sixteen columns clearfix" id="logo">
			<img src="images/logo.png" alt="This is a logo">
			<p class="name">&nbsp;&nbsp;Dougal</p><p class="name">Graham&nbsp;&nbsp;</p>
		</div>
		<section class="sixteen columns clearfix" id="aboutMe">
			<p>Hi, my name is Dougal Graham. I am a web developer and programmer from Canada, now living in Bangkok. I worked in web development for about 5 years before taking a break to see the world. Now that I’ve lived in Japan and Thailand, I’m getting back into web development again. I am constantly working to update my knowledge as standards change and new technologies and frameworks surface. I specialise in back end programming and am familiar with <span>HTML5</span>, <span>CSS</span>, <span>PHP</span>, <span>Python</span>, <span>JS</span>, <span>jQuery</span>, <span>MySQL</span>, <span>Apache</span>, <span>lighttpd</span>, and <span>Wordpress</span>, but I am always trying out other options and ways to doing things. If you’d like to know a little more about me, head on over to <a href="http://www.tfiaa.com">my personal website</a>, check out <a href="">my resume</a>, or take a look at <a href="http://th.linkedin.com/in/dougalg">my LinkedIn profile</a>.</p>
		</section>
		<section class="sixteen columns clearfix" id="portfolio">
			<div>
				<div>
					<p class="subtitle">Freelance Web Development</p>
					<div class="portfolioItem clearfix" id="lessonRepo">
						<div class="eight columns alpha">
							<img src="images/portfolio/lr-square.png" width="100%" title="Nagano Lesson Repository" />
						</div>
						<div class="eight columns omega">
							<h2><a href="http://lessons.tfiaa.com">Nagano Lesson Repository</a></h2>
							<p><span>Keywords:</span> <abbr title="Wordpress is free highly customizable blogging software">Wordpress</abbr>, <abbr title="cascading style sheets - used to make websites beautiful">css</abbr>, html, <abbr title="PHP is a programming langauge used by many web applications, both simple and complex">php</abbr>, design implementation, problem solving</p>
							<p><span>The Problem:</span> Twice every year the Nagano branch of the <abbr title="Japan Exchange and Teaching Programme">JET Programme</abbr> holds teacher improvement meetings where teachers swap lesson plans and teaching strategies. Unfortunately, this caused teachers to each print off hundres of copies of lesson plans, which everyone would take home and re-work to fit their needs.</p>
							<p><span>The Solution:</span> In response to this wasted paper, I proposed to create a prefecture-wide "<a href="http://lessons.tfiaa.com">lesson repository</a>" so that teachers could easily share their lessons, search the lessons of others, and keep them for posterity, so that no good lesson plan would go to waste. I decided to use Wordpress to set it up, integrated Facebook accounts. <a href="mailto:daniel.s.pierce@gmail.com">Daniel Pierce</a> created a lovely design in Photoshop which I customized for use with Wordpress.</p>
						</div>
					</div>
					<div class="portfolioItem clearfix" id="TypeThai">
						<div class="eight columns alpha">
							<img src="images/portfolio/tt-square.png" width="100%" title="Nagano Lesson Repository" />
						</div>
						<div class="eight columns omega">
							<h2><a href="http://www.type-thai.net">TypeThai</a></h2>
							<p><span>Keywords:</span> Not web, finite-state, <abbr title="Xerox Finite-State Tools">xfst</abbr>, <abbr title="Helsinki Finite-State Tools">hfst</abbr>, <abbr title="Stuttgart Finite-State Tools">sfst</abbr>, obj-c, phonological analysis, Thai, romanization, transliteration</p>
							<p><span>The Problem:</span> I recently started learning Thai, and when I learn a language the first thing I want to do is be able to read it. The second is write. My computers are all western, and thus have typical western (Canadian) keyboard layouts, because of this it was difficult to type in Thai.</p>
							<p><span>The Solution:</span> I decided to create a new input method that would take the Thai romanizations that most English-speakers who are a learning Thai are familiar with, and output proper Thai words. If it sounds interesting, <a href="http://www.type-thai.net">check out the website</a>. If you want to help and have any experience with finite-state programming, objective-c, or programming input methods for *nix or windows, please let me know!</p>
						</div>
					</div>
					<div class="portfolioItem clearfix" id="WAMSB">
						<div class="eight columns alpha">
							<img src="images/portfolio/wamsb-square.png" width="100%" title="Nagano Lesson Repository" />
						</div>
						<div class="eight columns omega">
							<h2><a href="http://www.wamsb.org">WAMSB</a></h2>
							<p><span>Keywords:</span> html, css, php, MySQL, <abbr title="object-oriented programming">OOP</abbr>, problem solving</p>
							<p><span>Description:</span> <a href="http://www.wamsb.org">WAMSB</a> is the World Association of Marching Show Bands. While working here I was responsible for maintaining and adding new features to the in-house PHP <abbr title="content management system">CMS</abbr>. Over my almost 5 years at WAMSB, this required me to tackle almost every kind of technology problem that a small company faces.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="sixteen columns clearfix" id="contact">
			<div class="eight columns alpha">
				<form id="contactForm" name="contactForm">
					<fieldset>
						<legend>Get in Touch</legend>
						<p class="error" id="formError">Oh no! Looks like you forgot a field or mis-typed your email address</p>
						<label for="senderEmail">*E-Mail:</label>
						<input type="text" name="senderEmail" id="senderEmail" />
						<label for="senderName">*Name:</label>
						<input type="text" name="senderName" id="senderName" />
						<label for="message">*How can I help you?</label>
						<textarea name="message" id="message"></textarea>
						<button type="submit" class="button" id="sendMessage">Send</button>
						<p class="success" id="formSuccess">Message sent!</p>
					</fieldset>
				</form>
			</div>
			<div class="eight columns omega">
				<h2 class="subtitle">Real</h2>
				<p><span>Phone:</span> +66 (0) 84 910-2272</p> 
				<p><span>E-Mail:</span> dougalg@gmail.com</p>
				<p><span>Skype:</span> dougalgraham</p>
				<p><span>Location:</span> Bangkok, Thailand</p>
				<h2 class="subtitle">Virtual</h2>
				<div id="virtual">
					<table>
						<tr>
							<td>
								<a href="http://th.linkedin.com/in/dougalg"><img id="linkedin" src="images/social/linkedin.png" title="Dougal Graham's LinkedIn Page" /></a>
							</td>
							<td>
								<script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script><a href="skype:dougalgraham?call"><img id="skype" src="images/social/skype.png" title="Ring me!" /></a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="https://twitter.com/#!/dougalg"><img id="twitter" src="images/social/twitter.png" title="Dougal Graham's Twitter Page" /></a>
							</td>
							<td>
								<a href="http://www.flickr.com/photos/dougalg/"><img id="flickr" src="images/social/flickr.png" title="Dougal Graham's Flickr Page" /></a>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</section>
		<footer class="sixteen columns clearfix">
			<p>&copy;Copyright 2012, Dougal Graham, all rights reserved</p>
		</footer>
	</div>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="javascripts/extras.js"></script>
</body>
</html>