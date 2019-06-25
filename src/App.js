import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js'
import Containe from './components/container'
import ItemSummary from './components/itemsummary'
import ListItem from './components/ListItem'

function App() {
  
  const mystyle = {border: 'solid 1 black', maxWidth:`100vw`}
  const mystyle2 = {color: 'red'}
  return (
    <div style={{ border: 'solid 1 black', maxWidth:`100vw` }}>
    <Containe>    <ItemSummary/>    </Containe>
    <Navbar/>
        	<h1 className ="title red" style={mystyle2}>My title</h1>
          <img src={logo} />
	        <img src="./public/00.jpg" />
    </div>
  );
}

export default App;
