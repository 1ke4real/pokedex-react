import React from 'react'
import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";

export default function Pokemon() {
	const [pokemons, setPokemons] = useState([])
	useEffect(() => {
		async function fetchPokemons() {
			let response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
			let data = await response.json();
			setPokemons(data);
		}
		fetchPokemons();
	}, []);
	console.log (pokemons)
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="flex flex-wrap justify-center w-[50%] ">{pokemons.map(pokemon => (
				<div key={pokemon.name} className="bg-white m-5 w-1/4 rounded-lg drop-shadow-lg flex flex-col align-center cursor-pointer" onClick={()=>{
					console.log (pokemon.name)}}>
					<h3 className="text-right pt-5 px-5">#{pokemon.id}</h3>
					<img src={pokemon.sprite} alt="" className=" z-40"/>
					<div className="bg-slate-100 rounded-lg p-5">
						<h2 className="text-2xl text-center">{pokemon.name}</h2>
					</div>
				</div>
			))}</div>
		</div>
	)


}
