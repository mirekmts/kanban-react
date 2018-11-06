import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TaskList from './components/TaskList'
import PropTypes from 'prop-types';
import AddList from './components/AddList'
import {
  addNewList,
} from './actions'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        {this.props.lists.map(list => (
          <TaskList 
            key={list.id}
            id={list.id}
            name={list.name}
            items={list.items}
          />
        ))}
        <div className="task-list">
          <AddList submitMethod={this.props.addNewList} buttonText="Add a list..."/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addNewList: PropTypes.func,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
  })),
}

App.defaultProps = {
  lists: [],
}

const mapStateToProps = (state) => {
	return {
		lists: state.lists,
	}
}	

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
