import { Component } from 'react';
//import './App.css';
import 'tachyons';
import {robot_users} from './data';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      active_robots: robot_users,
      search_field: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({search_field: event.target.value})
    
    }

  render() {
    const filteredRobots = this.state.active_robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.search_field.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1>Robot Friends</h1>
        < SearchBox searchChange={this.onSearchChange}/>
        < CardList props={filteredRobots}/>
      </div>
    );
  }
  
}

export default App;
