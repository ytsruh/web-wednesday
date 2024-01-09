let allPokemon = [];

const createPokeCard = (pokemon) => {
  let html = `
    <div class="col-4 col">
        <div class="card" style="width: 100%;">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}>

        <div class="card-body">
            <h4 class="card-title">${pokemon.name}</h4>
            <a class="paper-btn" href="pokemon.html?pokemon=${pokemon.id}">View</a>
        </div>
        </div>
    </div>
    `;
  let template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};

const appendResults = async (pokemon) => {
  try {
    const resultsDiv = document.getElementById("pokemon-results");
    for (let i = 0; i < pokemon.length; i++) {
      const poke = pokemon[i];
      const pokemonCard = createPokeCard(poke);
      resultsDiv.appendChild(pokemonCard);
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await res.json();
    for (let i = 0; i < data.results.length; i++) {
      const element = data.results[i];
      element.id = i + 1;
    }
    await appendResults(data.results);
    allPokemon = data.results;
  } catch (err) {
    console.log(err);
  }
};

const searchPokemon = async () => {
  const searchTerm = document.getElementById("pokemonSearch");
  const filtered = allPokemon.filter((pokemon) => pokemon.name.includes(searchTerm.value.toLowerCase()));
  const resultsDiv = document.getElementById("pokemon-results");
  resultsDiv.innerHTML = "";
  const subHeading = document.getElementById("pokemonCount");
  subHeading.textContent = `${filtered.length} Pokemon`;
  appendResults(filtered);
};

const reset = async () => {
  const searchTerm = document.getElementById("pokemonSearch");
  searchTerm.value = "";
  const resultsDiv = document.getElementById("pokemon-results");
  resultsDiv.innerHTML = "";
  const subHeading = document.getElementById("pokemonCount");
  subHeading.textContent = `151 Pokemon`;
  appendResults(allPokemon);
};

//Run Javascript
fetchPokemon();
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchPokemon);
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
