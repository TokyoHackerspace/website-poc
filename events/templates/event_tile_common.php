  <a ng-href="/#/{{ rootCtrl.pathLang }}/event/<?php echo urlencode($event['id']); ?>/<?php echo urlencode($event['name']); ?>"><img src="/events/images/<?php echo urlencode($event['image']); ?>" width="570" height="373" alt="" class="img-responsive"></a><!-- img-responsive -->
  <div class="post-info">
    <h2 class="entry-title"><a ng-href="/#/{{ rootCtrl.pathLang }}/event/<?php echo urlencode($event['id']); ?>/<?php echo urlencode($event['name']); ?>"><?php echo $event['name']; ?></a></h2><!-- entry-content -->
    <ul class="entry-meta list-inline">
        <li>{{ <?php echo $event['time']; ?> |  date:'dd MMMM yyyy @ h:mma' }}</li>
        <li><i class="fa fa-meetup" aria-hidden="true"></i> <?php echo $event['yes_rsvp_count'] ?></li><!-- fa-heart-o -->
        <!-- li><i class="fa fa-eye"></i> 1,684</li --><!-- fa-eye -->
        <!-- li><i class="fa fa-comment"></i> 3</li --><!-- fa-comment -->
    </ul><!-- entry-meta -->
  </div><!-- post-info -->
