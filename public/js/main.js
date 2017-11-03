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

// Modal mobile 
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

//Modal login 
$('.log').on('click', function () {
    $('body').toggleClass('active');
    $('.ventana').show();
});
$('.close').on('click', function () {
    $('body').removeClass('active');
    $('.ventana').hide();
});

//Modal signup 
$('.register').on('click', function () {
    $('body').toggleClass('active');
    $('.crearCuenta').show();
});
$('.close').on('click', function () {
    $('body').removeClass('active');
    $('.crearCuenta').hide();
});

$('.gotoSignup').on('click', function () {
    $('body').toggleClass('active');
    $('.ventana').hide();
    $('.crearCuenta').show();
});
$('.close').on('click', function () {
    $('body').removeClass('active');
    $('.crearCuenta').hide();
});
    
    // Logout classroom 
$(".trigger").on("click", function(){
    $(".logout_class").css("display", "block");
});

$(".close_class").on("click", function(){
    $(".logout_class").css("display", "none");
});



// Login and signup data for Firebase
//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click', e => {
    e.preventDefault();
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});


//Add signup event
btnSignUp.addEventListener('click', e => {
    e.preventDefault();
    //Get email and password
    //TODO: check for real emailz
    const email = txtEmailSignUp.value;
    console.log(email);
    const pass = txtPasswordSignUp.value;
    const auth = firebase.auth();
    var user = firebase.auth().currentUser;
    //signin
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
        .catch(e => console.log(e.message));


    // create user and sign in
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.then(function(user) {
    user.sendEmailVerification().then(function() {
     // Email sent.
    }, function(error) {
     // An error happened.
    });
    }); 

}); // end sign up button event listener




if (btnLogout != null) {
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });
}

//Add real time listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        // cerrar la ventana de signup (si esta abierta)
        // cerrar la ventana de login (si esta abierta)
        $('.close').click();
        // ocultar boton de signup
        $('.register').hide();
        // ocultar boton de login
        $('.log').hide();
        // mostar text: 'Hola <usuario>'
        $('.noShow').toggleClass();
        btnLogout.classList.remove('noShow');
        console.log('you are now logged in');
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
        if (btnLogout != null) {
            btnLogout.classList.add('noShow');
        }
        cursosButton.classList.add('noShow');
        $('.register').show();
        $('.log').show();
    }
});








