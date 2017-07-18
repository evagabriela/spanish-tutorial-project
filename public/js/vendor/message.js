// classroom 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFuC43STFtR0Vx4NYMh8D9R58wJ2IUlCE",
    authDomain: "ekua-e9d9c.firebaseapp.com",
    databaseURL: "https://ekua-e9d9c.firebaseio.com",
    projectId: "ekua-e9d9c",
    storageBucket: "",
    messagingSenderId: "192283074344"
  };
  firebase.initializeApp(config);

  var messagesData = firebase.database();

  $(document).ready(function(){
  	$('#message-form').submit(function (event) {
  		event.preventDefault();
  		//get user name 
  		var name = $("#name").val();
  		$("#name").val('');
  		//get user's email
  		var mail = $("#mail").val();
  		$("#mail").val('');
  		//get subject
  		var subject = $("#subject").val();
  		$("#subject").val('');

  		var message = $("#message").val();
  		$("#message").val('');
  		//create a section in the database
  		var messages = messagesData.ref("messages");

  		messages.push({
        name: name,
        mail: mail,
        subject: subject,
        message: message
        });

  		});
  	});

