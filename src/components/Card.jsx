import React from 'react'

export default function Card(props){
	const typeImages = props.types.map(type => <img key={type.name} src={type.image} alt={type.name} className="w-7 h-7 mx-1"/>)
	return (
		<div className="bg-white m-5 w-1/2 rounded-lg drop-shadow-lg flex  align-center cursor-pointer items-center" onClick={props.action}>
				<div className="header w-15">
					<h3 className="text-right pt-5 px-5">#{props.id} </h3>
					<img src={props.image} alt="" />
				</div>
				<div className="contents">
					<div className="bg-slate-100 rounded-lg p-5 w-full">
						<div className="flex flex-col items-center">
							<h2 className="text-2xl ">{props.name} </h2>
							<div className="flex">
								{typeImages}
							</div>
							<br/>
						</div>
						<ul className="text-center">
							<li>Hp : {props.hp}</li>
							<li>Attaque : {props.attack}</li>
							<li>Défense : {props.defense}</li>
							<li>Attaque spéciale : {props.speAttack}</li>
							<li>Défense Spéciale : {props.speDefence}</li>
							<li>Vitesse  : {props.speed}</li> <br/>
							<img src={props.sprite} alt="" className="mx-auto"/>
						</ul>

					</div>
				</div>
		</div>
	)
}
