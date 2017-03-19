<?php
  require_once('../../../events/eventsLib.php');
?>
<div class="regular-blog-wrap">
    <div class="container" id="scrollspy-bars">
        <div class="row">
            <div class="col-lg-9 col-sm-8">
              <h3>Events List</h3>
              <div class="row">
                <div class="col-md-12">
                  <?php foreach($events as $event)
                        {
                          include(BASEPATH . '/events/templates/event_list_section.php');
                        }
                  ?>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4 fix-top-mobile"  ng-include="'/assets/templates/common/sidebar.html'"></div>
        </div>
    </div>
</div>