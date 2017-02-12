<?php
  
  require_once('eventsLib.php');
  
  foreach($events as $event)
  {
    if($event['id'] == $_REQUEST['eventId'])
    {
      break;
    }
  }

  // print_r($event);

  
?>

    <div class="invert-bg-light regular-blog-wrap category-cardview">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8">
                    <div class="row row-10">

                        <!-- Category Information
                        ============================================= -->
                        <div class="col-sm-12 col">
                    
                            <!-- Heading
                            ============================================= -->
                            <div class="section-heading"><h2 class="mh"><?php echo $event['name']; ?></h2></div>
                    
                            <!-- Description
                            ============================================= -->
                            <div class="single-entry-content hidden-xs">
                              <?php echo $event['description']; ?>
                                <hr>
                            </div>
                        </div>

                        <div class="col-sm-4 col">
                    
                            <!-- CardView Post
                            ============================================= -->
                            <div class="cardview-post wow zoomIn">
                                <div class="post-thumbnails">
                                    <a href="#"><img src="http://placehold.it/290x203" width="290" height="203" alt="" class="img-responsive"></a><!-- img-responsive -->
                                    <div class="post-category-block"><a href="#">Photography</a> <a href="#">Business</a></div><!-- post-category-block -->
                                </div><!-- post-thumbnails -->
                                <div class="post-info">
                                    <h2 class="entry-title"><a href="#">Donec eleifend, nunc ac egestas facilisis, nunc ex feugiat odio</a></h2><!-- entry-title -->
                                    <ul class="entry-meta list-inline">
                                        <li>18 July 2016</li>
                                        <li><i class="fa fa-heart-o"></i> 13</li><!-- fa-heart-o -->
                                        <li><i class="fa fa-eye"></i> 1,684</li><!-- fa-eye -->
                                        <li><i class="fa fa-comment"></i> 3</li><!-- fa-comment -->
                                    </ul><!-- entry-meta -->
                                </div><!-- post-info -->
                            </div><!-- cardview-post -->
                        </div>
                        <div class="col-sm-4 col">
                    
                            <!-- CardView Post
                            ============================================= -->
                            <div class="cardview-post wow zoomIn">
                                <div class="post-thumbnails">
                                    <a href="#"><img src="http://placehold.it/290x203" width="290" height="203" alt="" class="img-responsive"></a><!-- img-responsive -->
                                    <div class="post-category-block"><a href="#">Business</a></div><!-- post-category-block -->
                                </div><!-- post-thumbnails -->
                                <div class="post-info">
                                    <h2 class="entry-title"><a href="#">Donec eleifend, nunc ac egestas facilisis, nunc ex feugiat odio</a></h2><!-- entry-title -->
                                    <ul class="entry-meta list-inline">
                                        <li>18 July 2016</li>
                                        <li><i class="fa fa-heart-o"></i> 13</li><!-- fa-heart-o -->
                                        <li><i class="fa fa-eye"></i> 1,684</li><!-- fa-eye -->
                                        <li><i class="fa fa-comment"></i> 3</li><!-- fa-comment -->
                                    </ul><!-- entry-meta -->
                                </div><!-- post-info -->
                            </div><!-- cardview-post -->
                        </div>
                        <div class="col-sm-4 col">
                    
                            <!-- CardView Post
                            ============================================= -->
                            <div class="cardview-post wow zoomIn">
                                <div class="post-thumbnails">
                                    <a href="#"><img src="http://placehold.it/290x203" width="290" height="203" alt="" class="img-responsive"></a><!-- img-responsive -->
                                    <div class="post-category-block"><a href="#">Photography</a></div><!-- post-category-block -->
                                </div><!-- post-thumbnails -->
                                <div class="post-info">
                                    <h2 class="entry-title"><a href="#">Donec eleifend, nunc ac egestas facilisis, nunc ex feugiat odio</a></h2><!-- entry-title -->
                                    <ul class="entry-meta list-inline">
                                        <li>18 July 2016</li>
                                        <li><i class="fa fa-heart-o"></i> 13</li><!-- fa-heart-o -->
                                        <li><i class="fa fa-eye"></i> 1,684</li><!-- fa-eye -->
                                        <li><i class="fa fa-comment"></i> 3</li><!-- fa-comment -->
                                    </ul><!-- entry-meta -->
                                </div><!-- post-info -->
                            </div><!-- cardview-post -->
                        </div>

          
                        
                    </div>
                </div>

                
                <!-- sidebar starts here -->
                <div class="col-lg-3 col-md-3 col-sm-4 fix-top-mobile">
                    <!-- Widget Advertisement
                    ============================================= -->
                    <aside class="widget widget-advert wow jello">
                        <div class="widget-title-wrap">
                            <span class="widget-title">Advertisement</span><!-- widget-title -->
                        </div><!-- widget-title-wrap -->
                        <a href="#"><img width="250" height="250" src="http://placehold.it/250x250/cecece?text=Ad+(250x250)" class="img-responsive" alt=""></a>
                    </aside><!-- widget -->

                    <aside class="widget widget-feedburner wow slideInRight">
                        <div class="widget-title-wrap">
                            <span class="widget-title">Subscribe Email</span><!-- widget-title -->
                        </div><!-- widget-title-wrap -->
                        <p>We will not sell, trade, share or rent your email address.</p>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email Address"><!-- form-control -->
                            </div><!-- form-group -->
                            <button class="btn btn-light-brown"><i class="fa fa-send"></i> Subscribe</button><!-- btn-light-brown -->
                        </form>
                    </aside><!-- widget -->
                </div>
            </div>
        </div>
    </div>
