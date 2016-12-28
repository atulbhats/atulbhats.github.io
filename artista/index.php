<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>Artista</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
		<link rel="icon" type="image/png" href="assets/icons/about.png" />
		<meta name="keywords" content="Artist, Painter, Sculptor, Lorem, Ipsum Dolor Sit Amet"/>
		<meta name="description" content="An artist, Physicist and a photography enthusiast."/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
		<meta property="og:locale" content="en_US" />
		<meta property="og:title" content="Artista" />
		<meta property="og:site_name" content="Artista">
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://example.org" />
		<meta property="og:description" content="An artist"/>
		<meta property="og:image" content="assets/img/artwork.jpg" />
		<link rel="stylesheet" href="assets/css/bootstrap.css">
		<link rel="stylesheet" href="assets/css/style.css">
		<script src="assets/js/script.js"></script>
	</head>
	<body>
		<header>
			<div class="container">
				<div class="row">
					<div class="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0 col-lg-10 col-lg-offset-1">
						<div class="row">	
							<div class="col-xs-12 col-sm-6">
								<div class="site-title">
									<a href="#">
										<h1>Artista</h1>
									</a>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 nav-wrap">
								<div class="nav-toggle">
									<img alt="menu" src="assets/icons/menu.png" class="icon is-24">
									<span id="dialogue"><!-- This is shown on mobile devices as a speech bubble -->
										Drag me if I obstruct view. Tap softly to open menu.
										<span class="caret"></span>
									</span>
								</div>
								<nav class="tabs">
									<a class="nav-item is-tab" id="about-modal-trigger" href="#" >
										<img alt="about" class="icon is-24 hidden visible-xs" src="assets/icons/about.png">
										<span class="">About</span>
									</a>
									<a class="nav-item is-tab" id="artwork-modal-trigger" href="#" >
										<img alt="artwork" class="icon is-24 hidden visible-xs" src="assets/icons/artwork.png">
										<span class="">Artwork</span>
									</a>
									<a class="nav-item is-tab" href="#" >
										<img alt="artwork" class="icon is-24 hidden visible-xs" src="assets/icons/shop.png">
										<span class="">Shop</span>
									</a>
									<a class="nav-item is-tab" id="contact-modal-trigger" href="#">
										<img alt="contact" class="icon is-24 hidden visible-xs" src="assets/icons/contact.png">
										<span class="">Contact</span>
									</a>
									<!-- nav template ->
									<a class="nav-item is-tab" id="modal-name-trigger" href="#">
										<img alt="" class="icon is-24 hidden visible-xs" src="assets/icons/nav-icon.png">
										<span class="">Nav Text</span>
									</a>
									<!-- template ends -->
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<noscript align="center">
			<h2 class="h1">Artista</h2>
			<h4>Please enable javascript to view the website.</h4>
			<h5>Thanks</h5>
		</noscript>
		<main>
			<div class="container">
				<div class="row">
					<div class="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-12col-md-offset-0 col-lg-10 col-lg-offset-1">
						<figure class="image" id="wide">
							<img alt="artwork wide" src="assets/img/wide.jpg">
						</figure>
						<figure class="image" id="tall">
							<img alt="artwork tall" src="assets/img/tall.jpg">
						</figure>
					</div>
				</div>
			</div>
		</main>
		<section>
			<!-- Modal Template ->
			<div class="artista-modal" id="about-modal">
				<div class="artista-modal-content has-text-centered">
					<figure class="image is-96x96">
						<img alt="" src="assets/img/dp.jpg">
					</figure>
					<h2 class="title is-2">About Me</h2>
					<p>Ullam delectus sit sit sit modi possimus. Quos voluptatem et animi. Sunt repellat impedit qui eaque placeat. Ut deleniti est non cum omnis accusantium.<p>
					<p>Id ea porro id eligendi molestiae dicta. Sit facere quo magni similique et. Consectetur id reprehenderit quam qui natus dolorum dolor hic. Error voluptas quae et.</p>
				</div>
				<a href="#" class="modal-close">Close</a>
			</div>
			<!-- Template Ends -->
			<div class="artista-modal" id="about-modal">
				<div class="artista-modal-content has-text-centered">
					<figure class="image is-96x96">
						<img alt="Artista" src="assets/img/dp.jpg">
					</figure>
					<h2 class="title is-2">About Me</h2>
					<p>Ullam delectus sit sit sit modi possimus. Quos voluptatem et animi. Sunt repellat impedit qui eaque placeat. Ut deleniti est non cum omnis accusantium.<p>
					<p>Id ea porro id eligendi molestiae dicta. Sit facere quo magni similique et. Consectetur id reprehenderit quam qui natus dolorum dolor hic. Error voluptas quae et.</p>
				</div>
				<a href="#" class="modal-close">Close</a>
			</div>
			<div class="artista-modal" id="artwork-modal">
				<div class="artista-modal-content has-text-centered">
					<figure class="image is-96x96">
						<img alt="Artwork" src="assets/img/artwork.jpg" class="thumbnail">
					</figure>
					<h2>My Artwork</h2>
					<p>Voluptas reprehenderit sunt ut eaque omnis quos. Itaque veritatis ab qui aut voluptas nesciunt. Et dolores nam aliquid.</p>
					<p>Sapiente sed animi et veritatis modi et sapiente ratione. Tempore amet qui quia et. Sed totam occaecati corporis corporis est. Voluptates et necessitatibus dolore voluptatem. Sint id aperiam sit nihil. Nisi consequatur at blanditiis ea dolor ut odit deserunt.</p>
					<br/>
					<p>My Artwork : <a class="btn btn-default" target="_blank" title="pore amet qui " href="#"><img alt="behance" class="icon is-24" src="assets/icons/behance.png">/artista</a></p>
					<br/>
				</div>
				<a href="#" class="modal-close">Close</a>
			</div>
			<div class="artista-modal" id="contact-modal">
				<div class="artista-modal-content has-text-centered">
					<div class="hero is-medium">
						<div class="hero-body">
							<h2 class="title is-2">Conact Me</h2>
							<h4 class="subtitle is-4">I am always available at <u>mail@consequatur.com</u></h4>
							<br/>
							<h4 class="subtitle is-5">
								Or Through these social links: 
								<div style="display:inline-block;">
									<a href="http://facebook.com/#">
										<img alt="facebook" class="icon is-24" src="assets/icons/facebook.png">
									</a>
									<a href="http://twitter.com/#">
										<img alt="twitter" class="icon is-24" src="assets/icons/twitter.png">
									</a>
									<a href="http://instagram.com/#">
										<img alt="instagram" class="icon is-24" src="assets/icons/instagram.png">
									</a>
								</div>
							</h4>
						</div>
					</div>
				</div>
				<a href="#" class="modal-close">Close</a>
			</div>
			<div class="cd-transition-layer" id="about-transition"><div class="bg-layer"></div></div>
			<div class="cd-transition-layer" id="contact-transition"><div class="bg-layer"></div></div>
			<div class="cd-transition-layer" id="artwork-transition"><div class="bg-layer"></div></div>
			<div class="cd-transition-layer" id="photography-transition"><div class="bg-layer"></div></div>
		</section>		
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-12col-md-offset-0 col-lg-10 col-lg-offset-1">
						<div class="row">	
							<div class="col-xs-12 col-sm-4 text-left">
								<a href="http://facebook.com/#">
									<img alt="facebook" class="icon is-24" src="assets/icons/facebook.png">
								</a>
								<a href="http://twitter.com/#">
									<img alt="twitter" class="icon is-24" src="assets/icons/twitter.png">
								</a>
								<a href="http://instagram.com/#">
									<img alt="instagram" class="icon is-24" src="assets/icons/instagram.png">
								</a>
							</div>
							<div class="col-xs-12 col-sm-8 text-right">
										<p class="visible visible-xs-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
											<span class="is-is-small" style="margin:2px 0;">&copy;</span>
											Artista. Images from <a href="https://unsplash.com">Unsplash</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</body>
	<!-- Thanks to furf for Jquery UI Touch Punch for Menu button drag feature (Mobile and Tablet screens only) -->
	<!-- Thanks to Codyhouse.co for Ink Transition and Animation of Modal windows-->
	<!-- Implements jquery, jquery UI, jquery ui touch punch, modernizr, velocityjs -->
	<!-- Desgined and Developed by AtulBhatS http://atulbhats.com -->
</html>