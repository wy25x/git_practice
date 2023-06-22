import React from 'react';
import './App.css';

import Page1 from './components/Page1'
import AsyncComponent from './components/AsyncComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    // if (route === 'page1'){
    //   this.setState({page: route})
    // } else if (route === 'page2') {
    //   import('./components/Page2').then(page2 => this.setState({page: route, component: page2.default}))
    // } else if (route === 'page3') {
    //   import('./components/Page3').then(page3 => this.setState({page: route, component: page3.default}))
    // }
    this.setState({page: route})
  }

  render() {
    if (this.state.page === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.page === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import(`./components/Page2`));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    } else if (this.state.page === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import(`./components/Page3`));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
    }
    // return (
    //   <div>
    //     {
    //       this.state.page === 'page1'
    //       ?
    //       <Page1 onRouteChange={this.onRouteChange} />
    //       :
    //       <this.state.component onRouteChange={this.onRouteChange} />
    //     }
    //   </div>
    // );
  }
}

export default App;
