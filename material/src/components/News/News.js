import React, {useState} from "react";

import Autor from "../Autor";
import Scoring from "../Scoring";

const yellow = '#f1c40f';

const styles = {
	backgroundColor: '#ecf0f1',
	border: '#95a5a6 1px solid',
	padding: 10,
	para: {
		background:yellow
	}
};

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

export default News;