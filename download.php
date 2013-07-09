<?php

$data = stripslashes($_POST['addition']);
header("Content-type: application/csv");
header("Content-Disposition: attachment; filename='ident.svg'");
header("Pragma: no-cache");
header("Expires: 0");

echo $data;
?>