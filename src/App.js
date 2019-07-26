import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

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
      <div className="App">
       <h1>Hi I am React</h1>
      </div>
    );
  }
  
}

export default App;
