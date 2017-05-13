<h5 id="<?php echo urlencode($event['id']); ?>"><a ng-href="/#/{{ rootCtrl.pathLang }}/event/<?php echo urlencode($event['id']); ?>/<?php echo urlencode($event['name']); ?>"><?php echo $event['name']; ?></a></h5>
<p><div class="date-block">
    <ul>
      <li>{{ <?php echo $event['time']; ?> |  date:'MMMM dd' }}</li>
      <li>{{ <?php echo $event['time']; ?> |  date:'h:mma' }}</li>
      <!-- <li>Mar 15th</li>
      <li>7:00PM</li> -->
    </ul>  
  </div><?php echo $event['description']; ?></p>
<br>&nbsp;<br>




