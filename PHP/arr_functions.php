<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array functions</title>
</head>
<body>
<?php 
$numbers = array(8, 25, 3, 5, 4, 3, 2425, 5595, 43); ?>
<p>Count: <?php echo count($numbers); ?></p>
<p>Max value: <?php echo max($numbers); ?></p>
<p>Min value: <?php echo min($numbers); ?> </p>
<pre>Sort: <?php echo sort($numbers); print_r($numbers); ?></pre>
<pre>Reverse sort: <?php echo rsort($numbers); print_r($numbers); ?></pre>
<p>Implode: <?php echo $num_string = implode(" * ", $numbers); ?></p>
<p>Explode: <?php print_r(explode(" * ", $num_string)); ?></p>
<p>Is in the array- 15? <?php echo in_array(8, $numbers);?></p>
<p>Is in the array- 33? <?php echo in_array(33, $numbers);?></p>
<!--These are array functions
Implodes lets you deliniate items based off of an index, while, exploding lets you do something, and identify new values based off of different things in the list (if it had )
-->
</body>
</html>