import {Fetch} from "/fetch.js"
async function getPokemon() {
    const PokemonName = document.getElementById("PokeSearch").value || "Pikachu";
    const fetchData = await Fetch(PokemonName)
    console.log(fetchData)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
    const data = await response.json()
    console.log(data)
    const PokemonSprite = data.sprites.front_default;
    const PokeImgsElement = document.querySelector(".poke-img");
    PokeImgsElement.src = PokemonSprite
    PokeImgsElement.style.display = "block";
    PokeImgsElement.style.marginLeft = "225px";
    const PokemonContainer = document.querySelector(".col2")
    let Pokemonhp = document.createElement("p")
    console.log(Pokemonhp)
    Pokemonhp.textContent = data.stats[0].base_stat 
    console.log(data.stats[0].base_stat)
    PokemonContainer.appendChild(Pokemonhp)
    console.log(PokemonContainer)
   

}
 getPokemon()

