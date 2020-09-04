import React from 'react'
import {getInitialPokemons, api} from 'services/api'
import {PokemonCard} from 'components/PokemonCard'

import {Wrapper} from './styles'

function Pokemons() {
  const [pokemons, setPokemons] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function getPokes() {
      const pokeData = await getInitialPokemons()

      if (pokeData.success) {
        const promises = []

        pokeData.pokemons.map(pokemon => promises.push(api.get(pokemon.url)))

        Promise.allSettled(promises).then(results => {
          const updatedPokemon = []

          results.map(result => {
            if (result.status === 'fulfilled') {
              const uniquePokemon = {
                id: result.value.data.id,
                name: result.value.data.name,
                types: result.value.data.types,
                image:
                  result.value.data.sprites.other['official-artwork']
                    .front_default,
              }
              updatedPokemon.push(uniquePokemon)
            }
            return true
          })
          setPokemons(updatedPokemon)
          setLoading(false)
        })
      }
    }
    getPokes()
  }, [])

  if (loading) return <div style={{color: '#fff'}}>Loading</div>

  return (
    <Wrapper>
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          image={pokemon.image}
        />
      ))}
    </Wrapper>
  )
}

export {Pokemons}
