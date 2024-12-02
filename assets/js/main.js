const listPokemons = document.getElementById('list-pokemons')

function convertPokemonToLi(pokemon) {
    return `            
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="list-types">
                        ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
            `
}

pokeApi.getPokemons().then((pokemonList = []) => {
    listPokemons.innerHTML += pokemonList.map(convertPokemonToLi).join('')
})