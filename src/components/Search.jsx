import React from 'react';
import {useState, useEffect} from "react"

export default function Search(props){
	const [searchText, setSearchText] = useState("")

	const handleInputChange = (e) =>{
		setSearchText(e.target.value)
		props.onSearch(searchText)
	}
	return(
		<div className="w-[50%] p-10">
			<div className=" flex contents-center drop-shadow-lg">
				<span className="p-4 text-slate-400 bg-white rounded-l-lg">
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
				<path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/>
			  </svg>
			</span>
				<input className="w-full p-4 rounded-r-lg  placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-none focus:ring-none focus:ring-0" type="text" placeholder="Recherchez" value={searchText} onChange={handleInputChange}/>
			</div>
		</div>
	)
}

