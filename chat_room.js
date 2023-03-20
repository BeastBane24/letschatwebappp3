// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC7pbSQZwN-N962eklTdkJw8b5rWI2s2oU",
    authDomain: "kwitter-e2b90.firebaseapp.com",
    databaseURL: "https://kwitter-e2b90-default-rtdb.firebaseio.com",
    projectId: "kwitter-e2b90",
    storageBucket: "kwitter-e2b90.appspot.com",
    messagingSenderId: "66981539359",
    appId: "1:66981539359:web:37e9db08ac803855f56f2a"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    

function addRoom()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
     
    window.location = "chat_room.html";
    
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.getItem("room_name", name);
    window.location = "lets_chat_page.html";
}