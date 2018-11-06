import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

class Task extends PureComponent {
  render () {
    return (
      <Card fluid>
         <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
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