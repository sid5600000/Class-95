const firebaseConfig = {
      apiKey: "AIzaSyDmWyQVdWex2C7yjUUKuOQSbf1bDPdHQtw",
      authDomain: "kwitter-8969a.firebaseapp.com",
      databaseURL: "https://kwitter-8969a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8969a",
      storageBucket: "kwitter-8969a.appspot.com",
      messagingSenderId: "478865002466",
      appId: "1:478865002466:web:01213e0151881f795573bb"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += rooms;
      });});}
getData();

function update_label(){
      username = localStorage.getItem("username");
      document.getElementById("welcome_heading").innerHTML = "Welcome " + username + " !";
}

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
      });
      localStorage.setItem("roomname",room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      window.location = "index.html";
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
}

