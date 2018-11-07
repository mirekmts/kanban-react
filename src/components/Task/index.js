import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Card, Button } from 'semantic-ui-react'

class Task extends PureComponent {
  onRemoveTask = () => {
    this.props.onRemoveTask(this.props.id)
  }
  render () {
    return (
      <Card fluid>
         <Card.Content>
           <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button icon='trash' size='mini' color='red' onClick={this.onRemoveTask} />
        </Card.Content>
      </Card>
    )
  }
}

Task.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

export default Task