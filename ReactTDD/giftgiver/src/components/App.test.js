import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


// BDD (describe)
describe('App', () => {
  const app = shallow(<App />);
  
  it('component renders correctly', () => {
    expect(app).toMatchSnapshot();
  })
  
  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  })
  

  // Describe witihn describe to group similar tests based on first step
  describe('when clicking on `add-gift` button', () => {
    // beforeEach works at beginning of describe and fires before each test runs
    beforeEach( () => {
      app.find('.btn-add').simulate('click');
    });

    // afterEach to reverse effects of beforeEach
    afterEach( () => {
      // Can use setState in tests via Enzyme
      app.setState({ gifts: [] })
    }) 

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([ { id: 1} ])
    })
    
    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    })
  })

})
