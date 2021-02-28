//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyC0gMwcQREagrZzo6U-Qukpd-QklFBm_fM",
    authDomain: "lets-chat-8efd2.firebaseapp.com",
    databaseURL: "https://lets-chat-8efd2-default-rtdb.firebaseio.com",
    projectId: "lets-chat-8efd2",
    storageBucket: "lets-chat-8efd2.appspot.com",
    messagingSenderId: "1024001182436",
    appId: "1:1024001182436:web:80b8841e4b24ac4ccd3af1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "letschat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room name- " + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}

function redirecttoroomname(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}

getData();

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
