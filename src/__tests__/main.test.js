import React from 'react';

//shallow just looks at the JSX that is returned
//mount checks the state/prop stuff
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../app.js'
import Main from '../components/main.js'

describe('Should do something with stuff', () => {
  it('more description of stuff', () => {

    let app = shallow(<Main/>)
    expect(app.find('#update').exists());


  })

  it('update date on click', () => {

    
    const wrapper = mount(<App />);
    const testClick = wrapper.find('#get')
    testClick.simulate('click');
    expect(wrapper.state('method')).toEqual('GET')
  })

  it('renders correctly', () => {
    const DOM = renderer.create(<App/>).toJSON();
    expect(DOM).toMatchSnapshot();
  })
})