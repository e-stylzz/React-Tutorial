import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
//import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
    
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');

    // old way before enzyme
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});