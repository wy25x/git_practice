import React from 'react';

const Page3 = ({ onRouteChange }) => {
	return (
		<div className="App">
	      <header className="App-header">
	          <button onClick={() => onRouteChange('page1')}>Page 1</button>
	          <button onClick={() => onRouteChange('page2')}>Page 2</button>
	          <button disabled>Page 3</button>
	      </header>
	    </div>
	)
}

export default Page3;
