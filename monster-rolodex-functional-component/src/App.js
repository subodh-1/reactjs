import { useEffect, useState } from "react";
import './App.css';

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {

  const[searchField, setSearchField] = useState(''); 
  const[monsters, setMonsters] = useState([]);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value;
      setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );
    

  return (
    <div className="App">
      <div>
        <h1>Monsters Rolodex</h1>
      </div>
      <SearchBox onSearchChangeHandler={onSearchChange}/> 
      <CardList filteredMonsters={filteredMonsters}/>
    </div>
  );
}

export default App;
