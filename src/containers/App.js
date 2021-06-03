import { Component } from 'react';
import './App.css';
import 'tachyons';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      active_robots: [],
      search_field: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(people => this.setState({active_robots: people})
    );
  }
  onSearchChange = (event) => {
    this.setState({search_field: event.target.value})
    
    }

  render() {
    //Can make much cleaner:
    // const {active_robots, search_field} = this.state;
    const filteredRobots = this.state.active_robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.search_field.toLowerCase())
    })

    if (this.state.active_robots.length === 0) {
      return <h1 className='tc'>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1' id='title' >Robofriends</h1>
          < SearchBox searchChange={this.onSearchChange}/>
          < Scroll>
            < CardList props={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
    
  }
  
}

export default App;
