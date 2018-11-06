import React, { PureComponent } from 'react'
import { Button, Input, Form, Message } from 'semantic-ui-react'

class AddListForm extends PureComponent {
  initialState = {
    displayError: false,
    name: this.props.name || '',
  }
  state = {
    ...this.initialState,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { name } = this.state

    if(!name || name.length > 30) {
      this.setState({ displayError: true });
      return 
    }

    this.props.submitMethod( name, this.props.id )
    this.handleCloseForm()
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCloseForm = () => {
    this.setState({
      ...this.initialState,
    }, () => this.props.hideAddListForm())
  }

  render () {
    return (
      <Form error={this.state.displayError} onSubmit={this.handleSubmit}>
        <Form.Field>
          <Input 
            error={this.state.displayError}
            id="name" 
            name="name" 
            type="text"  
            placeholder='Add a list' 
            value={this.state.name}
            onChange={this.handleInputChange} 
          />
          <Message
            error
            content='The list name cannot be empty and can have maximum 30 characters'
          />
        </Form.Field>
        <Button primary>Add</Button>
        <Button onClick={this.props.hideAddListForm} icon='remove' />
      </Form>
    )
  }
}

export default AddListForm