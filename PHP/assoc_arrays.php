<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Associative Arrays</title>
</head>
<body>
    <h1>Associative Arrays</h1>
    <?php 
    $assoc = array("first_name" => "Jacob", 
    last_name => "Siegel"); 
    $assoc["first_name"] = "FFFFFJRRRR";
 echo "My first name is: " . $assoc["first_name"] . " and my last name is : " . $assoc["last_name"];
    ?>

    
</body>
</html>