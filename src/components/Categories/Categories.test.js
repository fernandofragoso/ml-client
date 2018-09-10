import React from 'react';
import { shallow } from 'enzyme';
import { categoriesMock } from '../../utils/mocks';
import Categories from './Categories';

it('renders without crashing', () => {
  shallow(<Categories categories={categoriesMock}/>);
});