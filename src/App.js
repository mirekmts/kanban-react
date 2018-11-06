import React, { Component } from 'react';
import TaskList from './components/TaskList'
import PropTypes from 'prop-types';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.lists.map(list => (
          <TaskList 
            key={list.id}
            id={list.id}
            name={list.name}
            items={list.items}
          />
          ))}
      </div>
    );
  }
}

App.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
  })),
}

App.defaultProps = {
  lists: [],
}

export default App;
