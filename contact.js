const firebaseConfig = {
    apiKey: "AIzaSyA4R19eopcMfXOnQ1P3s4Lbz7JEtyTUpwQ",
    authDomain: "contactform-3df9d.firebaseapp.com",
    databaseURL: "https://contactform-3df9d-default-rtdb.firebaseio.com",
    projectId: "contactform-3df9d",
    storageBucket: "contactform-3df9d.appspot.com",
    messagingSenderId: "806104971403",
    appId: "1:806104971403:web:7a35b960a11ca38eb07c8e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference msg collection
var messageRef = firebase.database().ref('messages')


//listen for form submit
 document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form
 function submitForm(a) {
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // save msg
    saveMessage(name, email, message);

 }

 // function to get forma values
 function getInputVal(id){
    return document.getElementById(id).value;
 }

 //save tge msg to firtebase
 function saveMessage(name, email, message){
    var newMessageRef = messageRef.push();
    newMessageRef.sety({
        name : name,
        email:email,
        message : message
    });
 }