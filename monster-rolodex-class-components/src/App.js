
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super(); 
    this.state = {
      monsters: []
    }
      
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( () => {
        return {monsters: users}
      }));
  }

  render() {
    console.log(this.state.monsters);
    const { monsters } = this.state;
    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <input className='search-box' type='search' placeholder='Search Monster Here' onChange={showFiltered}/>
      <div className='card-list'>
        {
          monsters.map((monster) => {
            return (
            <div className='card' key={monster.id}>
            <h2>{monster.name}</h2>
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
