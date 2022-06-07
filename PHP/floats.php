<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Floating point numbers</title>
</head>
<body>
    <?php 
    echo $float = 3.14?> </br>
    <?php
    echo $float = 7; ?></br>
    <?php
    echo 4/3?></br>  
<P>Rounding:<?php echo round(5,3);?> </p>
<p>Ceiling: <?php echo ceil(35.444434234234234);?></p>
<p>Floor: <?php echo floor(3222.22555553533);?></p>
<P>Is_int: <?php echo "Is it an integer- 333? " . is_int(333); ?></p>
<p>Is_float: <?php echo "Is it a float-33.5555? " . is_float(33.5555); ?></p>
<p>Is_numeric: <?php echo "Is it numeric- 223? " . is_numeric(223); ?></p>
</body>
</html>