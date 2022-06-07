<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>If statements</title>
</head>
<body>
    <h1>If</h1>
    <?php
    $a = 43; 
    $b = 6; 
    if ($a > $b) {
        echo "A is larger than B"; 
    }?>
    <p>
        <?php 
$new_user = true; 
if ($new_user) {
    echo "Welcome new user!!!!"; 
}
        ?>
</p>
<p>
   <?php $numerator = 20; 
    $denominator = 4; 
    $result = 0;
   
    if ($denominator > 0) {
$result = $numerator / $denominator;
    }
    echo "Result: {$result}";?>

</p>
</body>
</html>