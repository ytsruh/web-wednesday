const title = document.getElementById("page-title");
const pokemonContainer = document.getElementById("pokemon");

const noPokemon = async () => {
  title.innerHTML = "<h1>Error : There is no pokemon to get</h1>";
};

const renderPokemon = async (data) => {
  console.log(data);
  title.innerHTML = `<h1>${data.species.name}</h1>`;
  let html = `
    <div class="row">
        <div class="col-4 col align-middle">
          <img
            style="width: 100%"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"
            alt="${data.species.name}"
          />
        </div>
        <div class="col-8 col align-middle">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Name : ${data.species.name}</h4>
              <div class="row flex-spaces" style="margin-top: 20px">
                <div>
                  <p class="card-text">Height: ${data.height}</p>
                  <p class="card-text">Weight : ${data.weight}</p>
                </div>
                <div class="col">
                  <span class="badge">${data.types[0].type.name}</span>
                  ${data.types[1] ? `<span class='badge'>${data.types[1].type.name}</span>` : ""}
                </div>
              </div>
              <p class="card-subtitle">Stats</p>
              <div class="row" style="margin: 0; padding: 0">
                <div class="col-6 col">HP: ${data.stats[0].base_stat}</div>
                <div class="col-6 col">Speed: ${data.stats[5].base_stat}</div>
              </div>
              <div class="row" style="margin: 0; padding: 0">
                <div class="col-6 col">Attack: ${data.stats[1].base_stat}</div>
                <div class="col-6 col">Defence: ${data.stats[2].base_stat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  let template = document.createElement("div");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  pokemonContainer.appendChild(template);
};

const fetchPokemon = async () => {
  try {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.pokemon) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
      const data = await res.json();
      renderPokemon(data);
    } else {
      noPokemon();
    }
  } catch (err) {
    console.log(err);
  }
};

fetchPokemon();
