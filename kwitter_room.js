
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0XKhyWBjLKe9MyB0tw12lyZKxtOxBa9w",
      authDomain: "kwitterapp-b85a6.firebaseapp.com",
      databaseURL: "https://kwitterapp-b85a6-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-b85a6",
      storageBucket: "kwitterapp-b85a6.appspot.com",
      messagingSenderId: "664482054910",
      appId: "1:664482054910:web:430c4d526d663f7f39dbaf"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!"

function addroom()
{
 room_name=document.getElementById("room_name").value
 firebase.database().ref("/").child(room_name).update({
      purpose:" adding room name"  
    });
    localStorage.setItem("room_name",room_name)
    window.location="kwitter_room.html"
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML +=row

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"

}







