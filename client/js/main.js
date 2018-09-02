const socket = io();

socket.on("hiFromServer", function(data){
    let _usernameId = document.getElementById('userId');
    _usernameId.innerHTML = data;
});