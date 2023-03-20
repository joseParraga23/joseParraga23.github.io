let nombre1 = document.getElementById("Nombre_Player1");
let nombre2 = document.getElementById("Nombre_Player2");
let btnPlayers = document.getElementById("btnPlayers");
let pantalla1 = document.getElementById("PrimeraPantalla");
let pantalla2 = document.getElementById("SegundaPantalla");
let pantalla3 = document.getElementById("TerceraPantalla");
let carrusel = document.getElementById("carouselInner");
let validado = false
let url = "../Data.json";
let NewPlay = [];




function Valido(name1, name2) {
  if (
    name1.value === null ||
    name2.value === null ||
    name1.value === isNaN ||
    name2.value === isNaN ||
    name1.value === "" ||
    name2.value === ""
  ) {
    alert("Debe completar sus datos Para continuar");
  } else {
    validado = true;
  }
}

let RamdonCard = (min, max) => {
  return Math.round(Math.random() * max) + min;
};

function Play() {
  fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        let Player1 = [nombre1.value];
        let Player2 = [nombre2.value];
      while (Player1.length < 4){
        card1 = data[RamdonCard(0, data.length)];
        existe = Player1.includes(card1)
        if (existe){
            Play()
        }else{
            Player1.push(card1)
        }
    }
    while (Player2.length < 4){
        card2 = data[RamdonCard(0, data.length)];
        existe = Player2.includes(card2)
        if (existe){
            Play()
        }else{
            Player2.push(card2)
        }
       
    }
    NewPlay.push(Player1)
    NewPlay.push(Player2)

    });
}

let RenderCarrusel = (arr) =>{
    for (i = 0; i<3; i++) {
        let classActive = (i === 0) ? "active"  : "" 
        let carruselItem = `<div class="carousel-item ${ classActive }" id="${ i+1 }"> 
        <h3 class="tittleCarousel"> Carta ${ i+1 }/3 de ${ arr[0] } </h3>
        <img src="${ arr[i+1].img }" class="imgTarot"/>
        <h5 class="cardname">${ arr[i+1].nombre } </h5> 
        <p class="infoTarot">Aspecto negativo: ${ arr[i+1].AspectoNegativo } </p>
        <p class="infoTarot">Palabra clave: ${ arr[i+1].PalabraClave } </p>
        <p class="infoTarot">Consejo: ${ arr[i+1].consejo } </p>
        </div>`
        carrusel.innerHTML += carruselItem;
    }
}

btnPlayers.addEventListener("click", () => {
  Valido(nombre1, nombre2);
  if (validado == true) {
    pantalla1.style.display = "none";
    pantalla2.style.display = "block";
    Play();

    setTimeout(() => {
      pantalla2.style.display = "none";
      pantalla3.style.display = "block";
      let player1 = NewPlay[0]
      let player2 = NewPlay[1]
      RenderCarrusel(player1)
      
    }, 3000);
  }
});





