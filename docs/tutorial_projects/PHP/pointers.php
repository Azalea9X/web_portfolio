<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Understanding array pointers</title>
</head>
<body>
<h1>Understanding array pointers</h1>
<?php

$ages = array(25, 5, 3, 4, 5, 6, 99);
/*next($ages);  next($ages);  next($ages);  
echo "4: " . current($ages) . "<br> 2: " . prev($ages) . "<br>" . reset($ages) . "<br> End: " . end($ages);
*/
while ($age = current($ages)) {
    echo $age . ", <br>"; 
    next($ages);
}
?>


    
</body>
</html>