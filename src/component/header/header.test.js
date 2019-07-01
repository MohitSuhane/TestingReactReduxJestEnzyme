import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttribute } from './../../utils/index';

const setUp = ( props={} ) => {
  const component = shallow(<Header {...props}/>);
  return component;
}

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without error', function(){
    const wrapper = findByTestAttribute(component, 'headerComponent'); 
    expect(wrapper.length).toBe(1);
  })

  it('Should render a logo', function(){
    const wrapper = findByTestAttribute(component, 'logoImg');
    expect(wrapper.length).toBe(1);
  })

})
