<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays</title>
</head>
<body>
    <h1>Arrays</h1>
   <p> <?php
    #() indicates an empty array)
    $numbers = array(3, 5, 5, 2, 5, 8, 9, 4, 3); 
   echo $numbers[6] + "<br>";
   $mixed = array(6, "Fox", "Dog", 3222, array(3, 5, 4, 3, "Hello")); 
   $mixed[2] = "Cat";
   $mixed[9999] = "Dog person"; 
   echo "<br>$mixed[2]<br>$mixed[9999]";
   #Adding it to the end 
   $mixed[] = "Fafafafafafafafa";

   
   ?></p>
   <p><?php
      $mixed = array(3, 5, 2, 3, 4, "Apple", "Pears", "Fruits", "Bananas", array(2, 3, "FFF", 4, 9, 2, 3));
   echo $mixed[9][2] ?></p>
<?php   echo "<pre>" . print_r($mixed) . "</pre>";
    ?>

</body>
</html>

<!--Note- PHP v5 or later has the shorter syntax, before PHP v5 , the older version doesn't use the square brackets. You should be able to see it and know that it's an array as you are may deal with older code. --->
