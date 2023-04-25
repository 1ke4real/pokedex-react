import React from 'react'
import {useState, useEffect} from "react"
import Card from "../components/Card"
import Search from "../components/Search"
import Header from "../components/Header";

export default function All() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		async function fetchPokemons() {
			let response = await fetch('https://pokebuildapi.fr/api/v1/pokemon')
			let data = await response.json()
			setPokemons(data)
			console.log (data)
		}
		fetchPokemons()
	}, [])

	const handleSearch = (searchText) => {
		if (searchText.length>3){
			console.log("Texte de recherche : ", searchText)
			pokemons.map(pokemon =>{
				// console.log (pokemon.name)

			})

		}
	}

	return (

		<div className="flex flex-col items-center justify-center w-full">

			<Header/>
			<Search onSearch={handleSearch}/>
			<div className="flex flex-wrap justify-center w-[50%] ">{pokemons.map(pokemon => (
				<Card
					action={()=>{
						console.log (pokemon.name)
					}
					}
					key={pokemon.name}
					id={pokemon.id}
					sprite={pokemon.sprite}
					name={pokemon.name}
				/>
			))}</div>
		</div>
	)


}