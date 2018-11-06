import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, Input, Form, Message } from 'semantic-ui-react';
import {
  addNewTask,
} from '../actions/actions';

export class AddTaskForm extends PureComponent {
  initialState = {
    displayError: false,
    name: '',
    description: '',
  };

  state = {
    ...this.initialState,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, description } = this.state;

    if(!name || name.length > 30) {
      this.setState({ displayError: true });
      return 
    }

    this.props.addNewTask({name, description }, this.props.listId);
    this.handleCloseForm();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleCloseForm = () => {
    this.setState({
      ...this.initialState,
    }, () => this.props.hideAddTaskForm())
  };

  render () {
    return (
      <Form error={this.state.displayError} onSubmit={this.handleSubmit}>
        <Form.Field>
          <Input 
            error={this.state.displayError}
            id="name" 
            name="name" 
            type="text"  
            placeholder='Enter card name' 
            onChange={this.handleInputChange} 
          />
          <Message
            error
            content='The task name cannot be empty'
          />
          <Input 
            id="description" 
            name="description" 
            type="text" 
            placeholder='Enter card description'
            onChange={this.handleInputChange} 
          />
        </Form.Field>
        <Button primary>Add</Button>
        <Button onClick={this.props.hideAddTaskForm} icon='remove' />
      </Form>
    )
  }
}

AddTaskForm.propTypes = {
  addNewTask: PropTypes.func,
  hideAddTaskForm: PropTypes.func,
  listId: PropTypes.string,
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewTask }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTaskForm)