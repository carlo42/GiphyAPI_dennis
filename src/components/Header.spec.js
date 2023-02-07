import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

describe('<Header />', () => {
  it('should have Puppies dropdown', () => {
    const wrapper = shallow(
      <Header
        headerOptions={{
          currentFilter: 'cute+puppies',
          disabled: false,
          offset: 0,
        }}
      />
    );
    const actual = wrapper.find('DropdownButton').prop('title');
    const expected = 'Puppies';
    expect(actual).toEqual(expected);
  });
  it('should have Kittens dropdown', () => {
    const wrapper = shallow(
      <Header
        headerOptions={{
          currentFilter: 'cute+kittens',
          disabled: false,
          offset: 0,
        }}
      />
    );
    const actual = wrapper.find('DropdownButton').prop('title');
    const expected = 'Kittens';
    expect(actual).toEqual(expected);
  });
});
