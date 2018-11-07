import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import AddListForm from '../AddListForm';

class AddList extends Component {
  state = {
    showAddListForm: false,
  }

  showAddListForm = () => {
    this.setState({ showAddListForm: true });
  }

  hideAddListForm = () => {
    this.setState({ showAddListForm: false });
  }

  render() {
    return (
      this.state.showAddListForm
        ? <AddListForm hideAddListForm={this.hideAddListForm} {...this.props} />
        : (
          <div className="flex-container">
            {this.props.children}
            <Button onClick={this.showAddListForm}>{this.props.buttonText}</Button>
          </div>
        )
    );
  }
}

AddList.propTypes = {
  buttonText: PropTypes.string,
};

AddList.defaultProps = {
  buttonText: 'Add a list...',
};

export default AddList;
