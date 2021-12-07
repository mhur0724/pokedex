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
let descriptionP = document.getElementById("description__p");
let initId = Math.floor(Math.random() * 898) + 1;
let id;
let evolution;

window.addEventListener("DOMContentLoaded", initialPokemon);
document.getElementById("searchBtn").addEventListener("click", searchPokemon);
leftArrow.addEventListener("click", clickLeftArrow);
rightArrow.addEventListener("click", clickRightArrow);
window.addEventListener("keydown", changePokemon);

function fetchFunction(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      setProfile(data);
      setTypes(data);
      setStats(data);
      id = data.id;
    })
    .catch(() => {
      if (typeof pokemon === "string" || pokemon instanceof String) {
        alert(
          "Could not find pokemon by that name. Please try the ID number instead"
        );
      }
    });
  setDescription(pokemon);
  getEvolutionChain(pokemon);
}

function initialPokemon() {
  fetchFunction(initId);
}

function searchPokemon(e) {
  e.preventDefault();
  let pokemon = document.getElementById("searchInput").value.toLowerCase();
  if (pokemon < 0 || pokemon > 898) {
    alert("Please enter an ID between 1 and 898");
  } else {
    document.forms[0].reset();

    fetchFunction(pokemon);
  }
}

function clickLeftArrow() {
  if (id > 1) {
    id -= 1;
    fetchFunction(id);
  } else if (id === 1) {
    id = 898;
    fetchFunction(id);
  }
}

function clickRightArrow() {
  if (id < 898) {
    id += 1;
    fetchFunction(id);
  } else if (id === 898) {
    id = 1;
    fetchFunction(id);
  }
}

function changePokemon(e) {
  switch (e.keyCode) {
    case 37:
      clickLeftArrow();
      break;
    case 39:
      clickRightArrow();
      break;
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

function setDescription(pokemon) {
  let descriptionLanguages = [];
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      for (i in data["flavor_text_entries"]) {
        descriptionLanguages.push(data["flavor_text_entries"][i].language.name);
      }
      descriptionP.textContent =
        data["flavor_text_entries"][descriptionLanguages.indexOf("en")][
          "flavor_text"
        ];
    });
}

function getEvolutionChain(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
    .then((response) => response.json())
    .then((data) => {
      fetch(`${data["evolution_chain"].url}`)
        .then((response) => response.json())
        .then((data) => {
          let base = data.chain.species.name;
          let secondForm, thirdForm;
          if (data.chain["evolves_to"][0] != undefined) {
            secondForm = data.chain["evolves_to"][0].species.name;
            if (data.chain["evolves_to"][0]["evolves_to"][0] != undefined) {
              thirdForm =
                data.chain["evolves_to"][0]["evolves_to"][0].species.name;
            }
          }
          console.log(base, secondForm, thirdForm);
        });
    });
}

function setEvolution(pokemon) {}
