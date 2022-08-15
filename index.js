//Constantes del html
let pokeName;
let pokeName2;
let pokeName3;

const pokeImg = document.getElementById("pokeImagen");
const pokeImg2 = document.getElementById("pokeImagen2");
const pokeImg3 = document.getElementById("pokeImagen3");

//Paso la informacion del pokemon si salieron las tres imagens iguales
const namePoke = document.getElementById("pokeName");
const weightPoke = document.getElementById("pokeWeight");
const imagePoke = document.getElementById("pokeImage");

const boton = document.getElementById("btn");
const imgSave = document.createElement("img");
const imgSave2 = document.createElement("img");
const imgSave3 = document.createElement("img");

//Llamada a la poke api, tambien inserta las imagenes en el html
async function getApi(nombre, imagen, image) {
  let id = Math.floor(Math.random() * 18);
  if (id === 0) {
    id += 1;
  }
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    if (nombre === "pokeName") {
      pokeName = data.name.toUpperCase();
    } else if (nombre === "pokeName2") {
      pokeName2 = data.name.toUpperCase();
    } else {
      pokeName3 = data.name.toUpperCase();
    }
    image.src = data.sprites.front_default;
    imagen.appendChild(image);

    if (pokeName === pokeName2 && pokeName2 === pokeName3) {
      console.log(data);
      namePoke.innerText = data.name;
      weightPoke.innerText = data.weight;
      imagePoke.src = data.sprites.front_default;
      $("#myModal").modal("show");
    }
    console.log(pokeName, pokeName2, pokeName3);
  } catch (error) {
    console.error(error);
  }
}

//funcion de giro del boton
boton.addEventListener("click", () => {
  pokeName = "";
  pokeName2 = "";
  pokeName3 = "";

  getApi("pokeName", pokeImg, imgSave);

  setTimeout(() => {
    getApi("pokeName2", pokeImg2, imgSave2);
  }, 2000);

  setTimeout(() => {
    getApi("pokeName3", pokeImg3, imgSave3);
  }, 3000);
});
