import React from 'react';

const Page1 = ({ onRouteChange }) => {
	return (
		<div className="App">
	      <header className="App-header">
	          <button disabled>Page 1</button>
	          <button onClick={() => onRouteChange('page2')}>Page 2</button>
	          <button onClick={() => onRouteChange('page3')}>Page 3</button>
	      </header>
	    </div>
	)
}

export default Page1;
