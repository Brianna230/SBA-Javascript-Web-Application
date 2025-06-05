  export async function GetPokemonhp(data,PokemonContainer){
    if (document.getElementById("HP")) {
        let Pokemonhp = document.getElementById("HP")
        let newPokemonhp = document.createElement("p")
        newPokemonhp.id = "HP"
        console.log(newPokemonhp)
        newPokemonhp.textContent = "HP:"+ data.stats[0].base_stat
        PokemonContainer.replaceChild(newPokemonhp,Pokemonhp)
    } else {
        let Pokemonhp = document.createElement("p")
        Pokemonhp.id = "HP"
        console.log(Pokemonhp)
        Pokemonhp.textContent = "HP:"+ data.stats[0].base_stat
        PokemonContainer.appendChild(Pokemonhp)
    }
    console.log(PokemonContainer)
}   
