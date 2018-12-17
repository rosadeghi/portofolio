// sub menu for top menu
$(document).ready(function (){
    $('#nav-menu > li').each(function(){
        var t = null;
        var li = $(this);
        li.hover(function(){
            t = setTimeout(function(){
                li.find("ul").slideDown(300);
                t = null;
            }, 300);
        }, function(){
            if (t){
                clearTimeout(t);
                t = null;
            }
            else
                li.find("ul").slideUp(200);
        });
    });
});





// second menu


$(document).ready(function () {

    $(".link-list").hover(function () {
        // $(this).find(".js-box").removeClass('remove-class')
        $(this).find(".social-icon").css("background-color", "#f9c73d")
    }, function () {
        // $(this).find(".js-box").removeClass('add-class')
        $(this).find(".social-icon").css("background-color", "transparent")
  
    });
    $(".link-list").hover(function () {
        // $(this).find(".js-box").removeClass('remove-class')
        $(this).find(".social-icon").css("color", "#000")
    }, function () {
        // $(this).find(".js-box").removeClass('add-class')
        $(this).find(".social-icon").css("color", "#f9c73d")
  
    });
  });
  
/*!
Jssor Slider (MIT license)
*/
/* eslint-disable */
jssor_1_slider_init = function() {
  var jssor_1_SlideshowTransitions = [
    {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
    {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
    {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
    {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InQuint,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
    {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
    {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
    {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
    {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
    {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
    {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
    {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
    {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
    {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
    {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
  ];
  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $ThumbnailNavigatorOptions: {
      $Class: $JssorThumbnailNavigator$,
      $Rows: 2,
      $SpacingX: 14,
      $SpacingY: 12,
      $Orientation: 2,
      $Align: 156
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 960;

  function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};











  $(document).ready(function() {
          $('[data-toggle="tooltip"]').tooltip();
      });
  

      // $(document).ready(function () {
		
      //   $(".addClass").hover(function () {
      //       $(this).find(".removeClass").removeClass('remove-class')
      //       $(this).find(".add-class").addClass('add-class')
      //           // }, function () {
      //       $(this).find(".js-box").removeClass('add-class')
      //       $(this).find(".js-box").addClass('remove-class')
    
      //           });
    
      //           $(".topicon").hover(function () {
      //               $(this).find(".js-box-container").css('box-shadow', '0 0 7px #e9d9d9')
      //           }, function () {
      //               $(this).find(".js-box-container").css('box-shadow', '0 0 0px #e9d9d9')
    
      //           });
      //       });
    

      // popover
      $(".pop").popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
});


// Carousel Auto-Cycle
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 6000
  })
});



$(document).ready(function () {

  $(".box-shadow").hover(function () {
      // $(this).find(".js-box").removeClass('remove-class')
      $(this).find(".hover").css("box-shadow", "0 0px 8px #999")
  }, function () {
      // $(this).find(".js-box").removeClass('add-class')
      $(this).find(".hover").css("box-shadow", "0 0px 0px  #999")

  });

  $(".hover").hover(function () {
      $(this).find(".featured-pro-box-1").css("background-color", "#f9c73d")
  }, function () {
      $(this).find(".featured-pro-box-1").css("background-color", "  rgba(0,0,0,0.5)")

  });
});


// title

$(document).ready(function () {

    $(".division").hover(function () {
        // $(this).find(".js-box").removeClass('remove-class')
        $(this).find(".tilte-2").css("background-color", "#f9c73d")
    }, function () {
        // $(this).find(".js-box").removeClass('add-class')
        $(this).find(".tilte-2").css("background-color", " #f6f5f4")
  
    });
  
    
  });

  $(document).ready(function () {

    $('.slider_four_in_line').EasySlides({ 'autoplay': true, 'show': 9 })

});




// veritical slider text

$(function () {
    $('.demo1').easyTicker({
        direction: 'up',
        visible: 3,
        interval: 2500,
        controls: {
            up: '.btnUp',
            down: '.btnDown',
            toggle: '.btnToggle'
        }
    });

});






// buttun to top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}













