  <a href="#"><img src="/events/images/event_image.jpg" width="570" height="373" alt="" class="img-responsive"></a><!-- img-responsive -->
  <div class="post-info">
    <h2 class="entry-title"><a href="#"><?php echo $event['name']; ?></a></h2><!-- entry-content -->
    <ul class="entry-meta list-inline">
        <li>{{ <?php echo $event['time']; ?> |  date:'dd MMMM yyyy @ h:mma' }}</li>
        <li><i class="fa fa-meetup" aria-hidden="true"></i> <?php echo $event['yes_rsvp_count'] ?></li><!-- fa-heart-o -->
        <!-- li><i class="fa fa-eye"></i> 1,684</li --><!-- fa-eye -->
        <!-- li><i class="fa fa-comment"></i> 3</li --><!-- fa-comment -->
    </ul><!-- entry-meta -->
  </div><!-- post-info -->
