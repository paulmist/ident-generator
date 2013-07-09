<?php
$file = "ident.svg";
$data = $_POST['addition'];
	header("Cache-Control: public");
	header("Content-Description: File Transfer");
	header("Content-Length: ". filesize('/$file') .";");
	header("Content-Disposition: attachment; filename=$file");
	header("Content-Type: application/octet-stream; "); 
	header("Content-Transfer-Encoding: binary");
	echo $data;
?>