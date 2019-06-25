import React from 'react';
import ItemSummary from './itemsummary'

function ListItem() {
    const mystyle = {border: 'solid 1 black', maxWidth:`100vw`}

  return (
    <div style={mystyle}>
        	<ItemSummary/>
            <ItemSummary/>
            <ItemSummary/>
    </div>
  );
}

export default ListItem;
