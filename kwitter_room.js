
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToTheRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToTheRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.locatiom = "kwitter_page.html";
}
function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}