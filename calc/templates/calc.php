<?php
$a = $_POST['a'];
$b = $_POST['b'];
$result = 0;
$result = $a + $b;
//print json_encode();
?>
{"result":"<?=$result?>"}