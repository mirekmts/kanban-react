import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AddListForm from '../AddListForm'
import { Button } from 'semantic-ui-react'

class AddList extends Component {
  state = {
    showAddListForm: false,
  }

  showAddListForm = () => {
		this.setState({showAddListForm: true});
	}
	
	hideAddListForm = () => {
		this.setState({showAddListForm: false});
	}
  render () {
    return (
      this.state.showAddListForm ? 
        <AddListForm {...this.props} /> :
        <div className="flex-container">
          <Button onClick={this.showAddListForm} >{this.props.buttonText}</Button>
        </div>
    )
  }
}

AddList.propTypes = {
  buttonText: PropTypes.string,
}

AddList.defaultProps = {
  buttonText: 'Add a list...',
}

export default AddList