const bar = document.querySelectorAll(".bar");
const barValue = document.querySelectorAll(".bar-value");
const statValue = document.querySelectorAll(".stat-value");

let id;

$("#searchBtn").click(searchPokemon);
$("#left-arrow").click(clickLeftArrow);
$("#right-arrow").click(clickRightArrow);
$(window).keydown(changePokemon);

const setRandomInitialPokemon = () => {
  let randomId = Math.floor(Math.random() * 898) + 1;
  getPokemonData(randomId);
};

const getPokemonData = async (pokemon) => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    let data = response.data;
    id = data.id;
    setName(data);
    setPhoto(data);
    getElementTypes(data);
    setStats(data);
    setDescription(id);
    getEvolutionChain(id);
  } catch (e) {
    if (typeof pokemon === "string" || pokemon instanceof String) {
      alert(
        "Could not find pokemon by that name. Please try the ID number instead"
      );
    }
  }
};

const capitalizeFirstLetterOfText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const setName = (data) => {
  $("#name").text(capitalizeFirstLetterOfText(data.name));
};

const setPhoto = (data) => {
  $("#profile-pic").attr(
    "src",
    data.sprites.other["official-artwork"]["front_default"]
  );
};

const getElementTypes = (data) => {
  let types = [];
  for (i in data.types) {
    let type = data.types[i].type.name;
    types.push(type);
  }
  setPhotoBackgroundGradient(types);
  setTypes(types);
};

const setPhotoBackgroundGradient = (types) => {
  // Pokemon have a type of at least 1 and at max 2

  $("#profile-pic").css(
    "background",
    `linear-gradient(var(--color-${types[0]}), var(--color-${
      types[types.length - 1]
    }))`
  );
};

const setTypes = (types) => {
  $("#type__list").empty();
  for (type of types) {
    $("#type__list").append(
      `<li style="background-color: var(--color-${type})">${capitalizeFirstLetterOfText(
        type
      )}</li>`
    );
  }
};

const setStats = (data) => {
  for (i in data.stats) {
    let barValueConverted = (data.stats[i]["base_stat"] * 7.5) / 255;
    barValue[i].style.width = `${barValueConverted}rem`;
    statValue[i].textContent = data.stats[i]["base_stat"];
  }
};

const setDescription = async (pokemon) => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    );
    for (i in response.data["flavor_text_entries"]) {
      if (response.data["flavor_text_entries"][i].language.name === "en") {
        $("#description__p").text(
          response.data["flavor_text_entries"][i]["flavor_text"]
        );
        break;
      }
    }
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

const getEvolutionChain = async (pokemon) => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    );

    let evolutionChainUrl = response.data["evolution_chain"].url;
    getEvolutionIds(evolutionChainUrl);
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

const getEvolutionIds = async (url) => {
  try {
    evolutionIds = [];
    let baseId, secondId, thirdId;
    let response = await axios.get(url);
    baseId = response.data.chain.species.url.split("/");
    baseId = baseId[baseId.length - 2];
    evolutionIds.push(baseId);

    // checks if there is a second form and if so it grabs the Id of the second form
    if (response.data.chain["evolves_to"][0] != undefined) {
      secondId = response.data.chain["evolves_to"][0].species.url.split("/");
      secondId = secondId[secondId.length - 2];
      evolutionIds.push(secondId);

      // checks if there is a third form and if so it grabs the Id of the third form
      if (response.data.chain["evolves_to"][0]["evolves_to"][0] != undefined) {
        thirdId =
          response.data.chain["evolves_to"][0][
            "evolves_to"
          ][0].species.url.split("/");
        thirdId = thirdId[thirdId.length - 2];
        evolutionIds.push(thirdId);
      }
    }

    for (i in evolutionIds) {
      clearEvolutionPhotos();
      setEvolutionPhotos(evolutionIds[i], i);
    }
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

const clearEvolutionPhotos = () => {
  for (let i = 0; i < 3; i++) {
    $(`#${i}__img`).attr("src", "");
    $(`#${i}__p`).text("");

    if ($(`#evolution__box__${i}`).hasClass("evolution")) {
      $(`#evolution__box__${i}`).removeClass("evolution");
    }
  }
};

const setEvolutionPhotos = async (pokemon, i) => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    $(`#${i}__img`).attr(
      "src",
      response.data.sprites.other["official-artwork"]["front_default"]
    );
    if (i == 0) {
      $(`#${i}__p`).text("Base");
    } else if (i == 1) {
      $(`#${i}__p`).text("Second");
    } else {
      $(`#${i}__p`).text("Third");
    }
    $(`#evolution__box__${i}`).addClass("evolution");
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

function searchPokemon(e) {
  e.preventDefault();
  let pokemon = document.getElementById("searchInput").value.toLowerCase();
  if (pokemon < 0 || pokemon > 898) {
    alert("Please enter an ID between 1 and 898");
  } else {
    document.forms[0].reset();

    getPokemonData(pokemon);
  }
}

function clickLeftArrow() {
  if (id > 1) {
    id -= 1;
    getPokemonData(id);
  } else if (id === 1) {
    id = 898;
    getPokemonData(id);
  }
}

function clickRightArrow() {
  if (id < 898) {
    id += 1;
    getPokemonData(id);
  } else if (id === 898) {
    id = 1;
    getPokemonData(id);
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

setRandomInitialPokemon();
