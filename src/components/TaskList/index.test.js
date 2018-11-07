import React from 'react'
import { shallow } from 'enzyme'
import { TaskList } from './index'
import { list, item } from '../../data/fixtures'
import { tasks } from '../../data/mockData'

const props = {
  items: list.items,
  name: list.name,
  tasks,
}

describe('<TaskList/>', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskList {...props}  />)
  })

  it('render header', () => {
    expect(wrapper.find('Header').props().children).toEqual(props.name)
  })

  it('Renders a button to add new list', () => {
    expect(wrapper.find('AddList').exists()).toBe(true)
  })

  it('render all <Task />', () => {
    expect(wrapper.find('Task')).toHaveLength(props.items.length)
  })

  it('render button add card', () => {
    expect(wrapper.find('Button').props().children).toEqual('Add a card...');
  })

  it('render AddTaskForm after click button', () => {
    wrapper.find('Button').simulate('click')
    
    expect(wrapper.find('Connect(AddTaskForm)').exists()).toBe(true)
  })
})