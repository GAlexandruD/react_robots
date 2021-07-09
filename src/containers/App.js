import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import './App.css';
import 'tachyons';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    active_robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}



class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    //Can make much cleaner:
    // const {active_robots, search_field} = this.state;
    const {searchField, onSearchChange, active_robots, isPending} = this.props
    const filteredRobots = active_robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (isPending) {
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
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
