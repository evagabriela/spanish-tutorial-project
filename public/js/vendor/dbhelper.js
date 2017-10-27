var config = {
  apiKey: "AIzaSyBFuC43STFtR0Vx4NYMh8D9R58wJ2IUlCE",
  authDomain: "ekua-e9d9c.firebaseapp.com",
  databaseURL: "https://ekua-e9d9c.firebaseio.com",
  projectId: "ekua-e9d9c",
  storageBucket: "",
  messagingSenderId: "192283074344"
};

firebase.initializeApp(config);

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

var dbLoadClass = function(linkClass, classKey, lessonKey, onReadyCb) {
  var cb = makeCallback(classKey, lessonKey, onReadyCb);
  $(linkClass).on("click", cb);
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








 
