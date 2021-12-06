let pokemonName = document.getElementById("name");
let pokemonId = document.getElementById("id");
let pokemonPic = document.getElementById("profile-pic");
let pokemonTypes = document.querySelector("#type__list");
let pokemonStats = document.querySelectorAll(".stats__list__item");
let pokemonPicDiv = document.getElementById("profile-pic__div");

document.getElementById("btn").addEventListener("click", searchPokemon);

function searchPokemon(e) {
  e.preventDefault();
  let pokemon = document.getElementById("pokemon").value.toLowerCase();
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
    pokemonPicDiv.style.background = `linear-gradient(var(--color-${types[0]}), var(--color-${types[1]}))`;
  } else {
    pokemonPicDiv.style.background = `linear-gradient(var(--color-${types[0]}), var(--color-${types[0]}))`;
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
  pokemonStats.forEach((item) => {
    if (item.lastElementChild.innerHTML != "") {
      item.lastElementChild.innerHTML = "";
    }
    if (item.firstElementChild.classList.contains("hidden")) {
      item.firstElementChild.classList.remove("hidden");
    }
  });
  for (i in data.stats) {
    let statValue = document.createElement("p");
    // console.log(data.stats[i][`base_stat`]);
    statValue.textContent = data.stats[i]["base_stat"];
    pokemonStats[i].appendChild(statValue);
  }
}
