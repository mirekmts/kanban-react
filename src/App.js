import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskList from './components/TaskList';
import AddList from './components/AddList';
import {
  addNewList,
} from './actions';
import './App.scss';

export const App = props => (
  <div className="app-container">
    {props.lists.map(list => (
      <TaskList
        key={list.id}
        id={list.id}
        name={list.name}
        items={list.items}
      />
    ))}
    <div className="task-list">
      <AddList submitMethod={props.addNewList} buttonText="Add a list..." />
    </div>
  </div>
);

App.propTypes = {
  addNewList: PropTypes.func,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
  })),
};

App.defaultProps = {
  lists: [],
  addNewList: () => {},
};

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  addNewList: (name, id) => dispatch(addNewList(name, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
