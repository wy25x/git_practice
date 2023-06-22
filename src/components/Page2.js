import React from 'react';

const Page2 = ({ onRouteChange }) => {
	return (
		<div className="App">
	      <header className="App-header">
	          <button onClick={() => onRouteChange('page1')}>Page 1</button>
	          <button disabled>Page 2</button>
	          <button onClick={() => onRouteChange('page3')}>Page 3</button>
	      </header>
	    </div>
	)
}

export default Page2;
