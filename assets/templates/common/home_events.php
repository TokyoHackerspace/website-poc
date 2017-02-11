<?php
  require_once('../../../events/eventsLib.php');
  
    $eventCount = 0;
    
    function get_next_event()
    {
      global $eventCount;
      global $events;
      return $events[$eventCount++];
    }
  
?>


    <div class="regular-blog-wrap featured-posts-thumbnails">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <?php 
              $event = get_next_event();
              include(BASEPATH . '/events/templates/event_tile_large.php');
            ?>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
              <div class="col-sm-6">
                <?php 
                  $event = get_next_event();
                  include(BASEPATH . '/events/templates/event_tile_small.php');
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>