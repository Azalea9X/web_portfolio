<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For each loop</title>
</head>
<body>
    
<h1>For each loop</h1>
<?php
$ages = array(35, 2, 5, 3, 4, 9, 8, 234, 33, 55); 
foreach($ages as $age) {
    echo "Age: ${age}<br>";
}

$person = array( 
"fname" => "Kevin", 
"lname" => "Bacon", 
"address" => "213 Sutherland Dr", 
"city" => "Albequerque", 
"state" => "New Mexico", 
"zip code" => "25233",

); 

foreach ($person as $attribute=> $data) {
    $attr_nice = ucwords(str_replace("_", " ", $attribute)); 
    echo "{$attr_nice}: {$data}</br>";
}?><br>
<?php
$prices = array("Brand new computer" => 2000, 
"1 month of lynda.com" => 25, 
"Learning PHP" => null); 

foreach($prices as $item => $price) {
    echo "{$item}: "; 
    if (is_int($price)) {
        echo "$" . $price; 
    }
    else {
        echo "priceless"; 
    }
    echo "<br>";
}
?>
</body>
</html>