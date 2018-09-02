const socket = io();

socket.on("updateUsersData", function(data){
    const _connectedUsers   = document.getElementById('connectedUsers');
    
    for(i in data.users){
        let e = document.createElement('p');
        if(data.users == undefined) e.innerHTML = "No users connected.";
        e.innerHTML = data.users[i];
        _connectedUsers.appendChild(e);
    }
    console.log(data)

});