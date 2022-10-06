 
const limit=[
    ["13:00", "16:00"],
    ["19:00", "22:30"]
];
 
document.querySelector("input[type=time]").addEventListener("change", function() {
    // obtenemos el valor introducido por el usuario
    const user = this.value.split(":");
 
    // recorremos todas las fechas limite
    // Si devuelve true, esta entre algunas de las fechas
    const result = limit.some(el => {
        let start = el[0].split(":");
        let end = el[1].split(":");
 
        // comprobamos que este entre las fechas limite
        return (start[0]<user[0] || (start[0]==user[0] && start[1]<=user[1])) && (end[0]>user[0] || (end[0]==user[0] && end[1]>=user[1]))
    });
 
    document.getElementById("info").innerHTML = result ? "Correcto" : "Error";
});

        const getData = function ( ) {
            let nombre = document.getElementById("pnombre").value;
            let apellido = document.getElementById("apellido").value;
            let servicio = document.getElementById("barberia").value;
            let dia = document.getElementById("dia").value;
            let hora = document.getElementById("hora").value; 
 
             console.log(`!!!Hola ${nombre} ${apellido} su cita es el dia ${dia} a las ${hora} para realizar un servicio de ${servicio}`);
        };
         

      

 
 
 
 
 
    
 
        
        
 
   
 
 
 
 