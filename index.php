<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Webstars - Ident Generator</title>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/style.css">
	<link rel="author" href="humans.txt">
</head>
<body>
	<div class="wrapper">
		<header class="page-header group"><img src="img/webstars_logo.svg" alt="Webstars"><h1>Ident Generator</h1></header>
		<div class="content">
			<canvas id="canvas" width="300" height="250"></canvas>
			<div id="svg"></div>
			<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
			<script>!window.jQuery && document.write('<script src="js/lib/jquery-1.9.1.min.js"><\/script>')</script>
			<script src="js/lib/base64.js"></script>
			<script src="js/lib/canvas2image.js"></script>
			<script src="js/lib/svgcanvas.js"></script>
			<script src="js/canvas.js"></script>
			<input class="reload" type="button" value="Regenerate" onClick="window.location.reload()">
			
			<form action="download.php" method="POST">
				<input class="submit" type="submit" name="button" value="Download SVG">
				<div class="image-form">
				<h3>Download PNG</h3>
				<p>Set an image pixel width here. (Default 300px)</p>
				<input id="img-width" type="text">
				<a id="png-download" download="ident.png" href="">Download PNG</a>
			</div>
				<p>Raw SVG Code.<br />If you're into that sort of thing.</p>
				<textarea name="addition" id="output" cols="30" rows="10"></textarea>
			</form>

		</div>
	</div>
</body>
</html>