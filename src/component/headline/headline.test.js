import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute, checkProps } from './../../utils/index';

const setUp =(props={}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}
describe('Headline Component', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a waring', () => {

      const expectedProps = {
        header: 'TestHeader',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@gmail.com',
          age: 24,
          onlineStatus: false,
        }]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  })

  let wrapper;
  describe('Have props', () =>{
    beforeEach(() =>{
      const props = {
        header: 'Test Header',
        desc: 'Test Description',
      };
      wrapper = setUp(props);
    })

    it('Should render without errors', () =>{
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    })

    it('Should render a H1', () =>{
      const h1 = findByTestAttribute(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

    it('Should render a desc', () =>{
      const desc = findByTestAttribute(wrapper, 'desc');
      expect(desc.length).toBe(1);
    })
  })

  describe('Have NO props', () =>{
    beforeEach(() =>{
      wrapper = setUp();
    })

    it('Should not render', () =>{
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    })
  })  
})