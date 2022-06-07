<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booleans</title>
</head>
<body>
<p><?php
$result1 = true; 
$result2 = false; 
$number = 3.14;
echo $result1 + "<br>"; 

?></p>

<p><?php echo $result2 ?></p>
<p><?php echo is_bool($result2) ?></p>
<p><?php
if (is_float($number)) {
    echo "It is a float!!";
}
?>
</p>

</body>
</html>