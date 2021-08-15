import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './App.css';


import Header from "./components/Header";
import Articles from "./pages/Articles";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<Content>
				<Articles />
			</Content>
			<Footer />
		</div>
  );
}

export default App;