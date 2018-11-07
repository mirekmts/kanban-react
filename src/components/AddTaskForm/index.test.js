import React from 'react'
import { shallow } from 'enzyme'
import { AddTaskForm } from './index'

describe('<AddTaskForm/>', () => {

  let wrapper;

  beforeEach(() => {
    const mock = jest.fn();
    wrapper = shallow(<AddTaskForm onCreateTask={mock} hideAddTaskForm={mock} />)
  })

  it('render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2)
  })

  it('render two inputs', () => {
    expect(wrapper.find('Input')).toHaveLength(2)
  })

  it('render Form', () => {
    expect(wrapper.find('Form').exists()).toBe(true)
  })

  it('Prevent from adding task with empty name', () => {
    wrapper.find('Form').simulate('submit', { preventDefault: () => {}})
    expect(wrapper.state().displayError).toEqual(true)
  })

  describe('updating value and add new task', () => {
    const taskName = 'Task name'
    const taskDescription = 'Description'

    beforeEach(() => {
      wrapper.find('Input').at(0).simulate('change', { target: { value: taskName, name: 'name'}});
      wrapper.find('Input').at(1).simulate('change', { target: { value: taskDescription, name: 'description'}});
    })

    it('updates values in state ', () => {
      expect(wrapper.state().name).toEqual(taskName)
      expect(wrapper.state().description).toEqual(taskDescription)
    })

    it('after submit form with proper name dont show error message', () => {
      wrapper.find('Form').simulate('submit', { preventDefault: () => {}})
      expect(wrapper.state().displayError).toEqual(false)
    })

    it('Prevent from adding task with name more than 30 characters', () => {
      wrapper.find('Input').at(0).simulate('change', { target: { value: 'this is a very long name more than 30 characters', name: 'name'}});
      wrapper.find('Form').simulate('submit', { preventDefault: () => {}})

      expect(wrapper.state().displayError).toEqual(true)
    })
  })
})