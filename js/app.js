(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyArcqUHd-4nlIZwQSAcPR5pX1HA3_V7ykw",
    authDomain: "kettle-agenda.firebaseapp.com",
    databaseURL: "https://kettle-agenda.firebaseio.com",
    projectId: "kettle-agenda",
    storageBucket: "kettle-agenda.appspot.com",
    messagingSenderId: "968409966917"
  };
  firebase.initializeApp(config);

  // Get elements
  var txtEmail = document.getElementById('txtEmail');
  var txtPassword = document.getElementById('txtPassword');
  var btnLogin = document.getElementById('btnLogin');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    // Sign in
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add signup event
  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // TODO: CHECK FOR REAL EMAIL
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    // Sign in
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('Not logged in');
      btnLogout.classList.add('hide');
    }
  });
}());
