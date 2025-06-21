import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.instructors = ['Subodh', 'Girish', 'Vicky', 'Renuka', 'Gaurav', 'Nisha'];
    this.state = {
      name: 'Subodh',
      index: 0
    };
    this.changeInstructorRandom = this.changeInstructorRandom.bind(this);
  }

  changeInstructorRandom() {
    const currentIndex = Math.floor(Math.random() * this.instructors.length);
    const instructor = this.instructors[currentIndex];
    this.setState({
      index: currentIndex,
      name: instructor
    });
  };
  changeInstructor = () => {
    const nextIndex = (this.state.index + 1) % this.instructors.length;
    this.setState({
      index: nextIndex,
      name: this.instructors[nextIndex]
    });
  };
  resetInstructor = () => {
    this.setState({
      index: 0,
      name: this.instructors[0]
    });
  };
  render () {
    
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              </a>
              <p>Learn React With {this.state.name}</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={this.changeInstructor}>Change Instructor</button>
                <button onClick={this.changeInstructorRandom}>Choose Random Instructor</button>
                <button onClick={this.resetInstructor}>Reset</button>
              </div>
          </header>
        </div>
      );
  }
}

export default App;
