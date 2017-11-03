var config = {
  apiKey: "AIzaSyBFuC43STFtR0Vx4NYMh8D9R58wJ2IUlCE",
  authDomain: "ekua-e9d9c.firebaseapp.com",
  databaseURL: "https://ekua-e9d9c.firebaseio.com",
  projectId: "ekua-e9d9c",
  storageBucket: "",
  messagingSenderId: "192283074344"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

var makeCallback = function(classKey, lessonKey, onReadyCb) {
  var cb = function() {
    var database = firebase.database();
    var classes = database.ref("classes");
    var listItem = $(this);

    classes.child(classKey)
        .child("lessons")
        .child(lessonKey)
        .once("value")
        .then(function(snapshot) {
          //  load lesson
          var html = snapshot.val();
          var div = $('.lesson');

          div.html(html);

          // reset to the video view
          $(".addVideo").click();

          // highlight downloaded html
          $('pre > code').each(function() {
            hljs.highlightBlock(this);
          });

          // remove previous handlers
          $('#beforeButton').off('click');
          $('#afterButton').off('click');

          // connect nav buttons
          $('#beforeButton').on('click', function() {
            listItem.prev().click();
          });

          $('#afterButton').on('click', function() {
            listItem.next().click();
          });

          if (onReadyCb) {
            onReadyCb();
          }
        });
  };

  return cb;
};

var dbLoadClass = function(linkClass, classKey, lessonKey, onReadyCb, noLogin) {
  var load_cb = makeCallback(classKey, lessonKey, onReadyCb);
  var check_login = function(e) {
    //e.preventDefault();
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser || noLogin) {
        //cerrar ventana de login
        $(".login-box").css("display", "none");
        $(".signup-box").css("display", "none"); 

        //quitar candados
        if (firebaseUser) {
          $(".faHide").show();
          $(".locked").hide();
        }

        load_cb();
        return;
      }

      // you are not logged in
      $('.lesson').html("");
      $(".login-box").css("display", "block");
      $(".gotoSignup").on("click", function(){
        $(".login-box").css("display", "none");
        $(".signup-box").css("display", "block");       
      });
      $(".close").on("click", function(){
        $(".login-box").css("display", "none");
        $(".signup-box").css("display", "none");       
      });
    });
  };
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (!firebaseUser && !noLogin) { 
      $(".faHide").hide();
      $(".locked").show();
    }
  });
  
  $(linkClass).on("click", check_login);
};

$(document).ready(function() {
  $(".sidebar-nav li").on("click", function(){
    $(".sidebar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  $(".additional ul li a").on("click", function(){
    $(".additional ul").find(".clicked").removeClass("clicked"); //find parent
    $(this).addClass("clicked");
  });

  $(".addResource").on("click", function() {
    $(".video-tutorial").css("display", "none");
    $(".recursos").removeClass("noShow");
    $(".objetivos").addClass("noShow");
  });

 $(".addVideo").on("click", function() {
    $(".video-tutorial").css("display", "block");
    $(".recursos").addClass("noShow");
    $(".objetivos").addClass("noShow");
  });

 $(".addObjetivos").on("click", function() {
    $(".objetivos").removeClass("noShow");
    $(".recursos").addClass("noShow");
    $(".video-tutorial").css("display", "none");
  });
});








 
