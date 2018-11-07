import React from 'react';
import { shallow } from 'enzyme';
import AddList from './index';

describe('<AddList/>', () => {
  let wrapper;

  const props = {
    buttonText: 'Add list',
    submitMethod: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<AddList {...props} />);
  });

  it('render button with text', () => {
    expect(wrapper.find('Button').props().children).toEqual(props.buttonText);
  });

  it('render AddTaskForm after click button', () => {
    wrapper.find('Button').simulate('click');

    expect(wrapper.find('AddListForm').exists()).toBe(true);
  });
});
