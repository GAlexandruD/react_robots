import { useState, useEffect } from 'react';
import './App.css';
import 'tachyons';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(people => {setRobots(people)}
    );
  }, []) //Runs only when the list is empty.

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
    }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  if (robots.length === 0) {
    return <h1 className='tc'>Loading...</h1>
  } else {
    return (
      <div className='tc'>
        <h1 className='f1' id='title' >Robofriends</h1>
        < SearchBox searchChange={onSearchChange}/>
        < Scroll>
          <ErrorBoundry>
            < CardList props={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
