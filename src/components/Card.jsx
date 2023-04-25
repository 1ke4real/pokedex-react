import React from 'react'

export default function Card(props){
	// const typeImages = props.types.map(type => <img key={type.name} src={type.image} alt={type.name} className="w-7 h-7 mx-1"/>)
	return (
		<div key={props.name} className="bg-white m-5 w-1/4 rounded-lg drop-shadow-lg flex flex-col align-center cursor-pointer" onClick={props.action}>
				<h3 className="text-right pt-5 px-5">#{props.id}</h3>
				<img src={props.sprite} alt="" className=" z-40"/>
				<div className="bg-slate-100 rounded-lg p-5">
					<h2 className="text-2xl text-center">{props.name}</h2>
					<div className="flex justify-center">
						{/*{typeImages}*/}
					</div>
			</div>
		</div>
	)
}
