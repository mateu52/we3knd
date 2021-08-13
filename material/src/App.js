import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './App.css';

import News from "./pages/Articles";
//import Header  from "./components/Header";
import Header from "./components/Header";

const data = [
	{
		id: 1, autor: 'Jan brzęczek', title:'Pilne: ... ', intro:'Tego..'
	},
	{
		id: 2, autor: 'Jan brzęczek', title:'Wszyscy... ', intro:'Takiego.'
	},
	{
		id: 3, autor: 'Jan brzęczek', title:'Adam... ', intro:'i Żyła'
	}
];

function App() {
	return (
		<div>
			
			<div>
            <Logo />
            <div>
                <NavLink to="/" label="Link 1"></NavLink>
                <NavLink to="/" label="Link 2"></NavLink>
                <NavLink to="/" label="Link 3"></NavLink>
            </div>
        </div>
			


			{data.map((elem ) => ( //renderuje sie komponenty News
				<News 
				key={`news-${elem.id}`}
				header={elem.title}
				intro={elem.intro}
				autor={elem.autor}
				></News>
			))}
		</div>
  )
}

export default App;