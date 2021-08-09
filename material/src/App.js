import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './App.css';

const yellow = '#f1c40f';

const styles = {
	backgroundColor: '#ecf0f1',
	border: '#95a5a6 1px solid',
	padding: 10,
	para: {
		background:yellow
	}
}

const Scoring = ({ score }) => <p> Score: </p>; //komponenty odpalone w funkcji News
const Autor = ({ autor }) => <p>Autor: {autor} </p>; //z wartoscia ktora jest w zmiennej danych -data

function News ({ header, intro, autor }) { //dostaje 3propsy
	const [score, setScore] = useState(5);

	return (
		<div style= {styles}>
			<h2> {header} </h2>
			<p style={styles.para}> {intro} </p>
			<Autor autor={autor} />
			<Scoring score={score} />
		</div>
	);
}

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