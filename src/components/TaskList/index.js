import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateList } from '../../actions';
import Task from '../Task';
import AddTaskForm from '../AddTaskForm';
import AddList from '../AddList';

export class TaskList extends PureComponent {
  state = {
    addingTask: false,
  };

  showAddTaskForm = () => {
		this.setState({addingTask: true});
	};
	
	hideAddTaskForm = () => {
		this.setState({addingTask: false});
  };
  
  render () {
    const taskList = this.props.items.map(id => this.props.tasks.find(task => task.id === id)).filter(note => note);

    return (
      <div className="task-list">
        <AddList 
          id={this.props.id} 
          name={this.props.name} 
          submitMethod={this.props.updateList} 
          buttonText="..."
        >
          <Header className="task-list-header" as='h2'>{this.props.name}</Header>
        </AddList>
        <div className="task-list-content">
          {taskList.map(item => (
            <Task 
              key={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
          { this.state.addingTask ? 
            <AddTaskForm listId={this.props.id} hideAddTaskForm={this.hideAddTaskForm} /> :
            <Button onClick={this.showAddTaskForm} fluid className="add-card">Add a card...</Button>
          }
        </div>
      </div>
    )
  }
}

TaskList.propTypes = {
  updateList: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};

TaskList.defaultProps = {
  items: [],
  updateList: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  updateList: (name, id) => dispatch(updateList(name, id))
});

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
