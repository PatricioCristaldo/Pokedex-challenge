import React, { useContext } from "react"
import { CardPokemon } from '../components';
import { useLocation } from "react-router-dom"
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
  const location = useLocation()

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
  
  return (
    <div className='container'>
			<p className='p-search'>
				Se encontraron <strong>{filteredPokemons.length}</strong>{' '}
				resultados en tu búsqueda:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
  )
}
