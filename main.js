let pokemonName = document.getElementById("name");
let pokemonId = document.getElementById("id");
let pokemonPic = document.getElementById("profile-pic");
let pokemonTypes = document.querySelector("#type__list");
let pokemonStats = document.querySelectorAll(".stats__list__item");
let bar = document.querySelectorAll(".bar");
let barValue = document.querySelectorAll(".bar-value");
let statValue = document.querySelectorAll(".stat-value");
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let randomId = Math.floor(Math.random() * 898) + 1;

window.addEventListener("DOMContentLoaded", searchRandomPokemon);
document.getElementById("searchBtn").addEventListener("click", searchPokemon);
leftArrow.addEventListener("click", clickLeftArrow);
rightArrow.addEventListener("click", clickRightArrow);

function searchRandomPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then((response) => response.json())
    .then((data) => {
      setProfile(data);
      setTypes(data);
      setStats(data);
    });
}
function searchPokemon(e) {
  e.preventDefault();
  let pokemon = document.getElementById("searchInput").value.toLowerCase();
  if (pokemon < 0 || pokemon > 898) {
    alert("Please enter an ID between 1 and 898");
  } else {
    document.forms[0].reset();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setTypes(data);
        setStats(data);
      })
      .catch(() => {
        if (typeof pokemon === "string" || pokemon instanceof String) {
          alert(
            "Could not find pokemon by that name. Please try the ID number instead"
          );
        }
      });
  }
}

function setProfile(data) {
  pokemonName.textContent =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);

  pokemonId.textContent = `#${data.id}`;

  pokemonPic.src = data.sprites.other["official-artwork"]["front_default"];
  let types = [];
  for (i in data.types) {
    let type = data.types[i].type.name;
    types.push(type);
  }
  if (types.length > 1) {
    pokemonPic.style.background = `linear-gradient(var(--color-${types[0]}), var(--color-${types[1]}))`;
  } else {
    pokemonPic.style.background = `linear-gradient(var(--color-${types[0]}), var(--color-${types[0]}))`;
  }
}

function setTypes(data) {
  pokemonTypes.innerHTML = "";
  for (i in data.types) {
    let typeLi = document.createElement("li");
    let typeValue =
      data.types[i].type.name.charAt(0).toUpperCase() +
      data.types[i].type.name.slice(1);
    typeLi.innerHTML = typeValue;

    typeLi.classList.add(`${data.types[i].type.name}`);
    pokemonTypes.appendChild(typeLi);
    pokemonTypes.children[
      i
    ].style.backgroundColor = `var(--color-${typeValue.toLowerCase()})`;
  }
}

function setStats(data) {
  for (i in data.stats) {
    let barValueConverted = (data.stats[i]["base_stat"] * 7.5) / 255;
    barValue[i].style.width = `${barValueConverted}rem`;
    statValue[i].textContent = data.stats[i]["base_stat"];
  }
}

function clickLeftArrow() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setProfile(data);
      setTypes(data);
      setStats(data);
    });
}

function clickRightArrow() {
  if (id === undefined) {
    id = 1;
  } else {
    id += 1;
  }
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setProfile(data);
      setTypes(data);
      setStats(data);
    });
}
