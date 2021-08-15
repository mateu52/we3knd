import React from 'react';

import News from "../components/News";

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

function Articles() {
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
	);
}

export default Articles;