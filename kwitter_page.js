//YOUR FIREBASE LINKS

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

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data["name"]
message=message_data["message"]
like=message_data["like"]
name_with_tag = "<h4> "+ name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";

row=name_with_tag+message_with_tag+like_button
document.getElementById("output").innerHTML +=row

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on the like button"+message_id)
buttonid=message_id
likes=document.getElementById(buttonid).value
updated_likes=Number(likes)+1
console.log(updated_likes)

firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });

}


function send()
{
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }
      )
document.getElementById("msg").value=""


}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location="index.html"
}











