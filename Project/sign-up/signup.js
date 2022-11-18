function signup(a){
    event.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Passwords").value;
    var user ={
        email : email,
        password : password,
    };
    var json = JSON.stringify(user)
    localStorage.setItem(email,json)
}
