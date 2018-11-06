import React, { PureComponent } from 'react'
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

export default Task