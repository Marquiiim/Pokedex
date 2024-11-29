const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const listPokemons = document.getElementById('list-pokemons')

function convertPokemonToLi(pokemon) {
    return `            
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="list-types">
                        <li class="type">
                            Grass
                        </li>
                        <li class="type">
                            Poison
                        </li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt="${pokemon.name}">
                </div>
            </li>
            `
}

pokeApi.getPokemons().then((pokemonList) => {
    const listItems = []

    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i]
        listItems.push(convertPokemonToLi(pokemon))
    }

})