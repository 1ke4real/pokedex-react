import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import All from "./pages/All";
// import Pokemon from "./components/Pokemon";

function Index(){
	return (
		<div>

			<All/>
		</div>
	)
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Index())