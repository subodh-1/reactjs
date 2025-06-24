import { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( () => {
        return {monsters: users}
      }));
  }

  showFilteredMonsters = (event) => {
    this.setState({searchField: event.target.value});
  } 

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    
    return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox classname="search-box" placeholder='Search Monster Here' searchHandler={this.showFilteredMonsters} />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
  
}

export default App;
