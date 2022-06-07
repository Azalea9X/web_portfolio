<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compraison and logical operators</title>
</head>
<body>
    <h1>Compraison and logical operators</h1>
    <?php
$a = 1; 
$b = 3; 
$c = 25; 
$d = 99;
if (($a > $b) || ($c > $d)) {
    echo "A is larger than B OR C is larger than D. ";
}
    ?>
<p>
    <?php
    $e = 50;
if (!isset($e)) { 
    $e = 200; }
    echo $e;
#For forms 
?></p>

<p><?php

$quantity = "";
#Do not reject 0 or 0.0. 

if (empty($quantity) && !is_numeric($quantity)) {
    echo "You must enter a quantity!!!"; 
}
else {
    echo "Quantity: {$quantity}";
}
    ?>
    </p>
</body>
</html>