import React from 'react';
import { shallow } from 'enzyme';
import Task from './index';
import { item } from '../../data/fixtures';

const props = item;

describe('<Task/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Task {...props} />);
  });

  it('render header <Task />', () => {
    expect(wrapper.find('CardHeader').contains(props.name)).toBe(true);
  });

  it('render description <Task />', () => {
    expect(wrapper.find('CardDescription').contains(props.description)).toBe(true);
  });
});
