import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('component renders correctly', () => {
  expect(app).toMatchSnapshot();
})