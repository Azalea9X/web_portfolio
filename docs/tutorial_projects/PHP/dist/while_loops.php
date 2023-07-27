<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While Loops</title>
</head>
<body>
    <h1>While loops</h1>
    <?php
$count = 0; 
while ($count <= 10) {
    if ($count % 2 == 0) {
        echo $count . "round number: <br>"; 
    }
    else {
        echo $count . ", <br>"; 
    }
    $count++; 
}

    ?>

    
</body>
</html>