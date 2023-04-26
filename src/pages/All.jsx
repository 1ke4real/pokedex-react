import React from 'react'
import {useState, useEffect} from "react"
import Card from "../components/Card"
import Search from "../components/Search"
import Header from "../components/Header";
import Completion from "../components/Completion";

export default function All() {
	const [pokemons, setPokemons] = useState([])
	const [resultPokedexs, setResultsPokedexs] = useState([])
	const [cardData, setCardData] = useState()


	useEffect(() => {
		async function fetchPokemons() {
			let response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/')
			let data = await response.json()
			setPokemons(data)
		}
		fetchPokemons()
	}, [])

	const handleSearch = (searchText) => {
		let resultPokemon
		if (searchText.length>1){
			console.log("Texte de recherche : ", searchText)
			 resultPokemon = pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchText.toLowerCase())
			)
			setResultsPokedexs(resultPokemon)
		}
		else {
			setResultsPokedexs(null)
			setCardData(null)
		}
	}

	useEffect(()=>{
		console.log (cardData)
	}, [cardData])
	const clearResult = () =>{
		setResultsPokedexs([])
	}

	return (

		<div className="flex flex-col items-center justify-center w-full">

			<Header/>
			<Search onSearch={handleSearch}/>
			{resultPokedexs &&(
				resultPokedexs.map(resultPokedex => {
					return (
						<Completion
							key={resultPokedex.id}
							sprite={resultPokedex.image}
							name={resultPokedex.name}
							hp={resultPokedex.stats.HP}
							attack={resultPokedex.stats.attack}
							defense={resultPokedex.stats.defense}
							speAttack={resultPokedex.stats.special_attack}
							speDefense={resultPokedex.stats.special_defense}
							speed={resultPokedex.stats.speed}
							action={()=> {
								setCardData(resultPokedex)
								clearResult(resultPokedex)

							}}

						/>
					)

				})
			)
			}
			{cardData&& (
					<Card
					id={cardData.id}
					image={cardData.image}
					name={cardData.name}
					types={cardData.apiTypes}
					hp={cardData.stats.HP}
					attack={cardData.stats.attack}
					defense={cardData.stats.defense}
					speAttack={cardData.stats.special_attack}
					speDefence={cardData.stats.special_defense}
					speed={cardData.stats.speed}
					sprite={cardData.sprite}
					/>
			)}

		</div>
	)


}