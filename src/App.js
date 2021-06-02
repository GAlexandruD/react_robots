import { Component } from 'react';
import './App.css';
import Card from './Card';
import 'tachyons';
import {robot_users} from './data';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        < CardList props={robot_users}/>
        < Card id={robot_users[0].id} name={robot_users[0].name} email={robot_users[0].email}/>
        < Card id={robot_users[1].id} name={robot_users[1].name} email={robot_users[1].email}/>
        < Card id={robot_users[2].id} name={robot_users[2].name} email={robot_users[2].email}/>
      </div>
    );
  }
  
}

export default App;
