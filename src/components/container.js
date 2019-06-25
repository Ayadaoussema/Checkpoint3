import React from 'react';
import ListItem from './ListItem';
function Containe() {
    const mystyle = {border: 'solid 1 black', maxWidth:`100vw`}
  return (
    <div>
        	<h1 style={mystyle}>My container</h1>
            <ListItem/>
    </div>
  );
}

export default Containe;
