
// Modal 
    if (screen.width <= 480) {
        $('.box-item a').on('click', function (event) {
            event.preventDefault();
            $(".content-hover").css("display", "none");
            $(".modal-background").css("display", "block");
            $("#cerrar").on("click", function() {
            $(".modal-background").fadeOut()
             });
        });
    }

// Subscription Box

    $('.open').on('click', function () {
        $('body').toggleClass('active');
         $('.sidebar').show();
    });

    $('.close').on('click', function () {
        $('body').removeClass('active');
      $('.sidebar').hide();

    });


// Animation
$(window).on('scroll', function () {
    //   //Take the current position (vertical position from top) of your div in the variable
    var distanceScrolled = $(window).scrollTop();

    // console.log('The distance scrolled is: ' + distanceScrolled);

   if (distanceScrolled > 100) {
     $('#intro').addClass('animated');
   }
   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
   else {
     $('#intro').removeClass("animated");
   }
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part

});
    

$(".benefits-section").mouseenter(function(){
    var icon = $(this).find("i")[0];
    $(icon).css("background-color", "#fff");
    $(icon).css("color", "#00c4cc");
});

 $(".benefits-section").mouseleave(function(){
    var icon = $(this).find("i")[0];
    $(icon).css("background-color", "#00c4cc");
    $(icon).css("color", "#fff");
});

