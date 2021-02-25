//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDUommWN1u5oY-wBa15uHt-lkE-Zep-jAA",
      authDomain: "kwitterpractice-c41ca.firebaseapp.com",
      databaseURL: "https://kwitterpractice-c41ca-default-rtdb.firebaseio.com",
      projectId: "kwitterpractice-c41ca",
      storageBucket: "kwitterpractice-c41ca.appspot.com",
      messagingSenderId: "731726941229",
      appId: "1:731726941229:web:28a9d6304975451182fca4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0});
document.getElelementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
