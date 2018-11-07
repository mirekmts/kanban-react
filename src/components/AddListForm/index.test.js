import React from 'react';
import { shallow } from 'enzyme';
import AddListForm from './index';

describe('<AddListForm/>', () => {
  let wrapper;

  beforeEach(() => {
    const mock = jest.fn();
    wrapper = shallow(<AddListForm submitMethod={mock} hideAddListForm={mock} />);
  });

  it('render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  it('render input', () => {
    expect(wrapper.find('Input').exists()).toBe(true);
  });

  it('render Form', () => {
    expect(wrapper.find('Form').exists()).toBe(true);
  });

  it('Prevent from adding list with empty name', () => {
    wrapper.find('Form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state().displayError).toEqual(true);
  });

  describe('updating value and add new list', () => {
    const listName = 'Backlog';

    beforeEach(() => {
      wrapper.find('Input').at(0).simulate('change', { target: { value: listName, name: 'name' } });
    });

    it('updates values in state ', () => {
      expect(wrapper.state().name).toEqual(listName);
    });

    it('after submit form with proper name dont show error message', () => {
      wrapper.find('Form').simulate('submit', { preventDefault: () => {} });
      expect(wrapper.state().displayError).toEqual(false);
    });
  });
});
