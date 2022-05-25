const pokemon_container = document.querySelector('.pokemons'); // selecciono nodo donde voy a incluir mi html con JS
const pokemons_number = 150; // creo constante con el número máximo de pokemons que voy a necesitar 


const getPokemon = async id => {  // constante que es una función asíncrona 
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`; // constante que guarda la url del api + id 
  const response = await fetch(url); // await fetch de la url del api + id para que te devuelva 1 pokemon
  const pokemon = await response.json(); // pasado json 
  createPokemonCard(pokemon); // esta función llama a un pokemon y createPokemon lo crea 
}

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) { // con esta función asíncrona creo con un bucle for los 150 pokemons
		await getPokemon(i);
	}
};  


const createPokemonCard = (pokemon) => {
  const pokemonElement = document.createElement('div');  // creo una varaible que genera un div 
  pokemonElement.classList.add('pokemonCard'); // añado una clase a ese div 
  const { id, name, sprites, types, base_experience, weight } = pokemon; // desestructuring de la función 
  const type = types[0].type.name; 
  const pokeInnerHTML = `
    <div class="main_data">
        <h3 class="name">${name}</h3>
    </div>
    <img class="pokeimage" src="${sprites.other.dream_world.front_default}"/>
    <div class="second_data">
        <p>${base_experience}</p>
        <p>${weight}</p>
    </div>
    <div class="family">
        <p class="family_type">${type}</p>
    </div>    
  `

  /*
  `   
  <div class="img-container">
    <img src="${sprites.front_default}"/>
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type"><span>${type}</span></small>
    <p class="experience">${base_experience}</p>
    <p class="experience">${weight}</p>
  </div>
  `; */

// con innerHTML incluyo el html con las variables que llaman a partes del api (name, id, type, weight...) 

    pokemonElement.innerHTML = pokeInnerHTML;
    pokemon_container.appendChild(pokemonElement); // incluyo el pokemonElement (ese div con el innerHTML dentro) al final de pokemon_container que es el nodo que había seleccionado
}

fetchPokemons();  //llamo a la función con el bucle que pinta todos los pokemon 