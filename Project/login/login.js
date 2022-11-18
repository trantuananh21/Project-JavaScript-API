const input = document.querySelector("#Passwords");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click" , function ( ) {
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute("type","text")
});
eyeClose.addEventListener("click" , function ( ) {
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute("type","password")
});


function login(a){
    event.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if (user ==null){
        alert("vui long nhap username va password")
    }
    else if (email ==data.email && password ==data.password){
        window.location.href="http://127.0.0.1:5500/Project/trang-chinh/trangchu.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }
}