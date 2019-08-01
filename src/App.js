import React, {Component} from 'react';

import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {

  state={
    post:{}
  }

  render(){
   

    return (
      <div>
      <Layout>
      <BurgerBuilder/>  
      </Layout>
      </div>
    );
  }
  
}

export default App;
