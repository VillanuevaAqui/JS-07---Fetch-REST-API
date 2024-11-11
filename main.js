const POKEMON_CONTAINER = document.getElementById("pokemon");
const URL_API = "https://pokeapi.co/api/v2/pokemon/"
var POKEMON = JSON.parse(localStorage.getItem("pokemon"));

//Buttoms, previos, Get pokemons, Next)

document.getElementById("prev-btn").addEventListener("click", () => {

    POKEMON = fetchPokemon((POKEMON.id - 1)); 

});

document.getElementById("get-btn").addEventListener("click", () => {

    fetchPokemon(document.getElementById("poke-name").value);

});

document.getElementById("next-btn").addEventListener("click", () => {

    POKEMON = fetchPokemon((POKEMON.id + 1)); 
    

});


// Connect with pokeApi

function fetchPokemon(id) {

    fetch(URL_API + id).then((res) => res.json()).then((pokemon) => {
        savePokemon (pokemon);
        createPokemon(pokemon);

    });
}

function restore(pokemon) {

    if (pokemon != undefined){

        createPokemon(pokemon);
    }

}

//Create one card in the main

function createcard(){

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img")
    sprite.setAttribute("id", "poke-sprite");
    spriteContainer.append(sprite);

    const listDescription = document.createElement("ul");
    listDescription.classList.add("description");

    const number = document.createElement("li");
    number.setAttribute("id", "poke-number");

    const name = document.createElement("li");
    name.setAttribute("id", "poke-name2");

    const weight = document.createElement("li");
    weight.setAttribute("id", "poke-weight");
    
    const height = document.createElement("li");
    height.setAttribute("id", "poke-height");

   // const type = document.createElement("li");
    //type.setAttribute("id", "poke-type");

    listDescription.append(number, name, weight, height);
    POKEMON_CONTAINER.append(spriteContainer, listDescription);
}

//assign the values ​​of the pokemon on the card

function createPokemon(pokemon){

    const sprite = document.getElementById("poke-sprite");
    sprite.src = pokemon.sprites.front_default;

    const number = document.getElementById("poke-number");
    number.textContent = "No: " + pokemon.id;

    const name = document.getElementById("poke-name2");
    name.textContent = "Nombre: " + pokemon.name;

    const weight = document.getElementById("poke-weight");
    weight.textContent = "Peso: " + pokemon.weight + " Kg";

    const height = document.getElementById("poke-height");
    height.textContent = "Altura: " + pokemon.height + " cm";

    //const type = getElementById("poke-type");
    //type

}

// Save the pokemon information in the local storage

function savePokemon(pokemon) {

    POKEMON = pokemon;
    localStorage.setItem("pokemon", JSON.stringify(POKEMON));

}

createcard();
restore(POKEMON);

/*const listType = pokemon.types.map ((element) => {

    const typeElement = document.createElement("li");
    typeElement.textContent = element.type.name;
    typeElement.classList.add("list-type-pokemon_element");
    return typeElement;

    listTypePokemon.append(...listType);

});*/