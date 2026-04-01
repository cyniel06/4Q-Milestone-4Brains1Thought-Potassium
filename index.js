function greetUser() {
    let username = document.getElementById("username").value;
    if (username !== ""){
        localStorage.setItem("username", username);

        document.getElementById("greetings").innerText = `Hello, ${username}.`;
    }
}

function savedUsername() {
    let savedUsername = localStorage.getItem("username");

    if(savedUsername){
        document.getElementById("greetings").innerText = `Welcome back, ${savedUsername}!`;
    }
}