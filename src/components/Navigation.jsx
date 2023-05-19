import React from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useContext } from "react"
import { Link,Outlet } from "react-router-dom"


export const Navigation = () => {
const numero= useContext(PokemonContext)
console.log(numero);

  return (
    <div>
        <Outlet>
        <h1>Navegacion</h1>
       <header className="container">
<Link to="/" className="logo">
    <img src="/img/Pokédex_logo.png" alt="Logo Pokedex"> </img>
</Link>
<form >
    <div className="form-group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-search">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="search" name="valueSearch" id="" placeholder="Busca el pokemon que desees"> </input>
    </div>
    <button className="btn-search">Busqueda</button>
</form>
    </header> 
        </Outlet>
    </div>
  )
}
