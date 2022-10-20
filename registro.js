let txtNombre = document.getElementById("nombre").value;
let txtApellido = document.getElementById("apellido").value;
let txtMail = document.getElementById("correo").value;
let txtPass = document.getElementById("pass").value;
let txtRePass = document.getElementById("passDup").value;

//almaceno los valores dentro de localstorage
localStorage.setItem('nombre',txtUnombre);
localStorage.setItem('apellido',txtApellido);
localStorage.setItem('correo',txtMail);
localStorage.setItem('pass',txtPass);
localStorage.setItem('passDup',txtRePass);

//llamo los valores dentro de localstorage
let txtNombre = localStorage.getItem('nombre');
let txtApellido =localStorage.getItem('apellido');
let txtMail =localStorage.getItem('correo');
let txtPass =localStorage.getItem('pass');
let txtRePass =localStorage.getItem('passDup');