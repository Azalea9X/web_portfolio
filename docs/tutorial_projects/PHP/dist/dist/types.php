<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Type juggling and casting</title>
</head>
<body>
    <h1>Type juggling and casting</h1>
   <p>Type:  <?php 
   $count = "2 cats"; 
   $cats = "I have " . $count ; 
   echo gettype($count);
   $count += 3; 
    ?></p>
    <p>Type: <?php
    echo gettype($count);
    ?></p>

    <p>Cats: <?php  echo gettype($cats);
    ?></p>
    <P>Type casting: <br>
   Count:  <?php settype($count, "integer"); echo gettype($count);
   ?></p>
   <p>Count 2: <?php 
   $count2 = (string) $count; 
   echo gettype($count2); 
   ?>
   <p><?php $test1 = 3; 
   $test2 = 55;
   settype($test1, "string"); 
   (string) $test2; ?>
   test1: <?php echo gettype($test1); ?><br>
   test2: <?php echo gettype($test2); ?>
</html>