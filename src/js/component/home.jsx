import React, { useState, useEffect } from "react";

//import components
import GirdCardPage from "./grid-cards.jsx";

//import data
import data from "../../data/data.json"

//create your first component
const Home = () => {
	const [ characters, setCharacters ] = useState([])
    const [ search, setSearch ] = useState("")
	let listCharacter = []

	const searcher = (elem)=>{
		setSearch(elem.target.value)
	}

	if(!search){
		listCharacter=characters
	}else{
		listCharacter = characters.filter((e)=>
			e.name.toLowerCase().includes(search.toLocaleLowerCase())
		)
	}

    useEffect(()=>{
        setCharacters(data)
    })

	return (
		<div className="d-flex justify-content-center flex-column">
			<h1 className="m-5">Rick&Morty Characters</h1>
			<input type="text" onChange={searcher} value={search} className="m-5 p-2" placeholder="Filter" />
			<GirdCardPage item={listCharacter}/>
		</div>
	);
};

export default Home;
