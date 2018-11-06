import React, { PureComponent } from 'react'
import Task from '../Task'
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react'

export class TaskList extends PureComponent {
  render () {
    return (
      <div className="task-list">
          <Header className="task-list-header" as='h2'>{this.props.name}</Header>
          <div className="task-list-content">
            {this.props.items.map(item => (
              <Task 
                key={item.id}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
      </div>
    )
  }
}

TaskList.PropTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  })),
}

TaskList.defaultProps = {
  items: [],
}

export default TaskList
