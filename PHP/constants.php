<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Constants</title>
</head>
<body>
<h1>Constants</h1>
<?php 
$max_width = 3666;
define("MAX_WIDTH", 980);
#Can't add to the value
#Can't redefine the value
#A constant stays defined for the duration of the PHP script, until the next script begins, it will run until then. 
#At that point when the next request-response cycle begins, that's when you're going to see it. Maybe you'll only see it in a places where you're going to find the place where you store images. You may not want to have that be a variables. 
#Constants are very useful for saving data that is fixed.  
echo "Max width " . MAX_WIDTH;
?>
</body>
</html>