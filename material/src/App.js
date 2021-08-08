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

function News ({ header, intro }) {
	const [score, setScore] = useState(5);

	return (
		<div style= {styles}>
			<h2> {header} </h2>
			<p style={styles.para}> {intro} </p>
			<p>Ocena: {score} </p>
		</div>
	);
}

const data = [
	{
		id: 1, title:'Pilne: ... ', intro:'Tego..'
	},
	{
		id: 2, title:'Wszyscy... ', intro:'Takiego.'
	},
	{
		id: 3, title:'Adam... ', intro:'i Żyła'
	}
];

function App() {
	return (
		<div>
      {data.map((elem ) => (
        <News key={`news-${elem.id}`} header={elem.title} intro={elem.intro} ></News>
      ))}
		</div>
  )
}

export default App;