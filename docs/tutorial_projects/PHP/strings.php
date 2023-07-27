<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings</title>
</head>
<body>
    <?php 
$var1 = 10 +3 + 5 -5 -4 -3 +99; 
$string1 = "Hello world!!!!";
$third = $string1; 
$third .= strtolower("My name is Jacob!!!!!");
$fourth = strtoupper($string1);
$fifth = ucfirst($string1);
$sixth = ucwords($string1);
 $length1 = strlen($string1);
#Only at the end of the string
 $find1 = strstr($string1, "world!!!!");
 #Finds one word, replaces it, out of that certain string, in this order, order is really important. 
$replace1 = str_replace("world","test test test", $string1);
#Trims at the very end when I am using rtrim. 
$trim1 = rtrim($string1, "world!!!!"); #Works
#Works, I just need to make sure that my strings are the correct capitalized. There are a lot more
$substr = substr($string1, 4, 8); 
#Gives a position of the character. 
$position1 = strpos($string1, "Hello");
 
$character1 = strchr($string1, "w");


    echo "<h1>My favorite number is {$var1}</h1>
    <p>$string1</p>
    <p>$third</p>
    <p>$fourth</p>
    <p>$fifth</p>
    <p>$sixth</p>
    <p>Length of the string:  {$length1}</p>
    <p>Find string: {$find1}</p>
    <p>Replace string: {$replace1}</p>
    <P>Trimmed string: {$trim1}</p>
    <p>Substring: {$substr}</p>
    <p>Position of hello: {$position1}</p>
    <p>Position of H: {$character1}</p>


";
?>

</body>
</html>

