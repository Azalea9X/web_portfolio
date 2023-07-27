<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch statements</title>
</head>
<body>
    <h1>Switch statements</h1>
   <p> <?php
$a = 44; 
switch ($a) {
    case 0: 
        echo "A equals 0 <br>";
        break;
    case 1: 
            echo "A equals 1 <br>";
            break;
    case 2: 
                echo "A equals 2 <br>";
                break;
    case 3: 
                    echo "A equals 3 <br>";
                    break;
default: 
echo "A is not 0, 1, 2, or 3. "; 
                                
}

    ?></p>
</body>
</html>