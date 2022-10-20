 //Variables globales

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let servicio = document.getElementById("barberia").value;
let dia = document.getElementById("dia").value;
let hora = document.getElementById("hora").value; 
 //InnerHtml de Turnos confirmados

const parrafoHtml = document.getElementById("parrafoResultado")
let boton = document.getElementById("btn");
// Horarios

const limiteHorario=[
    ["09:00", "13:00"],
    ["16:00", "21:00"]
];

 localStorage.setItem(horario, hora);
 
document.querySelector("input[type=time]").addEventListener("change", function() {
    
    const user = this.value.split(":");
 
    
    const result = limiteHorario.some(el => {
        let start = el[0].split(":");
        let end = el[1].split(":");
 
        
        return (start[0]<user[0] || (start[0]==user[0] && start[1]<=user[1])) && (end[0]>user[0] || (end[0]==user[0] && end[1]>=user[1]))
    });
 
    document.getElementById("info").innerHTML = result ? "Correcto" : "Error";
});

    const enviarTextoHtml = () =>{
        let texto = `Hola ${nombre} tu cita esta confirmada el dia ${dia} a las ${hora}`;
       parrafoResultado.innerHTML = texto;
    }
       
    let parrafo = document.querySelector("#parrafoResultado");

        boton.onclick = () => {enviarTextoHtml()};

    


  
      

 
 
 
 
 
    
 
        
        
 
   
 
 
 
 