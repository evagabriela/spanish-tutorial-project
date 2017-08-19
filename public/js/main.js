
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

    
// classroom
  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBFuC43STFtR0Vx4NYMh8D9R58wJ2IUlCE",
  //   authDomain: "ekua-e9d9c.firebaseapp.com",
  //   databaseURL: "https://ekua-e9d9c.firebaseio.com",
  //   projectId: "ekua-e9d9c",
  //   storageBucket: "",
  //   messagingSenderId: "192283074344"
  // };
  // firebase.initializeApp(config);


