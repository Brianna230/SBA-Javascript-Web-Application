async function getPokemon() {
    const PokemonName = document.getElementById("PokeSearch").value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
    const data = await response.json()
    console.log(data)
    const PokemonSprite = data.sprites.front_default;
    const PokeImgsElement = document.querySelector(".poke-img");
    PokeImgsElement.src = PokemonSprite
    PokeImgsElement.style.display = "block";
    PokeImgsElement.style.marginLeft = "225px";
    
}
getPokemon()