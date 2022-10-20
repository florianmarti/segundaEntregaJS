 
        let txtUser = document.querySelector("#txt-user").value;
        let txtPassword = document.querySelector("#txt-password").value;

        //almaceno los valores dentro de localstorage
        localStorage.setItem('usuario',txtUser);
        localStorage.setItem('password',txtPassword);
     
        //llamo los valores dentro de localstorage
    let txt_user = localStorage.getItem('usuario');
    let txt_password =localStorage.getItem('password');

  
 
 



   