<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Null/empty</title>
</head>
<body>
    <h1>Null in PHP</h1>
    <p>
        <?php 
        $var1 = null;
        $var2 = "";

        echo is_null($var1);  
        ?>

</p>
<p><?php echo is_null($var2);?></p> 
<p>If var1 is set- <?php echo isset($var1);?></p> 
<p>If var2 is set- <?php echo isset($var2);?></p> 
<p>If var3 is set- <?php echo isset($var3);?></p> 
<p>If var1 is empty- <?php echo empty($var1);?></p> 
<p>If var2 is empty- <?php echo empty($var2);?></p> 
<p>If var3 is empty- <?php echo empty($var3);?></p> 
</body>
</html>