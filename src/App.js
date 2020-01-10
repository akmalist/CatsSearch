import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component"
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state= {
      monsters:[],
      searchField: ""
    };
  }

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(result => result.json())
  .then(users => this.setState({monsters:users}))
}

handleChange = (e)=>{
     this.setState({searchField: e.target.value})
}
render(){
  const {monsters, searchField} = this.state;
  const fliteredMoster =monsters.filter(m=>
      m.name.toLowerCase().includes(searchField.toLowerCase())     
   )
  return ( <div className="App">
    <h1>Catsatron</h1>
   <SearchBox 
        placeholder="Search Cats" 
        handleChange={this.handleChange}
        />

    <CardList monsters={fliteredMoster}/> 
 </div>)
       
}
};

 

export default App;
