<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integers</title>
</head>
<body>
    <h1>Math</h1>
    <p>X + Y is 
    <?php 
    //Testing 
    #Testing- less common. 
    $x = 2; 
    $y = 5;
    $x += 3;
  echo $x + $y;

?>
</p>
<p>ABS- <?php
#Absolute value
echo abs(0-3535353);?></p>
<p>Expontential <?php 
echo pow(2,4); ?>
</p>
<p>Square root <?php
echo sqrt(64); ?>
</p>
<p>Modulo: <?php
echo fmod(35,4);?></p>
<p>Random <?php
echo rand(); ?>
</p>
<p>Random (minmax): <?php 
echo rand(1,10); ?>
</p>

</body>
</html>