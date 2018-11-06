import React from 'react';
import { shallow } from 'enzyme'
import { App } from './App';
import { lists } from './data/lists'

const props = { lists }

describe('<App />', () => {
  let wrapper;

  describe('rendering', () => {
    beforeEach(() => {
      wrapper = shallow(<App { ...props } />);
    });

    it('Renders a button to add new list', () => {
      expect(wrapper.find('AddList').exists()).toBe(true)
    })

    it('Renders TaskList', () => {
      expect(wrapper.find('Connect(TaskList)')).toHaveLength(props.lists.length)
    })
  });
})
