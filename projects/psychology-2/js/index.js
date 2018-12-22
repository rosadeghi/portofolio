
// header

// $(document).ready(function () {
// 		// SideNav Button Initialization
// $(".button-collapse").sideNav();
// // SideNav Scrollbar Initialization
// var sideNavScrollbar = document.querySelector('.custom-scrollbar');
// Ps.initialize(sideNavScrollbar);

//     });



//================smooth=====================
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.smooth").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// box container
    $(document).ready(function () {

        // $(".js-box-container2").hover(function () {
        //     $(this).find(".js-box2").removeclass('remove-class')
        //     $(this).find(".js-box2").addclass('add-class')
        // }, function () {
        //     $(this).find(".js-box2").removeclass('add-class')
        //     $(this).find(".js-box2").addclass('remove-class')

        // });

        $(".topicon2").hover(function () {
            $(this).find(".js-box-container2").css('background', '#4a7aec','border' , '1px solid #fff')
        }, function () {
            $(this).find(".js-box-container2").css('background', '#fff','border' , '1px solid #4a7aec')

        });

        $(".topicon2").hover(function () {
            $(this).find(".js-box-container2").css('box-shadow', '0 0 7px #e9d9d9')
        }, function () {
            $(this).find(".js-box-container2").css('box-shadow', '0 0 0px #e9d9d9')

        });

        $(".topicon2").hover(function () {
            $(this).find(".box-text2 a").css('background', '#fff' )
        }, function () {
            $(this).find(".box-text2 a").css('background', '#4a7aec' )
        
        });

        $(".topicon2").hover(function () {
            $(this).find(".box-text2 h5,p").css('color', '#fff' )
        }, function () {
            $(this).find(".box-text2 h5,p").css('color', '#333333' )
        
        });

        $(".topicon2").hover(function () {
            $(this).find(".box-text2 a").css( 'color' ,'#4a7aec')
        }, function () {
            $(this).find(".box-text2 a").css('color' ,'#fff')
        
        });
    });
  
    $(document).ready(function () {
        
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: [
              "<i class='fa fa-caret-left'></i>",
              "<i class='fa fa-caret-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 5
              }
            }
          })
    });




    $(document).ready(function () {
        $('#sideModalTLInfo').modal('show');
       });
  


       