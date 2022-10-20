let txtNombre = document.getElementById("nombre").value;
let txtApellido = document.getElementById("apellido").value;
let txtMail = document.getElementById("correo").value;
let txtPass = document.getElementById("pass").value;
let txtRePass = document.getElementById("passDup").value;

//almaceno los valores dentro de localstorage
localStorage.setItem('usuario',txtUser);
localStorage.setItem('password',txtPassword);

//llamo los valores dentro de localstorage
let txt_user = localStorage.getItem('usuario');
let txt_password =localStorage.getItem('password');