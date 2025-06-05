import { Fetch } from "/fetch.js"
import {GetPokemonhp} from "/function.js"
async function getPokemon() {
    const PokemonName = document.getElementById("PokeSearch").value;
    const data = await Fetch(PokemonName)
    console.log(data)
    const PokemonSprite = data.sprites.front_default;
    const PokeImgsElement = document.querySelector(".poke-img");
    PokeImgsElement.src = PokemonSprite
    PokeImgsElement.style.display = "block";
    PokeImgsElement.style.marginLeft = "225px";
    const PokemonContainer = document.querySelector(".col2")

  GetPokemonhp(data,PokemonContainer)

   if(document.getElementById("attack")){
    let newPokemonAttack = document.createElement("p")
    let Pokemonattack = document.getElementById("attack")
    newPokemonAttack.id = "attack"
    console.log(newPokemonAttack)
    newPokemonAttack.textContent = "ATK:" + data.stats[1].base_stat
    PokemonContainer.replaceChild(newPokemonAttack,Pokemonattack)}
    else{
        let Pokemonattack = document.createElement("p")
        Pokemonattack.id = "attack"
        Pokemonattack.textContent = "ATK:" + data.stats[1].base_stat
        PokemonContainer.appendChild(Pokemonattack)

    }
   
    if(document.getElementById("defense")){
    let newPokemonDefense = document.createElement("p")
    let PokemonDefense = document.getElementById("defense")
    newPokemonDefense.id = "defense"
    console.log(newPokemonDefense)
    newPokemonDefense.textContent = "DEF:" + data.stats[2].base_stat
    PokemonContainer.replaceChild(newPokemonDefense,PokemonDefense)
   }else{
    let PokemonDefense = document.createElement("p")
    PokemonDefense.id = "defense"
    PokemonDefense.textContent = "DEF:" + data.stats[2].base_stat
    PokemonContainer.appendChild(PokemonDefense)
   }
    
}
// window.getPokemon = getPokemon;
const PokemonButton = document.getElementById("pokeButton").addEventListener('click',()=>{
     setTimeout(() =>{
     getPokemon()
    }, 1000)
})
getPokemon()


