let pokemonName = document.getElementById("name");
let pokemonId = document.getElementById("id");
let profPic = document.getElementById("profile-pic");
let pokemonTypes = document.querySelector("#type__list");
let r = document.querySelector(":root");

document.getElementById("btn").addEventListener("click", searchPokemon);

function searchPokemon(e) {
  e.preventDefault();
  let pokemon = document.getElementById("pokemon").value;
  document.forms[0].reset();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setProfile(data);
      setTypes(data);
    });
}

function setProfile(data) {
  pokemonName.textContent = data.name;
  pokemonId.textContent = data.id;
  profPic.src = data.sprites.other["official-artwork"]["front_default"];
}

function setTypes(data) {
  pokemonTypes.innerHTML = "";
  for (i in data.types) {
    let typeLi = document.createElement("li");
    typeLi.innerHTML = data.types[i].type.name;
    typeLi.classList.add(`${data.types[i].type.name}`);
    pokemonTypes.appendChild(typeLi);
  }
}

console.log(r);
