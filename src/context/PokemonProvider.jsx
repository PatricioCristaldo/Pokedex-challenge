import PropTypes, { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) => {

  const [allPokemons, setAllPokemons] = useState([])
  const [globalPokemons, setGlobalPokemons] = useState([])
  const [offset, setOffset] = useState(0)

// Estados para la aplicación simples
const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);


// llamar 50 pokemons a la API
const getAllPokemons = async(limit=50)=>{
  const baseURL = "https://pokeapi.co/api/v2/"
  const res= await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
  const data = await res.json()
  
  
  const promises = data.results.map(async(pokemon) => {
    const res= await fetch(pokemon.url)
    const data = await res.json()
  return data
  })
  const results = await Promise.all(promises)
  
  setAllPokemons(results)
}

// Global pokemons

const getGlobalPokemons = async() =>{
  const baseURL = "https://pokeapi.co/api/v2/"
  const res= await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
  const data = await res.json()
  
  
  const promises = data.results.map(async(pokemon) => {
    const res= await fetch(pokemon.url)
    const data = await res.json()
  return data
  })
  const results = await Promise.all(promises)
  
  setGlobalPokemons(results)
} 

// Llamar pokemon x ID
const getPokemonByID = async(id) =>{
  const baseURL= "https://pokeapi.co/api/vs/"
  const res= await fetch(`${baseURL}pokemon/${id}`)
  const data = await res.json()
  return data
}

useEffect(() =>{
  getAllPokemons()
},[])

useEffect(() =>{
  getGlobalPokemons()
},[])

  return (
    <PokemonContext.Provider value={{
         numero: 0
    }}>
        {children}
    </PokemonContext.Provider>
  )
}
/* PokemonProvider.propTypes = {
  children: PropTypes.element.isRequired
}; */