import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {

  state={
    post:{}
  }


   componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
          console.log(data);
          this.setState({post:data});
        })
   }
  render(){
    console.log(this.state.post)

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
