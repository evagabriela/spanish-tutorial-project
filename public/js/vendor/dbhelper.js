  var config = {
    apiKey: "AIzaSyBFuC43STFtR0Vx4NYMh8D9R58wJ2IUlCE",
    authDomain: "ekua-e9d9c.firebaseapp.com",
    databaseURL: "https://ekua-e9d9c.firebaseio.com",
    projectId: "ekua-e9d9c",
    storageBucket: "",
    messagingSenderId: "192283074344"
  };
  firebase.initializeApp(config);

  var makeCallback = function(classKey, lessonKey) {
    var cb = function() {
      var database = firebase.database();
      var classes = database.ref("classes");
      var listItem = $(this);

      classes.child(classKey)
          .child("lessons")
          .child(lessonKey)
          .once("value")
          .then(function(snapshot) {
            var html = snapshot.val();
            var div = $('.lesson');
            div.html(html);

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
          });
    };

    return cb;
  };

  var dbLoadClass = function(linkClass, classKey, lessonKey) {
    var cb = makeCallback(classKey, lessonKey);
    $(linkClass).on("click", cb);
  };




 
