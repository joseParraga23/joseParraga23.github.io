let nombre1 = document.getElementById("Nombre_Player1");
let nombre2 = document.getElementById("Nombre_Player2");
let btnPlayers =document.getElementById("btnPlayers");
let pantalla1 = document.getElementById("PrimeraPantalla");
let pantalla2 = document.getElementById("SegundaPantalla");
let pantalla3 = document.getElementById("TerceraPantalla")
let validado = false;


function Valido(name1,name2){
    if(name1.value === null || name2.value === null || name1.value === isNaN || name2.value === isNaN || name1.value === "" || name2.value === ""){
        alert("Debe completar sus datos Para continuar");
    }else{
        validado = true;
    }
};

btnPlayers.addEventListener("click", () =>{
    Valido(nombre1,nombre2);
    if(validado == true){
        pantalla1.style.display ="none"
        pantalla2.style.display = "block"
        setTimeout(() => {
            pantalla2.style.display= "none"
            pantalla3.style.display = "block"
        },3000);
    }
    

});