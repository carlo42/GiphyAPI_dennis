import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

describe('<Header />', () => {
  const getWrapper = filter => {
    return shallow(
      <Header
        headerOptions={{
          currentFilter: filter,
          disabled: false,
          offset: 0,
        }}
      />
    );
  };
  it('should have Puppies dropdown', () => {
    const wrapper = getWrapper('cute+puppies');
    const actual = wrapper.find('DropdownButton').prop('title');
    const expected = 'Puppies';
    expect(actual).toEqual(expected);
  });
  it('should have Kittens dropdown', () => {
    const wrapper = getWrapper('cute+kittens');
    const actual = wrapper.find('DropdownButton').prop('title');
    const expected = 'Kittens';
    expect(actual).toEqual(expected);
  });
});
