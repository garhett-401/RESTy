import React from 'react';

//shallow just looks at the JSX that is returned
//mount checks the state/prop stuff
import { shallow, mount } from 'enzyme';
import renderer from 'enzyme-adapter-react-16';

import App from '../app.js'
import Main from '../components/main.js'

describe('Should do something with stuff', () => {
  it('more description of stuff', () => {

    let app = shallow(<Main/>)
    expect(app.find('p').exists()).toBe(true);


  })

  it('update date on click', () => {

    
    let app = mount(<Main/>)
    let test = app.find('#get')

    test.simulate('click');
    expect(app.state('method')).toBe('Get')
  })

  it('renders correctly', () => {
    const DOM = renderer.create(<Main/>).toJSON();
    expect(DOM).toMatchSnapshot();
  })
})