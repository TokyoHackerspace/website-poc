<h1><?php echo $event['name']; ?></h1>
{{ <?php echo $event['time']; ?> | date:'medium' }}
<?php echo $event['description']; ?>
<hr>