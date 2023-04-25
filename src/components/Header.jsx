import React from 'react'
import pokedex from '../assets/pokedex.png'
export default function Header() {
	return (
		<div className="p-5">
			<img src={pokedex} alt="" className=""/>
		</div>
	)
}