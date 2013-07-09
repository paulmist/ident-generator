<?php
/*
$file = "ident.svg";
$data = $_POST['addition'];
header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Length: ". filesize($file) .";");
header("Content-Disposition: attachment; filename=$file");
header("Content-Type: application/octet-stream; "); 
header("Content-Transfer-Encoding: binary");
echo $data;
*/
$file = 'ident.svg';
$data = $_POST['addition'];
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename='.basename($file));
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
//	header('Content-Length: ' . filesize($file) .';');
echo $data;
?>