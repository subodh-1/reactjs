
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super(); 
    this.state = {
      monsters: [],
      searchText: ''
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
    this.setState({searchText: event.target.value});
  } 

  render() {
    const { searchText, monsters } = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
    
    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <input className='search-box' type='search' placeholder='Search Monster Here' onChange={this.showFilteredMonsters}/>
      <div className='card-list'>
        {
          filteredMonsters.map((monster) => {
            return (
            <div className='card-container' key={monster.id}>
              <img
                alt='monster'
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
            )
          })
        }
      </div>
    </div>
    )
  }
  
}

export default App;
