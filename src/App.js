import React, {Component} from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee,faBars)
class App extends Component {
 
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
